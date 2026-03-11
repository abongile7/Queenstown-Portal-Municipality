export default function CandidateDashboardPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-municipalBlue">Citizen Dashboard</h2>
      <div className="grid md:grid-cols-3 gap-3">
        <div className="card"><p className="text-sm">Open Service Requests</p><p className="text-2xl font-bold">3</p></div>
        <div className="card"><p className="text-sm">Job Applications</p><p className="text-2xl font-bold">2</p></div>
        <div className="card"><p className="text-sm">Unread Notices</p><p className="text-2xl font-bold">5</p></div>
      </div>
    </div>
  );
}
