const notices = [
  ['Planned Water Interruption Notice', '2026-03-12'],
  ['Public Participation Meeting - IDP Review', '2026-03-10'],
  ['Electricity Maintenance Notice', '2026-03-08']
];

export default function NoticesPage() {
  return <div className="space-y-3"><h2 className="text-2xl font-bold text-municipalBlue">Public Notices</h2>{notices.map(([t,d]) => <article key={t} className="card"><p className="font-semibold">{t}</p><p className="text-sm">{d}</p></article>)}</div>;
}
