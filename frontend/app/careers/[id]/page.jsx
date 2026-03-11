import ApplyPanel from '../../../components/ApplyPanel';
import { fetchJob } from '../../../lib/api';

export default async function JobDetail({ params }) {
  const job = await fetchJob(params.id);
  if (!job) return <p>Job not found.</p>;

  return (
    <article className="space-y-4">
      <section className="card space-y-2">
        <h2 className="text-2xl font-bold text-municipalBlue">{job.title}</h2>
        <p>{job.department} · {job.location}</p>
        <p><strong>Description:</strong> {job.description}</p>
        <p><strong>Requirements:</strong> {job.qualifications}</p>
        <p><strong>Closing date:</strong> {new Date(job.closing_date).toLocaleDateString()}</p>
      </section>
      <ApplyPanel job={job} />
    </article>
  );
}
