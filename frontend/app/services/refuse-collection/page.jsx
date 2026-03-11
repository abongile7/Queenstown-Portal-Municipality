'use client';

import { useState } from 'react';

const schedules = {
  Komani: ['Monday', 'Thursday'],
  Mlungisi: ['Tuesday', 'Friday'],
  Ezibeleni: ['Wednesday', 'Saturday'],
  Tarkastad: ['Tuesday', 'Thursday']
};

export default function RefuseCollectionPage() {
  const [suburb, setSuburb] = useState('Komani');
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-municipalBlue">Refuse Collection Schedule</h2>
      <select className="border rounded p-2" value={suburb} onChange={(e) => setSuburb(e.target.value)}>
        {Object.keys(schedules).map((s) => <option key={s}>{s}</option>)}
      </select>
      <div className="card">
        <p className="font-semibold">{suburb} Collection Days</p>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {schedules[suburb].map((d) => <div key={d} className="p-3 rounded bg-slate-100 text-center">{d}</div>)}
        </div>
        <button className="mt-3 px-4 py-2 rounded bg-municipalBlue text-white">Download Printable Schedule</button>
      </div>
    </div>
  );
}
