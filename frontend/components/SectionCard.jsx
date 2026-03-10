export default function SectionCard({ title, children }) {
  return (
    <section className="card">
      <h2 className="text-xl font-semibold mb-3 text-municipalBlue">{title}</h2>
      <div className="text-sm text-slate-700 space-y-2">{children}</div>
    </section>
  );
}
