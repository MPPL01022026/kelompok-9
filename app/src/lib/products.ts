import { createClient } from "@/lib/supabase/server";
import { readLocalStore } from "@/lib/local-store";
export { formatRupiah } from "@/lib/format";
export { sampleProducts } from "@/lib/sample-products";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  emoji: string;
  isActive: boolean;
};

type ProductRow = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  emoji: string;
};

function mapProduct(row: ProductRow): Product {
  return { ...row, isActive: true };
}

export async function getPublicProducts() {
  const supabase = await createClient();
  if (!supabase) return { products: (await readLocalStore()).products.filter((product) => product.isActive), source: "local" as const };

  const { data, error } = await supabase
    .from("products")
    .select("id, name, description, price, category, emoji")
    .eq("is_active", true)
    .order("created_at", { ascending: true });

  if (error) return { products: [], source: "error" as const };
  return { products: (data ?? []).map((row) => mapProduct(row)), source: "database" as const };
}

export async function getPublicProduct(id: string) {
  const supabase = await createClient();
  if (!supabase) return (await readLocalStore()).products.find((product) => product.id === id && product.isActive) ?? null;

  const { data, error } = await supabase
    .from("products")
    .select("id, name, description, price, category, emoji")
    .eq("id", id)
    .eq("is_active", true)
    .maybeSingle();

  if (error) return null;
  return data ? mapProduct(data) : null;
}

