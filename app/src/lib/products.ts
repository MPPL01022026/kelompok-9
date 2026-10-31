import { createClient } from "@/lib/supabase/server";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  emoji: string;
  isActive: boolean;
};

export const sampleProducts: Product[] = [
  { id: "ayam-gunting", name: "Ayam Gunting", description: "Ayam renyah berbumbu, dipotong praktis untuk dinikmati.", price: 15000, category: "Favorit", emoji: "🍗", isActive: true },
  { id: "kentang-goreng", name: "Kentang Goreng", description: "Kentang goreng keemasan dengan tekstur renyah.", price: 10000, category: "Camilan", emoji: "🍟", isActive: true },
  { id: "chicken-ball", name: "Chicken Ball", description: "Bola ayam gurih untuk teman ngemil.", price: 12000, category: "Camilan", emoji: "🍡", isActive: true },
  { id: "fire-chicken-wings", name: "Fire Chicken Wings", description: "Sayap ayam dengan sensasi bumbu pedas.", price: 18000, category: "Pedas", emoji: "🌶️", isActive: true },
];

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
  if (!supabase) return { products: sampleProducts, source: "sample" as const };

  const { data, error } = await supabase
    .from("products")
    .select("id, name, description, price, category, emoji")
    .eq("is_active", true)
    .order("created_at", { ascending: true });

  if (error) return { products: sampleProducts, source: "sample" as const };
  return { products: (data ?? []).map((row) => mapProduct(row)), source: "database" as const };
}

export async function getPublicProduct(id: string) {
  const supabase = await createClient();
  if (!supabase) return sampleProducts.find((product) => product.id === id && product.isActive) ?? null;

  const { data, error } = await supabase
    .from("products")
    .select("id, name, description, price, category, emoji")
    .eq("id", id)
    .eq("is_active", true)
    .maybeSingle();

  if (error) return sampleProducts.find((product) => product.id === id && product.isActive) ?? null;
  return data ? mapProduct(data) : null;
}

export function formatRupiah(amount: number) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(amount);
}
