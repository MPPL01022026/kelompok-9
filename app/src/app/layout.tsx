import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "./CartProvider";

export const metadata: Metadata = {
  title: "Ayam Gunting Malaysia — Renyahnya Bikin Balik Lagi",
  description: "Jelajahi menu Ayam Gunting Malaysia dan temukan camilan favoritmu.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body><CartProvider>{children}</CartProvider></body></html>;
}
