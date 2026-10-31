import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID, scryptSync, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { sampleProducts } from "@/lib/sample-products";
import type { Product } from "@/lib/products";

export type LocalOrderItem = { id: string; productId: string; productName: string; quantity: number; unitPrice: number; subtotal: number };
export type LocalOrder = { id: string; customerName: string; happenedAt: string; status: "pending" | "completed" | "cancelled"; totalAmount: number; items: LocalOrderItem[] };
export type LocalStore = { products: Product[]; orders: LocalOrder[] };

const storePath = path.join(process.cwd(), ".local-data", "store.json");
const adminCookie = "ayam_admin_session";
const defaultStore: LocalStore = { products: sampleProducts, orders: [] };

async function ensureStore() {
  await mkdir(path.dirname(storePath), { recursive: true });
  try { await readFile(storePath, "utf8"); }
  catch { await writeFile(storePath, JSON.stringify(defaultStore, null, 2), { flag: "wx" }).catch(() => undefined); }
}

export async function readLocalStore(): Promise<LocalStore> {
  await ensureStore();
  try {
    const data = JSON.parse(await readFile(storePath, "utf8")) as Partial<LocalStore>;
    return { products: Array.isArray(data.products) ? data.products : defaultStore.products, orders: Array.isArray(data.orders) ? data.orders : [] };
  } catch { return defaultStore; }
}

export async function updateLocalStore<T>(update: (store: LocalStore) => T | Promise<T>): Promise<T> {
  await ensureStore();
  const lockPath = `${storePath}.lock`;
  let lockHandle;
  for (let attempt = 0; attempt < 40; attempt++) {
    try { lockHandle = await import("node:fs/promises").then(({ open }) => open(lockPath, "wx")); break; }
    catch (error) { if ((error as NodeJS.ErrnoException).code !== "EEXIST") throw error; await new Promise((resolve) => setTimeout(resolve, 25)); }
  }
  if (!lockHandle) throw new Error("Local data is busy. Please retry.");
  try {
    const store = await readLocalStore();
    const result = await update(store);
    await writeFile(storePath, JSON.stringify(store, null, 2));
    return result;
  } finally {
    await lockHandle.close();
    const { unlink } = await import("node:fs/promises");
    await unlink(lockPath).catch(() => undefined);
  }
}

export function hashLocalPassword(password: string, salt: string = randomUUID()) {
  return `${salt}:${scryptSync(password, salt, 64).toString("hex")}`;
}

export function verifyLocalPassword(password: string, stored: string) {
  const [salt, key] = stored.split(":");
  if (!salt || !key || !/^[a-f\d]{128}$/i.test(key)) return false;
  return timingSafeEqual(scryptSync(password, salt, 64), Buffer.from(key, "hex"));
}

export async function isLocalAdmin() {
  const jar = await cookies();
  const session = jar.get(adminCookie)?.value;
  return Boolean(session && process.env.LOCAL_ADMIN_PASSWORD && session === hashLocalPassword(process.env.LOCAL_ADMIN_PASSWORD, "ayam-gunting-local-session"));
}

export function verifyConfiguredLocalPassword(password: string) {
  const configured = process.env.LOCAL_ADMIN_PASSWORD;
  if (!configured) return false;
  const expected = scryptSync(configured, "ayam-gunting-local-password", 64);
  const actual = scryptSync(password, "ayam-gunting-local-password", 64);
  return timingSafeEqual(actual, expected);
}

export async function setLocalAdminSession() {
  const jar = await cookies();
  jar.set(adminCookie, hashLocalPassword(process.env.LOCAL_ADMIN_PASSWORD!, "ayam-gunting-local-session"), { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 60 * 60 * 12 });
}

export async function clearLocalAdminSession() {
  const jar = await cookies();
  jar.delete(adminCookie);
}

export async function createLocalOrder(customerName: string, requested: { productId: string; quantity: number }[]) {
  return updateLocalStore((store) => {
    const items: LocalOrderItem[] = requested.map(({ productId, quantity }) => {
      const product = store.products.find((candidate) => candidate.id === productId && candidate.isActive);
      if (!product) throw new Error("unavailable");
      const subtotal = product.price * quantity;
      if (!Number.isSafeInteger(subtotal)) throw new Error("total");
      return { id: randomUUID(), productId, productName: product.name, quantity, unitPrice: product.price, subtotal };
    });
    const totalAmount = items.reduce((sum, item) => sum + item.subtotal, 0);
    if (!Number.isSafeInteger(totalAmount) || totalAmount > 2147483647) throw new Error("total");
    const order: LocalOrder = { id: randomUUID(), customerName, happenedAt: new Date().toISOString(), status: "pending", totalAmount, items };
    store.orders.unshift(order);
    return order.id;
  });
}

export async function saveLocalProduct(product: Omit<Product, "id">, id?: string) {
  return updateLocalStore((store) => {
    const existing = id ? store.products.find((item) => item.id === id) : undefined;
    if (id && !existing) throw new Error("missing");
    const saved = { ...product, id: existing?.id ?? randomUUID() };
    if (existing) Object.assign(existing, saved);
    else store.products.unshift(saved);
    return saved.id;
  });
}

export async function setLocalProductAvailability(id: string, active: boolean) {
  return updateLocalStore((store) => {
    const product = store.products.find((item) => item.id === id);
    if (!product) return false;
    product.isActive = active;
    return true;
  });
}

export async function setLocalOrderStatus(id: string, status: "completed" | "cancelled") {
  return updateLocalStore((store) => {
    const order = store.orders.find((item) => item.id === id && item.status === "pending");
    if (!order) return false;
    order.status = status;
    return true;
  });
}

export async function getLocalOrder(id: string) {
  const store = await readLocalStore();
  return store.orders.find((order) => order.id === id) ?? null;
}

export const localDataDirectory = path.dirname(storePath);
