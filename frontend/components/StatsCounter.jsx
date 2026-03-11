'use client';

import { useEffect, useState } from 'react';

const targets = [
  { label: 'Population', value: 297000, suffix: '+' },
  { label: 'Households', value: 96791 },
  { label: 'Wards', value: 34 },
  { label: 'Area (km²)', value: 13584 }
];

export default function StatsCounter() {
  const [counts, setCounts] = useState(targets.map(() => 0));

  useEffect(() => {
    let frame = 0;
    const total = 40;
    const id = setInterval(() => {
      frame += 1;
      setCounts(targets.map((t) => Math.round((t.value * frame) / total)));
      if (frame >= total) clearInterval(id);
    }, 30);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {targets.map((stat, i) => (
        <article key={stat.label} className="card text-center">
          <p className="text-2xl font-bold text-municipalBlue">{counts[i].toLocaleString()}{stat.suffix || ''}</p>
          <p className="text-xs text-slate-600">{stat.label}</p>
        </article>
      ))}
    </div>
  );
}
