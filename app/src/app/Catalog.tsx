"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatRupiah } from "@/lib/format";

export function Catalog({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Semua");
  const categories = useMemo(() => ["Semua", ...new Set(products.map((product) => product.category))], [products]);
  const visible = products.filter((product) => {
    const matchesQuery = `${product.name} ${product.description} ${product.category}`.toLocaleLowerCase("id-ID").includes(query.toLocaleLowerCase("id-ID"));
    return matchesQuery && (category === "Semua" || product.category === category);
  });

  return <>
    <div className="catalog-controls" aria-label="Cari dan saring produk">
      <label className="catalog-search"><Search size={17} aria-hidden="true" /><span className="sr-only">Cari produk</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari nama menu" type="search" /></label>
      <div className="catalog-categories" aria-label="Kategori produk">
        {categories.map((item) => <button key={item} type="button" className={`category-chip${category === item ? " is-selected" : ""}`} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
      </div>
    </div>
    {visible.length ? <div className="menu-grid">{visible.map((product) => <article className="product-card" key={product.id}>
      <Link href={`/products/${product.id}`} aria-label={`Lihat detail ${product.name}`}>
        <div className="product-image"><span className="product-tag">{product.category}</span><span className="product-emoji" aria-hidden="true">{product.emoji}</span></div>
        <div className="product-info"><div className="product-row"><h3>{product.name}</h3><span className="price">{formatRupiah(product.price)}</span></div><p>{product.description}</p><div className="product-link"><span>Lihat detail</span><span><ArrowRight size={13} aria-hidden="true" /></span></div></div>
      </Link>
    </article>)}</div> : <div className="catalog-empty" role="status"><h3>{products.length ? "Menu tidak ditemukan" : "Menu belum tersedia"}</h3><p>{products.length ? "Ubah kata pencarian atau pilih kategori lain." : "Silakan periksa kembali nanti."}</p>{(query || category !== "Semua") && <button className="text-button" type="button" onClick={() => { setQuery(""); setCategory("Semua"); }}>Hapus filter</button>}</div>}
    <p className="catalog-count" aria-live="polite">Menampilkan {visible.length} dari {products.length} menu</p>
  </>;
}
