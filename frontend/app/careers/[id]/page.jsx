import Link from 'next/link';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export default async function JobDetail({ params }) {
  const res = await fetch(`${API_URL}/jobs/${params.id}`, { cache: 'no-store' });
  const job = res.ok ? await res.json() : null;

  if (!job) return <p>Job not found.</p>;

  return (
    <article className="card space-y-2">
      <h2 className="text-2xl font-bold text-municipalBlue">{job.title}</h2>
      <p>{job.department} · {job.location} · {job.job_type}</p>
      <p>Salary: R{job.salary_min} - R{job.salary_max}</p>
      <p>Closing Date: {new Date(job.closing_date).toLocaleDateString()}</p>
      <p>{job.description}</p>
      <p><strong>Required Qualifications:</strong> {job.qualifications}</p>
      <Link href="/candidate/register" className="inline-block px-4 py-2 rounded bg-municipalBlue text-white">Apply Now</Link>
    </article>
  );
}
