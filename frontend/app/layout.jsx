import './globals.css';
import NavBar from '../components/NavBar';
import ChatbotWidget from '../components/ChatbotWidget';

export const metadata = {
  title: 'Enoch Mgijima Local Municipality',
  description: 'Modern digital municipal platform for Komani (Queenstown), Eastern Cape'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>
        <footer className="bg-municipalBlue text-white mt-10">
          <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-4 gap-4 text-sm">
            <div><h4 className="font-semibold">Municipal Offices</h4><p>15 Bells Road, Komani</p></div>
            <div><h4 className="font-semibold">Emergency Numbers</h4><p>Fire/Ambulance: 10177</p></div>
            <div><h4 className="font-semibold">Service Contacts</h4><p>045 808 4600</p></div>
            <div><h4 className="font-semibold">Quick Links</h4><p>Careers · Tenders · Notices</p></div>
          </div>
        </footer>
        <ChatbotWidget />
      </body>
    </html>
  );
}
