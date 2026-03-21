import SectionCard from '../../components/SectionCard';
import { municipalityMeta, serviceAreas } from '../../lib/municipalityData';

const serviceDetails = [
  {
    id: 'water',
    title: 'Water and sanitation support',
    points: [
      'District support for bulk water schemes, treatment works, reticulation, and meter modernisation.',
      'Community engagements on interruptions, shortages, infrastructure projects, and billing-related water issues.',
      'Recent municipality updates also highlight smart water meter installation and water backlog interventions.',
    ],
  },
  {
    id: 'care',
    title: 'Customer care and complaints management',
    points: [
      `Residents can log complaints through the official customer complaints platform or the care-line ${municipalityMeta.careLine}.`,
      'The municipality regularly uses customer care offices and outreach visits to bring support to communities across the district.',
      'Billing concerns, indigent registration, and service access form part of these public-facing support channels.',
    ],
  },
  {
    id: 'fire',
    title: 'Fire safety, disaster management, and environmental health',
    points: [
      'Community fire safety information includes burn application access and district coordination support.',
      'The official municipality news feed frequently reports on weather incidents, disaster response, and environmental awareness campaigns.',
      'This page consolidates those items into a cleaner service view for residents.',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <SectionCard title="Municipal services" eyebrow="Resident access">
        <div className="section-grid">
          {serviceAreas.map((service) => (
            <article key={service.title} className="rounded-3xl bg-slate-50 p-5">
              <h3 className="text-lg font-semibold text-slate-950">{service.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </SectionCard>

      {serviceDetails.map((item) => (
        <SectionCard key={item.id} title={item.title} eyebrow="Service detail" className="scroll-mt-28" id={item.id}>
          <ul className="list-disc space-y-3 pl-5">
            {item.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </SectionCard>
      ))}

      <SectionCard title="Key resident contacts" eyebrow="Support channels">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl bg-slate-50 p-5"><p className="font-semibold">Complaints portal</p><a href={municipalityMeta.complaintsUrl} className="text-municipalBlue">Open portal</a></div>
          <div className="rounded-3xl bg-slate-50 p-5"><p className="font-semibold">Care-line</p><p>{municipalityMeta.careLine}</p></div>
          <div className="rounded-3xl bg-slate-50 p-5"><p className="font-semibold">Customer care email</p><p>{municipalityMeta.customerCareEmail}</p></div>
          <div className="rounded-3xl bg-slate-50 p-5"><p className="font-semibold">Fraud hotline</p><p>{municipalityMeta.fraudHotline}</p></div>
        </div>
      </SectionCard>
    </div>
  );
}
