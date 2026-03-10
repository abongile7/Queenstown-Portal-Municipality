import Link from 'next/link';
import SectionCard from '../components/SectionCard';

export default function HomePage() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl p-8 bg-gradient-to-r from-municipalBlue to-sky-700 text-white">
        <h2 className="text-3xl font-bold mb-2">Serving Queenstown Communities Digitally</h2>
        <p>Modern services, transparent governance, and online recruitment for all residents.</p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link href="/services" className="px-4 py-2 rounded bg-municipalGold text-slate-900 font-semibold">View Services</Link>
          <Link href="/careers" className="px-4 py-2 rounded border border-white">Apply for Vacancies</Link>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <SectionCard title="Quick Services"><p>Water faults, billing support, permits, waste schedules.</p></SectionCard>
        <SectionCard title="Municipal Announcements"><p>Council meeting on infrastructure upgrades this Friday.</p></SectionCard>
        <SectionCard title="Emergency Contacts"><p>Fire: 10177 · Ambulance: 10177 · Local: 045 807 7600</p></SectionCard>
        <SectionCard title="Latest News"><p>Road resurfacing project begins in Ezibeleni Zone 3.</p></SectionCard>
        <SectionCard title="Community Updates"><p>Public participation workshops open for IDP reviews.</p></SectionCard>
        <SectionCard title="Careers Highlight"><p>Now hiring: Civil Engineer, HR Officer, Water Technician.</p></SectionCard>
      </div>
    </div>
  );
}
