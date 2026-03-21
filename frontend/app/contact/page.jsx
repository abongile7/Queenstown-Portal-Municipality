import SectionCard from '../../components/SectionCard';
import { localMunicipalities, municipalityMeta } from '../../lib/municipalityData';

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <SectionCard title="Contact Chris Hani District Municipality" eyebrow="Get in touch">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-3xl bg-slate-50 p-5"><h3 className="font-semibold">Postal</h3><p className="mt-2 text-sm text-slate-600">{municipalityMeta.postal}</p></article>
          <article className="rounded-3xl bg-slate-50 p-5"><h3 className="font-semibold">Physical address</h3><p className="mt-2 text-sm text-slate-600">{municipalityMeta.address.join(', ')}</p></article>
          <article className="rounded-3xl bg-slate-50 p-5"><h3 className="font-semibold">Telephone</h3><p className="mt-2 text-sm text-slate-600">{municipalityMeta.telephone}</p></article>
          <article className="rounded-3xl bg-slate-50 p-5"><h3 className="font-semibold">Email</h3><p className="mt-2 text-sm text-slate-600">{municipalityMeta.communicationsEmail}</p></article>
        </div>
      </SectionCard>

      <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
        <SectionCard title="Resident support channels" eyebrow="Support">
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-3xl bg-slate-50 p-5"><h3 className="font-semibold">Complaints portal</h3><a href={municipalityMeta.complaintsUrl} className="mt-2 inline-flex text-sm text-municipalBlue">Open portal</a></article>
            <article className="rounded-3xl bg-slate-50 p-5"><h3 className="font-semibold">Care-line</h3><p className="mt-2 text-sm text-slate-600">{municipalityMeta.careLine}</p></article>
            <article className="rounded-3xl bg-slate-50 p-5"><h3 className="font-semibold">Customer care email</h3><p className="mt-2 text-sm text-slate-600">{municipalityMeta.customerCareEmail}</p></article>
            <article className="rounded-3xl bg-slate-50 p-5"><h3 className="font-semibold">Fraud hotline</h3><p className="mt-2 text-sm text-slate-600">{municipalityMeta.fraudHotline}</p></article>
          </div>
        </SectionCard>

        <SectionCard title="District local municipalities" eyebrow="Partners">
          <div className="grid gap-3 sm:grid-cols-2">
            {localMunicipalities.map((item) => (
              <a key={item.name} href={item.href} className="rounded-3xl border border-slate-200 px-4 py-4 transition hover:border-sky-200 hover:bg-sky-50">
                {item.name}
              </a>
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
