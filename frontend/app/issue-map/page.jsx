'use client';

import dynamic from 'next/dynamic';
import { useMemo, useState } from 'react';
import { issues } from '../../data/municipalData';

const MapPanel = dynamic(() => import('../../components/MapPanel'), { ssr: false });

export default function IssueMapPage() {
  const [type, setType] = useState('All');
  const [status, setStatus] = useState('All');
  const filtered = useMemo(() => issues.filter((i) => (type === 'All' || i.type === type) && (status === 'All' || i.status === status)), [type, status]);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-municipalBlue">Smart Municipality Issue Map</h2>
      <div className="card flex flex-wrap gap-2 text-sm">
        <select className="border rounded p-2" onChange={(e) => setType(e.target.value)}><option>All</option><option>Potholes</option><option>Water Leaks</option><option>Electricity Outages</option><option>Illegal Dumping</option></select>
        <select className="border rounded p-2" onChange={(e) => setStatus(e.target.value)}><option>All</option><option>Open</option><option>Under Investigation</option><option>Critical</option><option>Resolved</option></select>
      </div>
      <MapPanel markers={filtered} />
      <a className="inline-block px-4 py-2 rounded bg-municipalBlue text-white" href="/report-issue">Report Issue</a>
    </div>
  );
}
