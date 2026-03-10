import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Chris Hani District Municipality',
  description: 'Municipal digital portal and recruitment platform'
};

const navItems = [
  ['/', 'Home'],
  ['/about', 'About Municipality'],
  ['/leadership', 'Mayor & Leadership'],
  ['/services', 'Municipal Services'],
  ['/community', 'Community News'],
  ['/projects', 'Projects & Development'],
  ['/careers', 'Careers'],
  ['/contact', 'Contact']
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-municipalBlue text-white">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap gap-4 items-center justify-between">
            <h1 className="font-bold text-lg">Chris Hani District Municipality</h1>
            <nav className="flex flex-wrap gap-3 text-sm">
              {navItems.map(([href, label]) => (
                <Link key={href} href={href} className="hover:text-municipalGold transition-colors">
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
