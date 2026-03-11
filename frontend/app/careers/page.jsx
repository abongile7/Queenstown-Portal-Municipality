import Link from 'next/link';
import { fetchJobs } from '../../lib/api';

const categories = ['Municipal Jobs', 'EPWP Opportunities', 'Internships', 'Learnerships'];

export default async function CareersPage({ searchParams }) {
  const query = new URLSearchParams(searchParams).toString();
  const jobs = await fetchJobs(query);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-municipalBlue">Careers Portal</h2>
      <div className="flex flex-wrap gap-2">{categories.map((c) => <span key={c} className="px-3 py-1 rounded-full bg-slate-100 text-sm">{c}</span>)}</div>

      <div className="card">
        <h3 className="font-semibold text-municipalBlue">WhatsApp Job Alerts</h3>
        <p className="text-sm">Subscribe for Municipal Jobs and EPWP opportunity alerts.</p>
        <div className="mt-2 grid md:grid-cols-3 gap-2">
          <input className="border rounded p-2" placeholder="Name" />
          <input className="border rounded p-2" placeholder="Phone Number" />
          <button className="px-4 py-2 bg-municipalBlue text-white rounded">Subscribe</button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <article key={job.id} className="card border-l-4 border-municipalGold">
            <h3 className="font-semibold text-municipalBlue">{job.title}</h3>
            <p className="text-sm">{job.department} · {job.location}</p>
            <p className="text-sm">Closing: {new Date(job.closing_date).toLocaleDateString()}</p>
            <Link href={`/careers/${job.id}`} className="inline-block mt-2 text-municipalBlue font-semibold">Apply</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
