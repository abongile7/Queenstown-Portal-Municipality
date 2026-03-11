import Image from 'next/image';

const images = [
  ['Municipal building', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab'],
  ['Council meeting', 'https://images.unsplash.com/photo-1517048676732-d65bc937f952'],
  ['Community development project', 'https://images.unsplash.com/photo-1521790797524-b2497295b8a0'],
  ['Water infrastructure', 'https://images.unsplash.com/photo-1509395176047-4a66953fd231'],
  ['Road infrastructure', 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000'],
  ['Youth development program', 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d'],
  ['Public services', 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407'],
  ['Community outreach program', 'https://images.unsplash.com/photo-1469571486292-b53601020f90']
];

export default function GalleryPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-municipalBlue">Municipal Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {images.map(([title, src]) => (
          <div key={title} className="card p-2">
            <div className="relative h-36 rounded overflow-hidden">
              <Image src={src} alt={title} fill className="object-cover" />
            </div>
            <p className="text-xs mt-2">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
