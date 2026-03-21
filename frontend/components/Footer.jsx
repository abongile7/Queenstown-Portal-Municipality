import Link from 'next/link';
import { documentLinks, localMunicipalities, municipalityMeta, quickLinks } from '../lib/municipalityData';

export default function Footer() {
  return (
    <footer className="mt-16 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 xl:grid-cols-4">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-municipalGold">About</p>
          <h2 className="text-2xl font-semibold text-white">{municipalityMeta.name}</h2>
          <p className="text-sm leading-7 text-slate-300">
            A municipality-focused portal modernised from the official Chris Hani District Municipality website to improve navigation,
            readability, and public access to leadership, services, news, and procurement information.
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-municipalGold">Quick access</p>
          <div className="mt-4 grid gap-3 text-sm">
            {quickLinks.map((link) => (
              <a key={link.title} href={link.href} className="hover:text-white">
                {link.title}
              </a>
            ))}
            {documentLinks.slice(0, 2).map((link) => (
              <a key={link.title} href={link.href} className="hover:text-white">
                {link.title}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-municipalGold">Local municipalities</p>
          <div className="mt-4 grid gap-3 text-sm">
            {localMunicipalities.map((item) => (
              <a key={item.name} href={item.href} className="hover:text-white">
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-municipalGold">Contact</p>
          <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
            <p>{municipalityMeta.postal}</p>
            <p>{municipalityMeta.address.join(', ')}</p>
            <p>Tel: {municipalityMeta.telephone}</p>
            <p>Email: {municipalityMeta.communicationsEmail}</p>
            <Link href="/contact" className="inline-flex rounded-full bg-municipalGold px-4 py-2 font-semibold text-slate-950">
              Contact the municipality
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
