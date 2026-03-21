import SectionCard from '../../components/SectionCard';
import { documentLinks, procurementLinks, tenderAwards } from '../../lib/municipalityData';

const focusAreas = [
  'Water backlog projects and reticulation improvements across the district.',
  'Audit support, annual financial statement review, and treasury strengthening.',
  'Asset management and procurement process visibility through tender award publication.',
  'Public access to annual reports, IDP documents, SDBIP information, and general governance records.',
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <SectionCard title="Tender awards and procurement visibility" eyebrow="Tenders" className="scroll-mt-28" id="tenders">
        <div className="overflow-hidden rounded-3xl border border-slate-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">Bid number</th>
                  <th className="px-4 py-3 font-semibold">Description</th>
                  <th className="px-4 py-3 font-semibold">Awarded to</th>
                  <th className="px-4 py-3 font-semibold">Value</th>
                  <th className="px-4 py-3 font-semibold">Period</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {tenderAwards.map((item) => (
                  <tr key={item.bidNumber}>
                    <td className="px-4 py-4 font-medium text-slate-900">{item.bidNumber}</td>
                    <td className="px-4 py-4 text-slate-700">
                      <p>{item.title}</p>
                      <a href={item.source} className="mt-2 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-municipalBlue">
                        Source PDF
                      </a>
                    </td>
                    <td className="px-4 py-4 text-slate-700">{item.awardedTo}</td>
                    <td className="px-4 py-4 text-slate-700">{item.contractValue}</td>
                    <td className="px-4 py-4 text-slate-700">{item.period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SectionCard>

      <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
        <SectionCard title="Procurement and document links" eyebrow="Documents" className="scroll-mt-28" id="documents">
          <div className="grid gap-3">
            {[...procurementLinks, ...documentLinks].map((item) => (
              <a key={item.title} href={item.href} className="rounded-2xl border border-slate-200 px-4 py-4 font-medium transition hover:border-sky-200 hover:bg-sky-50">
                {item.title}
              </a>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Strategic focus areas surfaced from recent content" eyebrow="Projects" className="scroll-mt-28" id="focus">
          <ul className="list-disc space-y-3 pl-5">
            {focusAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SectionCard>
      </div>
    </div>
  );
}
