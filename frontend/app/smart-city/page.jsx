import dynamic from 'next/dynamic';
import { issues } from '../../data/municipalData';

const MapPanel = dynamic(() => import('../../components/MapPanel'), { ssr: false });

const kpis = [
  ['Open Service Requests', '248'],
  ['Resolved Issues', '1,902'],
  ['Active Infrastructure Projects', '16'],
  ['Water Outages', '9'],
  ['Electricity Outages', '6'],
  ['Waste Collection Performance', '93%']
];

export default function SmartCityPage() {
  return (
    <div className="space-y-4 bg-slate-900 text-slate-100 p-4 rounded-2xl">
      <h2 className="text-2xl font-bold">Smart City Digital Twin Dashboard</h2>
      <div className="grid md:grid-cols-3 gap-3">
        {kpis.map(([k, v]) => <div key={k} className="bg-slate-800 rounded p-3"><p className="text-xs">{k}</p><p className="text-xl font-bold">{v}</p></div>)}
      </div>
      <MapPanel markers={issues.map((i) => ({ ...i, description: `${i.type} - ${i.status}` }))} />
      <div className="grid md:grid-cols-2 gap-3">
        <div className="bg-slate-800 rounded p-3"><h3 className="font-semibold">Department Performance</h3><p className="text-sm">Water, Electricity, Waste, Roads, Housing task boards with response times.</p></div>
        <div className="bg-slate-800 rounded p-3"><h3 className="font-semibold">Citizen Feedback</h3><p className="text-sm">Recent reports from Komani, Ezibeleni, Mlungisi and Tarkastad.</p></div>
      </div>
    </div>
  );
}
