export default function AdminLoading() {
  return <main className="admin-shell page-loading" aria-busy="true" aria-label="Memuat dashboard admin">
    <header className="admin-topbar"><span className="loading-line loading-brand"/><span className="loading-line loading-copy"/></header>
    <section className="admin-content"><span className="loading-line loading-heading"/><div className="loading-grid admin-loading-grid">{Array.from({ length: 3 }, (_, index) => <div className="loading-card" key={index}><i/><i/></div>)}</div><div className="loading-card loading-table"/></section>
  </main>;
}
