import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "./CartProvider";

export const metadata: Metadata = {
  title: "Ayam Gunting Malaysia | Menu dan Pesanan",
  description: "Pilih menu Ayam Gunting Malaysia, pesan untuk diambil di kedai, dan gunakan kode pesanan saat pengambilan.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body><CartProvider>{children}</CartProvider></body></html>;
}
