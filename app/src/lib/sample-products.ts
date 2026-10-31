import type { Product } from "@/lib/products";

export const sampleProducts: Product[] = [
  { id: "ayam-gunting", name: "Ayam Gunting", description: "Ayam renyah berbumbu, dipotong praktis untuk dinikmati.", price: 15000, category: "Favorit", emoji: "", isActive: true },
  { id: "kentang-goreng", name: "Kentang Goreng", description: "Kentang goreng keemasan dengan tekstur renyah.", price: 10000, category: "Camilan", emoji: "", isActive: true },
  { id: "chicken-ball", name: "Chicken Ball", description: "Bola ayam gurih untuk teman ngemil.", price: 12000, category: "Camilan", emoji: "", isActive: true },
  { id: "fire-chicken-wings", name: "Fire Chicken Wings", description: "Sayap ayam dengan sensasi bumbu pedas.", price: 18000, category: "Pedas", emoji: "", isActive: true },
];
