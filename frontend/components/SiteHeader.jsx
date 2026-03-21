'use client';

import { useState } from 'react';
import Link from 'next/link';

const navSections = [
  { href: '/', label: 'Home' },
  {
    href: '/about',
    label: 'About',
    children: [
      { href: '/about#overview', label: 'Overview' },
      { href: '/about#departments', label: 'Departments' },
      { href: '/about#municipalities', label: 'Local municipalities' },
    ],
  },
  {
    href: '/leadership',
    label: 'Leadership',
    children: [
      { href: '/leadership#executive', label: 'Executive office' },
      { href: '/leadership#portfolio', label: 'Portfolio heads' },
      { href: '/leadership#council', label: 'Councillors' },
    ],
  },
  {
    href: '/services',
    label: 'Services',
    children: [
      { href: '/services#water', label: 'Water & sanitation' },
      { href: '/services#care', label: 'Customer care' },
      { href: '/services#fire', label: 'Fire & disaster' },
    ],
  },
  {
    href: '/community',
    label: 'Community',
    children: [
      { href: '/community#news', label: 'Latest news' },
      { href: '/community#notices', label: 'Public notices' },
      { href: '/community#participation', label: 'Participation' },
    ],
  },
  {
    href: '/projects',
    label: 'Tenders & Projects',
    children: [
      { href: '/projects#tenders', label: 'Tender awards' },
      { href: '/projects#documents', label: 'Documents' },
      { href: '/projects#focus', label: 'Strategic focus' },
    ],
  },
  { href: '/contact', label: 'Contact' },
  { href: '/careers', label: 'Careers' },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-municipalBlue/95 text-white backdrop-blur">
      <div className="border-b border-white/10 bg-slate-950/20">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 text-xs text-slate-100 sm:text-sm">
          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            <span>Chris Hani District Municipality</span>
            <span className="hidden sm:inline">Komani, Eastern Cape</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            <a href="tel:0458084600" className="hover:text-municipalGold">045 808 4600</a>
            <a href="mailto:communications@chrishanidm.gov.za" className="hover:text-municipalGold">communications@chrishanidm.gov.za</a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between gap-4 py-4">
          <Link href="/" className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.35em] text-municipalGold">Official portal</p>
            <h1 className="text-lg font-bold sm:text-2xl">Chris Hani District Municipality</h1>
            <p className="text-sm text-slate-200">Modernised resident information, governance, news, and procurement access.</p>
          </Link>

          <button
            type="button"
            className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-sm font-medium lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            Menu
          </button>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-2 xl:gap-4">
              {navSections.map((item) => (
                <li key={item.label} className="group relative">
                  <Link href={item.href} className="rounded-full px-3 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/10 hover:text-municipalGold">
                    {item.label}
                  </Link>
                  {item.children?.length ? (
                    <div className="invisible absolute left-0 top-full z-20 mt-2 w-64 rounded-2xl border border-slate-200 bg-white p-3 opacity-0 shadow-2xl transition duration-150 group-hover:visible group-hover:opacity-100">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-municipalBlue"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {open ? (
          <nav className="border-t border-white/10 py-4 lg:hidden">
            <ul className="grid gap-3">
              {navSections.map((item) => (
                <li key={item.label} className="rounded-2xl bg-white/5 p-3">
                  <Link href={item.href} className="text-base font-semibold" onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                  {item.children?.length ? (
                    <div className="mt-2 grid gap-2 pl-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="text-sm text-slate-200 hover:text-municipalGold"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
