const departments = [
  ['🏢', 'Corporate Services', 'Administration, HR, governance support, and records management.'],
  ['🤝', 'Community Services', 'Social development, public participation, and community wellbeing programmes.'],
  ['💰', 'Finance Department', 'Budget planning, financial reporting, SCM, and revenue management.'],
  ['🛠️', 'Engineering Services', 'Water, sanitation, roads, and infrastructure project delivery.'],
  ['📈', 'Integrated Planning and Economic Development (IPED)', 'IDP alignment, investment promotion, LED, and strategic planning.']
];

export default function DepartmentsPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-municipalBlue">Municipal Departments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {departments.map(([icon, title, text]) => (
          <article className="card" key={title}>
            <p className="text-3xl">{icon}</p>
            <h3 className="font-semibold text-municipalBlue mt-2">{title}</h3>
            <p className="text-sm mt-1">{text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
