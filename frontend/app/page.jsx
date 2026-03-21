import Link from 'next/link';
import SectionCard from '../components/SectionCard';
import {
  latestNews,
  leadership,
  localMunicipalities,
  municipalityMeta,
  procurementLinks,
  quickLinks,
  serviceAreas,
  tenderAwards,
} from '../lib/municipalityData';

const heroStats = [
  { label: 'Leadership contacts', value: '4 executive office bearers' },
  { label: 'Local municipalities', value: '6 district partners' },
  { label: 'Recent tender awards', value: '6 highlighted awards' },
  { label: 'Resident quick links', value: 'Complaints, reports, IDP, tenders' },
];

export default function HomePage() {
  return (
    <div className="space-y-8 sm:space-y-10">
      <section className="overflow-hidden rounded-[36px] bg-gradient-to-br from-municipalBlue via-sky-800 to-slate-950 text-white shadow-2xl shadow-slate-300">
        <div className="grid gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[1.3fr_0.7fr] lg:px-10 lg:py-12">
          <div className="space-y-6">
            <p className="badge bg-white/10 text-white">Modernised from the official municipality website</p>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-municipalGold">{municipalityMeta.region}</p>
              <h2 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
                A cleaner, faster, and more user-friendly portal for Chris Hani District Municipality.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                This redesign keeps the municipality-specific content from the official site, but restructures it into clear resident journeys for
                leadership information, service access, public notices, tender visibility, and community news.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/services" className="rounded-full bg-municipalGold px-5 py-3 font-semibold text-slate-950 transition hover:brightness-105">
                Explore services
              </Link>
              <Link href="/projects" className="rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:bg-white/10">
                View tenders & projects
              </Link>
              <a href={municipalityMeta.website} className="rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:bg-white/10">
                Official source site
              </a>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.35em] text-municipalGold">Need help now?</p>
            <div className="mt-4 space-y-4 text-sm text-slate-100">
              <div>
                <p className="font-semibold">Customer care line</p>
                <p>{municipalityMeta.careLine}</p>
              </div>
              <div>
                <p className="font-semibold">Customer care email</p>
                <p>{municipalityMeta.customerCareEmail}</p>
              </div>
              <div>
                <p className="font-semibold">Fraud hotline</p>
                <p>{municipalityMeta.fraudHotline}</p>
              </div>
              <div>
                <p className="font-semibold">Main office</p>
                <p>{municipalityMeta.address.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-px bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
          {heroStats.map((item) => (
            <div key={item.label} className="bg-slate-950/20 px-6 py-5">
              <p className="text-sm text-slate-300">{item.label}</p>
              <p className="mt-1 text-lg font-semibold">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-grid">
        {quickLinks.map((item) => (
          <a key={item.title} href={item.href} className="link-card">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-municipalGold">Quick link</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-950">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
          </a>
        ))}
      </section>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <SectionCard title="Leadership snapshot" eyebrow="Office bearers">
          <div className="grid gap-4 md:grid-cols-2">
            {leadership.executive.map((person) => (
              <article key={person.name} className="rounded-3xl bg-slate-50 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{person.role}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-950">{person.name}</h3>
                <p>{person.summary}</p>
                <a href={`mailto:${person.email}`} className="mt-3 inline-flex text-sm font-semibold text-municipalBlue hover:text-sky-700">
                  {person.email}
                </a>
              </article>
            ))}
          </div>
          <div className="rounded-3xl bg-emerald-50 p-5 text-emerald-950">
            <p className="text-xs uppercase tracking-[0.25em]">Council update</p>
            <p className="mt-2 text-base font-semibold">New council members highlighted on the official site</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              {leadership.newCouncilMembers.map((member) => (
                <li key={member.name}>{member.name}</li>
              ))}
            </ul>
          </div>
        </SectionCard>

        <SectionCard title="District coverage" eyebrow="Local municipalities">
          <div className="grid gap-3">
            {localMunicipalities.map((item) => (
              <a key={item.name} href={item.href} className="rounded-2xl border border-slate-200 px-4 py-4 font-medium transition hover:border-sky-200 hover:bg-sky-50">
                {item.name}
              </a>
            ))}
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Priority service areas" eyebrow="Resident services">
        <div className="section-grid">
          {serviceAreas.map((service) => (
            <article key={service.title} className="rounded-3xl bg-slate-50 p-5">
              <h3 className="text-lg font-semibold text-slate-950">{service.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </SectionCard>

      <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        <SectionCard title="Latest municipality updates" eyebrow="News">
          <div className="grid gap-4">
            {latestNews.map((item) => (
              <a key={item.title} href={item.href} className="rounded-3xl border border-slate-200 p-5 transition hover:border-sky-200 hover:bg-sky-50">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-municipalGold">{item.category}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
              </a>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Recent tender awards" eyebrow="Procurement">
          <div className="space-y-4">
            {tenderAwards.slice(0, 4).map((item) => (
              <article key={item.bidNumber} className="rounded-3xl bg-slate-50 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{item.bidNumber}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-700">Awarded to: {item.awardedTo}</p>
                <p className="text-sm text-slate-700">Value: {item.contractValue}</p>
                <p className="text-sm text-slate-700">Period: {item.period}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {procurementLinks.map((item) => (
              <a key={item.title} href={item.href} className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-sky-300 hover:text-municipalBlue">
                {item.title}
              </a>
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
