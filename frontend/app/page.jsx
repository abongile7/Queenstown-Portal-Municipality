import Image from 'next/image';
import Link from 'next/link';
import SectionCard from '../components/SectionCard';

const stats = [
  ['Registered Residents', '58,240'],
  ['Available Jobs', '37'],
  ['Applications Submitted', '1,294'],
  ['Youth Programs', '14'],
  ['EPWP Workers', '810']
];

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="relative rounded-2xl overflow-hidden min-h-[320px]">
        <Image src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df" alt="Municipality hero" fill className="object-cover" />
        <div className="absolute inset-0 bg-municipalBlue/65 p-8 flex flex-col justify-end text-white">
          <h2 className="text-3xl font-bold">Chris Hani District Municipality</h2>
          <p className="mt-2 max-w-2xl">Serving Communities Through Sustainable Development</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Link href="/careers" className="px-4 py-2 rounded bg-municipalGold text-slate-900 font-semibold">Careers / Jobs</Link>
            <Link href="/youth-opportunities" className="px-4 py-2 rounded border border-white">Youth Opportunities</Link>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <SectionCard title="Municipality Overview"><p>Official digital portal for Komani and district communities.</p></SectionCard>
        <SectionCard title="Departments"><p>Corporate, Community, Finance, Engineering, and IPED.</p></SectionCard>
        <SectionCard title="Careers / Jobs"><p>Apply online for current municipal vacancies.</p></SectionCard>
        <SectionCard title="Youth Opportunities"><p>Internships, learnerships, graduate programmes, and training.</p></SectionCard>
        <SectionCard title="Municipal News"><p>Service delivery updates and local announcements.</p></SectionCard>
        <SectionCard title="Community Projects"><p>Roads, water infrastructure, and social development initiatives.</p></SectionCard>
      </div>

      <section>
        <h3 className="text-2xl font-bold text-municipalBlue mb-4">Municipal Statistics</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {stats.map(([label, value]) => (
            <div key={label} className="card text-center">
              <p className="text-2xl font-bold text-municipalBlue">{value}</p>
              <p className="text-xs text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionCard title="Contact Information">
        <p>Chris Hani District Municipality, 15 Bells Road, Queenstown (Komani), Eastern Cape, South Africa.</p>
        <p>Phone: 045 808 4600 · Email: communications@chrishanidm.gov.za</p>
      </SectionCard>
    </div>
  );
}
