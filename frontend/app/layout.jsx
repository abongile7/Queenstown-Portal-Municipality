import './globals.css';
import SiteHeader from '../components/SiteHeader';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Chris Hani District Municipality | Modern Municipal Portal',
  description: 'Responsive municipal portal for Chris Hani District Municipality with leadership, service, news, and procurement information.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main className="mx-auto min-h-screen max-w-7xl px-4 py-8 sm:py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
