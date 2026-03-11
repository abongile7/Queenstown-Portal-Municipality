import Image from 'next/image';

const leaders = [
  ['Executive Mayor', 'Cllr. Madoda Papiyana', 'Leads strategic municipal governance and service delivery implementation.'],
  ['Council Speaker', 'Cllr. Noluthando Nqabisa', 'Oversees council sittings and legislative processes for effective local governance.'],
  ['Chief Whip', 'Cllr. Nombuyiselo Ndlebe', 'Supports council discipline, coordination, and oversight responsibilities.']
];

export default function MayorCouncilPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-municipalBlue">Municipal Leadership</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {leaders.map(([title, name, bio]) => (
          <article className="card" key={name}>
            <Image src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518" alt={name} width={300} height={220} className="rounded-lg object-cover h-40 w-full" />
            <p className="text-xs text-slate-500 mt-2">{title}</p>
            <h3 className="font-semibold text-municipalBlue">{name}</h3>
            <p className="text-sm">{bio}</p>
            <button className="mt-2 px-3 py-1 rounded bg-municipalBlue text-white text-sm">View Profile</button>
          </article>
        ))}
      </div>
    </div>
  );
}
