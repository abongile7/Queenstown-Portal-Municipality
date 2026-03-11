const projects = ['Road maintenance', 'Community cleaning', 'Water infrastructure projects', 'Public works construction'];

export default function EpwpPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-municipalBlue">EPWP Programme Management</h2>
      <div className="card space-y-2">
        <p>Expanded Public Works Programme management supports worker registration, project assignment, work day tracking, and stipend tracking.</p>
        <ul className="list-disc pl-5 text-sm">
          {projects.map((project) => <li key={project}>{project}</li>)}
        </ul>
      </div>
    </div>
  );
}
