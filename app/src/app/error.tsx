"use client";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main className="error-page"><section role="alert"><h1>Halaman tidak dapat dimuat</h1><p>Terjadi kendala saat memproses permintaan. Coba muat ulang halaman.</p><button className="button-primary" onClick={() => reset()}>Coba lagi</button></section></main>;
}
