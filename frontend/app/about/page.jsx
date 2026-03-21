import SectionCard from '../../components/SectionCard';
import { departments, documentLinks, localMunicipalities, municipalityMeta } from '../../lib/municipalityData';

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <SectionCard title="About Chris Hani District Municipality" eyebrow="Overview" className="scroll-mt-28" id="overview">
        <p>
          Chris Hani District Municipality is a category C municipality in the Eastern Cape, with Komani as an administrative hub and six
          local municipalities within the district. This redesigned page keeps the structure of the official site while presenting it in a more
          accessible format for residents, businesses, and stakeholders.
        </p>
        <p>
          The municipality’s public positioning remains anchored around accountable governance, district-wide support for water and sanitation,
          planning and development, environmental health, disaster management, and support for local municipalities.
        </p>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl bg-slate-50 p-5"><p className="font-semibold">Region</p><p>{municipalityMeta.region}</p></div>
          <div className="rounded-3xl bg-slate-50 p-5"><p className="font-semibold">Administrative centre</p><p>Komani</p></div>
          <div className="rounded-3xl bg-slate-50 p-5"><p className="font-semibold">District vision</p><p>{municipalityMeta.vision}</p></div>
          <div className="rounded-3xl bg-slate-50 p-5"><p className="font-semibold">Official source</p><a href={municipalityMeta.website} className="text-municipalBlue">chrishanidm.gov.za</a></div>
        </div>
      </SectionCard>

      <SectionCard title="Departments and administration" eyebrow="Departments" className="scroll-mt-28" id="departments">
        <div className="section-grid">
          {departments.map((item) => (
            <article key={item.name} className="rounded-3xl bg-slate-50 p-5">
              <h3 className="text-lg font-semibold text-slate-950">{item.name}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </SectionCard>

      <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
        <SectionCard title="Municipal documents" eyebrow="Public resources">
          <div className="grid gap-3">
            {documentLinks.map((item) => (
              <a key={item.title} href={item.href} className="rounded-2xl border border-slate-200 px-4 py-4 font-medium transition hover:border-sky-200 hover:bg-sky-50">
                {item.title}
              </a>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Local municipalities in the district" eyebrow="Coverage" className="scroll-mt-28" id="municipalities">
          <div className="grid gap-3 sm:grid-cols-2">
            {localMunicipalities.map((item) => (
              <a key={item.name} href={item.href} className="rounded-3xl bg-slate-50 p-5 transition hover:bg-sky-50">
                <h3 className="text-lg font-semibold text-slate-950">{item.name}</h3>
                <p className="mt-2 text-sm text-slate-600">Visit local municipality website</p>
              </a>
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
