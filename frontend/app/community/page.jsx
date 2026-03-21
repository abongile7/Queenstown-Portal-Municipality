import SectionCard from '../../components/SectionCard';
import { latestNews } from '../../lib/municipalityData';

const notices = [
  'Annual report roadshows and IDP consultations remain core participation channels for residents.',
  'Customer care outreach visits continue to assist communities with billing, indigent registration, and service reporting.',
  'District engagements regularly focus on water infrastructure, sanitation, and public accountability updates.',
];

export default function CommunityPage() {
  return (
    <div className="space-y-8">
      <SectionCard title="Latest municipality news" eyebrow="News feed" className="scroll-mt-28" id="news">
        <div className="grid gap-4 lg:grid-cols-2">
          {latestNews.map((item) => (
            <a key={item.title} href={item.href} className="rounded-3xl border border-slate-200 p-5 transition hover:border-sky-200 hover:bg-sky-50">
              <p className="text-xs uppercase tracking-[0.25em] text-municipalGold">{item.category}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
            </a>
          ))}
        </div>
      </SectionCard>

      <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
        <SectionCard title="Public notices" eyebrow="Notices" className="scroll-mt-28" id="notices">
          <ul className="list-disc space-y-3 pl-5">
            {notices.map((notice) => (
              <li key={notice}>{notice}</li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Public participation focus" eyebrow="Participation" className="scroll-mt-28" id="participation">
          <p>
            The municipality’s current communications focus on draft annual report roadshows, IDP consultations, and practical service
            engagements in wards and local municipalities. This redesign makes those themes easier to find by grouping them into one page for
            residents instead of long, image-heavy news listings.
          </p>
          <p>
            Community-facing topics currently appearing across the official site include water service delivery, smart meter installation,
            indigent registration, accountability sessions, health awareness programmes, and cross-department outreach.
          </p>
        </SectionCard>
      </div>
    </div>
  );
}
