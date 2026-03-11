'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';

const councillors = Array.from({ length: 12 }).map((_, i) => ({
  name: `Cllr. Ward Representative ${i + 1}`,
  ward: i + 1,
  contact: `045 808 46${(i + 10).toString().slice(-2)}`,
  office: 'Komani Civic Centre'
}));

export default function WardCouncillorsPage() {
  const [filter, setFilter] = useState('All');
  const list = useMemo(() => councillors.filter((c) => filter === 'All' || String(c.ward) === filter), [filter]);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-municipalBlue">Ward Councillor Directory</h2>
      <select className="border rounded p-2" onChange={(e) => setFilter(e.target.value)}>
        <option>All</option>
        {Array.from({ length: 12 }).map((_, i) => <option key={i + 1}>{i + 1}</option>)}
      </select>
      <div className="grid md:grid-cols-3 gap-3">
        {list.map((c) => (
          <article key={c.name} className="card">
            <Image src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518" alt={c.name} width={300} height={220} className="rounded-lg h-36 object-cover w-full" />
            <h3 className="font-semibold mt-2">{c.name}</h3>
            <p className="text-sm">Ward {c.ward}</p>
            <p className="text-sm">Contact: {c.contact}</p>
            <p className="text-sm">Office: {c.office}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
