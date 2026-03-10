const statuses = ['Submitted', 'Under Review', 'Shortlisted', 'Interview Scheduled', 'Rejected', 'Hired'];

export default function CandidateDashboardPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-municipalBlue">Application Tracking</h2>
      <div className="card">
        <p className="font-semibold">Water Technician Application</p>
        <p className="text-sm mt-1">Current Status: <span className="text-municipalBlue font-semibold">Under Review</span></p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          {statuses.map((status) => <span key={status} className="px-2 py-1 rounded bg-slate-100">{status}</span>)}
        </div>
      </div>
    </div>
  );
}
