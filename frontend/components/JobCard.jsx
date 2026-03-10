import Link from 'next/link';

export default function JobCard({ job }) {
  return (
    <article className="card border-l-4 border-municipalGold">
      <h3 className="text-lg font-semibold text-municipalBlue">{job.title}</h3>
      <p className="text-sm">{job.department} · {job.location}</p>
      <p className="text-sm">{job.job_type} · R{job.salary_min} - R{job.salary_max}</p>
      <p className="text-sm">Closing: {new Date(job.closing_date).toLocaleDateString()}</p>
      <Link href={`/careers/${job.id}`} className="inline-block mt-3 px-4 py-2 rounded bg-municipalBlue text-white text-sm">
        View & Apply
      </Link>
    </article>
  );
}
