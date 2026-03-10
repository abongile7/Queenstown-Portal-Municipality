import JobCard from '../../components/JobCard';
import { fetchJobs } from '../../lib/api';

export default async function CareersPage({ searchParams }) {
  const query = new URLSearchParams(searchParams).toString();
  const jobs = await fetchJobs(query);

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-bold text-municipalBlue">Careers Portal</h2>
      <form className="card grid grid-cols-1 md:grid-cols-4 gap-3">
        <input name="q" placeholder="Search jobs" className="border rounded p-2" />
        <input name="department" placeholder="Department" className="border rounded p-2" />
        <input name="location" placeholder="Location" className="border rounded p-2" />
        <select name="jobType" className="border rounded p-2">
          <option value="">Any Type</option>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Internship</option>
        </select>
        <button className="md:col-span-4 bg-municipalBlue text-white rounded py-2">Search Vacancies</button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => <JobCard key={job.id} job={job} />)}
      </div>
    </div>
  );
}
