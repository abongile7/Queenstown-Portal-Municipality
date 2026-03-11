const kpis = [
  ['Open issues', '248', 'bg-red-50 text-red-700'],
  ['Resolved issues', '1,902', 'bg-green-50 text-green-700'],
  ['Average response time', '28 hrs', 'bg-yellow-50 text-yellow-700'],
  ['Active projects', '16', 'bg-blue-50 text-blue-700']
];

export default function ServiceDashboardPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-municipalBlue">Service Delivery Dashboard</h2>
      <div className="grid md:grid-cols-4 gap-3">
        {kpis.map(([title, value, cls]) => <div key={title} className={`card ${cls}`}><p className="text-xs">{title}</p><p className="text-2xl font-bold">{value}</p></div>)}
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        <div className="card"><h3 className="font-semibold">Monthly Service Requests</h3><div className="mt-2 h-32 flex items-end gap-2">{[35,45,40,58,62,70].map((v,i)=><div key={i} className="bg-municipalBlue w-8" style={{height:`${v}%`}} />)}</div></div>
        <div className="card"><h3 className="font-semibold">Issue Type Distribution</h3><div className="mt-2 h-32 flex items-end gap-2">{[60,45,30,55].map((v,i)=><div key={i} className="bg-municipalGold w-10" style={{height:`${v}%`}} />)}</div></div>
      </div>
    </div>
  );
}
