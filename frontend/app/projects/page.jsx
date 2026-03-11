import Image from 'next/image';

const projects = [
  ['Municipal building upgrades', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab'],
  ['Council meetings and governance', 'https://images.unsplash.com/photo-1517048676732-d65bc937f952'],
  ['Water infrastructure', 'https://images.unsplash.com/photo-1509395176047-4a66953fd231'],
  ['Road infrastructure', 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000'],
  ['Community outreach', 'https://images.unsplash.com/photo-1469571486292-b53601020f90']
];

export default function ProjectsPage() {
  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-bold text-municipalBlue">Community Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map(([title, image]) => (
          <article key={title} className="card">
            <div className="relative h-40 rounded overflow-hidden mb-2">
              <Image src={image} alt={title} fill className="object-cover" />
            </div>
            <h3 className="font-semibold text-municipalBlue">{title}</h3>
          </article>
        ))}
      </div>
    </div>
  );
}
