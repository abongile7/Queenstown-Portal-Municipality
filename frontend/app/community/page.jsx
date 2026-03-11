import Image from 'next/image';

const news = [
  ['https://images.unsplash.com/photo-1431540015161-0bf868a2d407', 'Water infrastructure projects', '2026-03-01', 'Upgrade works continue to improve water reliability in priority wards.'],
  ['https://images.unsplash.com/photo-1521790797524-b2497295b8a0', 'Community development', '2026-02-25', 'Local support hubs launched for youth and women entrepreneurs.'],
  ['https://images.unsplash.com/photo-1521737604893-d14cc237f11d', 'Youth empowerment', '2026-02-19', 'Applications opened for district internships and learnerships.'],
  ['https://images.unsplash.com/photo-1473448912268-2022ce9509d8', 'Service delivery updates', '2026-02-12', 'Road maintenance schedule published for all service points.']
];

export default function CommunityPage() {
  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-bold text-municipalBlue">Municipal News</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {news.map(([img, title, date, desc]) => (
          <article key={title} className="card">
            <div className="relative h-44 rounded overflow-hidden mb-3">
              <Image src={img} alt={title} fill className="object-cover" />
            </div>
            <p className="text-xs text-slate-500">{date}</p>
            <h3 className="font-semibold text-municipalBlue">{title}</h3>
            <p className="text-sm">{desc}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
