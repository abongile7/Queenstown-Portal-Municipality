'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { heroSlides } from '../data/municipalData';

export default function HeroCarousel() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((v) => (v + 1) % heroSlides.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative rounded-2xl overflow-hidden min-h-[420px]">
      <Image src={heroSlides[idx]} alt="Municipality hero" fill className="object-cover" />
      <div className="absolute inset-0 bg-black/45 p-8 flex flex-col justify-end text-white">
        <h2 className="text-3xl md:text-4xl font-bold">Welcome to Enoch Mgijima Local Municipality</h2>
        <p className="mt-2 max-w-2xl">Serving the communities of Komani, Tarkastad and surrounding areas</p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link href="/services" className="px-4 py-2 rounded bg-municipalGold text-slate-900 font-semibold">Municipal Services</Link>
          <Link href="/careers" className="px-4 py-2 rounded border border-white">Careers</Link>
          <Link href="/report-issue" className="px-4 py-2 rounded border border-white">Report an Issue</Link>
        </div>
      </div>
    </section>
  );
}
