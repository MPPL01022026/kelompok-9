export default function Loading() {
  return <main className="container page-loading" aria-busy="true" aria-label="Memuat katalog">
    <span className="loading-line loading-kicker"/><span className="loading-line loading-heading"/><span className="loading-line loading-copy"/>
    <div className="loading-grid">{Array.from({ length: 4 }, (_, index) => <div className="loading-card" key={index}><span/><i/><i/><i/></div>)}</div>
  </main>;
}
