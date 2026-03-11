import Image from 'next/image';
import Link from 'next/link';
import HeroCarousel from '../components/HeroCarousel';
import StatsCounter from '../components/StatsCounter';

const services = [
  ['Water and Sanitation', 'https://images.unsplash.com/photo-1509395176047-4a66953fd231', 'Reliable water supply and sanitation maintenance.'],
  ['Electricity', 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e', 'Power distribution, outages, and maintenance support.'],
  ['Refuse Removal', 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b', 'Scheduled waste collection and cleanliness campaigns.'],
  ['Road Maintenance', 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000', 'Road repairs, rehabilitation, and street upkeep.'],
  ['Housing Services', 'https://images.unsplash.com/photo-1460317442991-0ec209397118', 'Housing allocation and settlement support services.'],
  ['Community Safety', 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef', 'Safety operations and municipal protection support.'],
  ['Public Transport', 'https://images.unsplash.com/photo-1474487548417-781cb71495f3', 'Transport coordination and route support.'],
  ['Health Services', 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d', 'Public health programmes and clinic partnerships.']
];

const news = [
  'Mayor introduces water infrastructure contractors',
  'Municipality receives new firefighting equipment',
  'Community engagement meetings in Komani and Ezibeleni',
  'Housing development updates for priority wards',
  'Youth development programmes open for applications'
];

const projects = [
  ['Water pipeline upgrades', 'Komani CBD', 'In Progress', 'Q4 2026'],
  ['Road rehabilitation', 'Mlungisi', 'Active', 'Q3 2026'],
  ['Housing developments', 'Ezibeleni', 'Planning', 'Q1 2027'],
  ['Community centres', 'Tarkastad', 'In Progress', 'Q2 2027']
];

export default function HomePage() {
  return (
    <div className="space-y-10">
      <HeroCarousel />

      <section className="card grid md:grid-cols-3 gap-4 items-center">
        <Image src="https://images.unsplash.com/photo-1517048676732-d65bc937f952" alt="Mayor" width={420} height={280} className="rounded-lg object-cover w-full h-52" />
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold text-municipalBlue">Mayor's Message</h3>
          <p className="mt-2 text-sm">Executive Mayor Cllr. Madoda Papiyana welcomes all residents and stakeholders to a modern, responsive digital municipality focused on quality service delivery.</p>
          <Link className="inline-block mt-3 text-municipalBlue font-semibold" href="/mayor-council">View Mayor & Council →</Link>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-municipalBlue mb-3">Municipal Statistics</h3>
        <StatsCounter />
      </section>

      <section>
        <h3 className="text-2xl font-bold text-municipalBlue mb-3">Municipal Services</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map(([name, img, desc]) => (
            <article className="card" key={name}>
              <Image src={img} alt={name} width={300} height={180} className="rounded-lg h-32 object-cover w-full" />
              <h4 className="font-semibold mt-2">{name}</h4>
              <p className="text-sm">{desc}</p>
              <Link href="/services" className="text-municipalBlue text-sm font-semibold mt-2 inline-block">Learn more</Link>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-municipalBlue mb-3">Community News</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {news.map((title, idx) => (
            <article className="card" key={title}>
              <Image src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0" alt={title} width={400} height={220} className="rounded-lg h-36 w-full object-cover" />
              <h4 className="font-semibold mt-2">{title}</h4>
              <p className="text-sm">Municipal update #{idx + 1} from Enoch Mgijima communication office.</p>
              <Link href="/news" className="text-municipalBlue text-sm font-semibold mt-2 inline-block">Read more</Link>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-municipalBlue mb-3">Infrastructure Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map(([name, location, status, timeline]) => (
            <article key={name} className="card">
              <h4 className="font-semibold">{name}</h4>
              <p className="text-sm">Location: {location}</p>
              <p className="text-sm">Status: {status}</p>
              <p className="text-sm">Timeline: {timeline}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h3 className="text-2xl font-bold text-municipalBlue">Careers & Opportunities</h3>
        <p className="text-sm mt-2">Explore Municipal Jobs, EPWP Opportunities, Internships, and Learnerships.</p>
        <Link href="/careers" className="inline-block mt-2 font-semibold text-municipalBlue">Open Careers Portal →</Link>
      </section>
    </div>
  );
}
