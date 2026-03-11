'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

const MapPanel = dynamic(() => import('../../components/MapPanel'), { ssr: false });

export default function ReportIssuePage() {
  const [form, setForm] = useState({ type: 'Potholes', location: '', description: '' });
  const [msg, setMsg] = useState('');

  async function submit(e) {
    e.preventDefault();
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/issues`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form)
      });
      setMsg('Issue submitted successfully.');
    } catch {
      const existing = JSON.parse(localStorage.getItem('localIssues') || '[]');
      localStorage.setItem('localIssues', JSON.stringify([...existing, { ...form, date: new Date().toISOString() }]));
      setMsg('Issue saved locally (backend endpoint unavailable).');
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-municipalBlue">Report Issue</h2>
      <MapPanel markers={[{ title: 'Select location manually in form', lat: -31.8976, lng: 26.8753, description: 'Komani centre' }]} height={320} />
      <form onSubmit={submit} className="card space-y-2">
        <select className="w-full border rounded p-2" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
          <option>Potholes</option><option>Water Leaks</option><option>Electricity Outages</option><option>Illegal Dumping</option><option>Streetlight Faults</option>
        </select>
        <input className="w-full border rounded p-2" placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
        <textarea className="w-full border rounded p-2" rows="4" placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <label className="text-sm">Upload Photo <input type="file" className="mt-1" /></label>
        <button className="px-4 py-2 bg-municipalBlue text-white rounded">Submit Issue</button>
        {msg && <p className="text-sm text-green-700">{msg}</p>}
      </form>
    </div>
  );
}
