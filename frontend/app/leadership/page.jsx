import SectionCard from '../../components/SectionCard';
import { councillors, leadership } from '../../lib/municipalityData';

export default function LeadershipPage() {
  return (
    <div className="space-y-8">
      <SectionCard title="Executive leadership" eyebrow="Office bearers" className="scroll-mt-28" id="executive">
        <div className="grid gap-4 md:grid-cols-2">
          {leadership.executive.map((person) => (
            <article key={person.name} className="rounded-3xl bg-slate-50 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-municipalGold">{person.role}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">{person.name}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{person.summary}</p>
              <a href={`mailto:${person.email}`} className="mt-4 inline-flex text-sm font-semibold text-municipalBlue hover:text-sky-700">
                {person.email}
              </a>
            </article>
          ))}
        </div>
      </SectionCard>

      <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
        <SectionCard title="Portfolio heads and committee leadership" eyebrow="Portfolio" className="scroll-mt-28" id="portfolio">
          <div className="grid gap-4">
            {leadership.portfolioHeads.map((person) => (
              <article key={person.name} className="rounded-3xl bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-950">{person.name}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{person.role}</p>
                <a href={`mailto:${person.email}`} className="mt-3 inline-flex text-sm font-semibold text-municipalBlue hover:text-sky-700">
                  {person.email}
                </a>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Newly highlighted council members" eyebrow="Council updates">
          <div className="grid gap-4 sm:grid-cols-2">
            {leadership.newCouncilMembers.map((member) => (
              <article key={member.name} className="rounded-3xl bg-emerald-50 p-5 text-emerald-950">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="mt-2 text-sm leading-7">{member.status}</p>
                <a href={member.href} className="mt-3 inline-flex text-sm font-semibold text-emerald-900">
                  View official updates
                </a>
              </article>
            ))}
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Councillors" eyebrow="Full council list" className="scroll-mt-28" id="council">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {councillors.map((name) => (
            <article key={name} className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-700">
              {name}
            </article>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
