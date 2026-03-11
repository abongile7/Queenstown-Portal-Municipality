const projects = [
  ['Water infrastructure upgrades', 'Komani', 'R120m', '68%', '2026-11-30'],
  ['Road rehabilitation', 'Mlungisi', 'R85m', '54%', '2026-09-15'],
  ['Housing developments', 'Ezibeleni', 'R200m', '31%', '2027-06-30'],
  ['Community centres', 'Tarkastad', 'R42m', '72%', '2026-08-20']
];

export default function ProjectsPage() {
  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-bold text-municipalBlue">Municipal Project Tracker</h2>
      <div className="grid md:grid-cols-2 gap-3">
        {projects.map(([name, location, budget, progress, date]) => (
          <article key={name} className="card">
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm">Location: {location}</p>
            <p className="text-sm">Budget: {budget}</p>
            <p className="text-sm">Completion: {progress}</p>
            <p className="text-sm">Expected completion: {date}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
