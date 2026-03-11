import Link from 'next/link';
import { navItems } from '../data/municipalData';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-municipalBlue text-white border-b-4 border-municipalGold shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="font-bold text-lg">Enoch Mgijima Local Municipality</h1>
            <p className="text-xs text-slate-200">Komani (Queenstown), Eastern Cape, South Africa</p>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link href={item.href} className="hover:text-municipalGold transition-colors font-medium">
                  {item.label}
                </Link>
                {item.children && (
                  <div className="hidden group-hover:block absolute left-0 top-full mt-2 w-56 bg-white text-slate-800 rounded shadow-lg p-2">
                    {item.children.map((sub) => (
                      <Link key={sub.href} href={sub.href} className="block px-2 py-1 rounded hover:bg-slate-100">
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
