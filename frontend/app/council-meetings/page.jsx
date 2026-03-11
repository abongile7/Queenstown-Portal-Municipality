export default function CouncilMeetingsPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-municipalBlue">Council Meetings</h2>
      <div className="card p-0 overflow-hidden">
        <iframe className="w-full h-80" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Council Livestream" allowFullScreen />
      </div>
      <div className="card">
        <p className="font-semibold">Meeting Schedule</p>
        <p className="text-sm">Monthly council meetings: First Thursday of each month at 10:00.</p>
        <p className="text-sm mt-2">Agenda documents and recordings are published after each sitting.</p>
      </div>
    </div>
  );
}
