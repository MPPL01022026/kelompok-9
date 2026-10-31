"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type CartItem = { productId: string; quantity: number };
type CartContextValue = { items: CartItem[]; itemCount: number; add: (productId: string, quantity?: number) => void; update: (productId: string, quantity: number) => void; remove: (productId: string) => void; clear: () => void; hydrated: boolean };

const STORAGE_KEY = "ayam-gunting-cart-v1";
const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
      if (Array.isArray(saved)) setItems(saved.filter((item): item is CartItem => Boolean(item && typeof item.productId === "string" && Number.isInteger(item.quantity) && item.quantity > 0 && item.quantity <= 999)));
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [hydrated, items]);

  const value = useMemo<CartContextValue>(() => ({
    items,
    itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
    hydrated,
    add(productId, quantity = 1) {
      if (!productId || !Number.isInteger(quantity) || quantity < 1) return;
      setItems((current) => {
        const existing = current.find((item) => item.productId === productId);
        if (existing) return current.map((item) => item.productId === productId ? { ...item, quantity: Math.min(999, item.quantity + quantity) } : item);
        return [...current, { productId, quantity: Math.min(999, quantity) }];
      });
    },
    update(productId, quantity) {
      if (!Number.isInteger(quantity) || quantity < 1) return;
      setItems((current) => current.map((item) => item.productId === productId ? { ...item, quantity: Math.min(999, quantity) } : item));
    },
    remove(productId) { setItems((current) => current.filter((item) => item.productId !== productId)); },
    clear() { setItems([]); },
  }), [hydrated, items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const value = useContext(CartContext);
  if (!value) throw new Error("useCart must be used within CartProvider");
  return value;
}
