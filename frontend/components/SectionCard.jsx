export default function SectionCard({ title, eyebrow, children, className = '', ...props }) {
  return (
    <section className={`panel ${className}`.trim()} {...props}>
      {eyebrow ? <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-municipalGold">{eyebrow}</p> : null}
      <h2 className="text-2xl font-semibold text-slate-950">{title}</h2>
      <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-[15px]">{children}</div>
    </section>
  );
}
