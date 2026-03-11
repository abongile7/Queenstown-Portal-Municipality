const services = [
  'Water services',
  'Electricity services',
  'Waste management',
  'Roads and infrastructure',
  'Community programs'
];

export default function ServicesPage() {
  return (
    <div className="card">
      <h2 className="text-2xl font-bold text-municipalBlue mb-3">Municipal Services</h2>
      <ul className="list-disc pl-5 space-y-1">
        {services.map((service) => <li key={service}>{service}</li>)}
      </ul>
    </div>
  );
}
