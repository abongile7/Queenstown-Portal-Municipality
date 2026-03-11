import Link from 'next/link';

const services = ['Water & Sanitation', 'Electricity Services', 'Refuse Removal', 'Road Maintenance', 'Housing Services', 'Community Safety', 'Health Services', 'Public Transport'];

export default function ServicesPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-municipalBlue">Municipal Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
        {services.map((s) => <article key={s} className="card"><h3 className="font-semibold">{s}</h3><p className="text-sm">Service information and citizen request access.</p></article>)}
      </div>
      <Link href="/services/refuse-collection" className="text-municipalBlue font-semibold">View refuse collection schedule →</Link>
    </div>
  );
}
