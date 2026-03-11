import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Chris Hani District Municipality Portal',
  description: 'Serving Communities Through Sustainable Development'
};

const navItems = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/services', 'Services'],
  ['/departments', 'Departments'],
  ['/youth-opportunities', 'Youth Opportunities'],
  ['/epwp', 'EPWP'],
  ['/careers', 'Careers'],
  ['/gallery', 'Gallery'],
  ['/contact', 'Contact']
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-municipalBlue text-white border-b-4 border-municipalGold">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-wrap justify-between items-center gap-3">
              <div>
                <h1 className="font-bold text-xl">Chris Hani District Municipality</h1>
                <p className="text-xs text-slate-200">Eastern Cape, South Africa · Serving Communities Through Sustainable Development</p>
              </div>
              <nav className="flex flex-wrap gap-3 text-sm font-medium">
                {navItems.map(([href, label]) => (
                  <Link key={href} href={href} className="hover:text-municipalGold transition-colors">
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
