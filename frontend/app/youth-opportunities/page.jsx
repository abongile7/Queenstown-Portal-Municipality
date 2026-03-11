const programs = [
  ['GIS Internship Programme', 'IPED', '12 months', 'R6,500', '2026-04-15'],
  ['Water Learnership', 'Engineering Services', '18 months', 'R4,200', '2026-04-08'],
  ['Graduate Finance Programme', 'Finance Department', '24 months', 'R8,500', '2026-04-20'],
  ['Digital Skills Training', 'Corporate Services', '6 months', 'R3,200', '2026-04-05']
];

export default function YouthOpportunitiesPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-municipalBlue">Youth Opportunities</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {programs.map(([name, department, duration, stipend, closing]) => (
          <article key={name} className="card">
            <h3 className="font-semibold text-municipalBlue">{name}</h3>
            <p className="text-sm">Department: {department}</p>
            <p className="text-sm">Duration: {duration}</p>
            <p className="text-sm">Stipend: {stipend}</p>
            <p className="text-sm">Closing date: {closing}</p>
            <button className="mt-3 px-4 py-2 rounded bg-municipalBlue text-white text-sm">Apply</button>
          </article>
        ))}
      </div>
    </div>
  );
}
