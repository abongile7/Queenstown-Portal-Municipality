export default function ContactPage() {
  return (
    <div className="space-y-4">
      <div className="card">
        <h2 className="text-2xl font-bold text-municipalBlue">Contact</h2>
        <p>Enoch Mgijima Local Municipality</p>
        <p>15 Bells Road, Komani (Queenstown), Eastern Cape, South Africa</p>
        <p>Phone: 045 808 4600</p>
        <p>Email: communications@enochmgijima.gov.za</p>
        <p>Emergency: 10177</p>
      </div>
      <div className="card p-0 overflow-hidden">
        <iframe title="Map" src="https://maps.google.com/maps?q=Queenstown%20South%20Africa&t=&z=13&ie=UTF8&iwloc=&output=embed" className="w-full h-80 border-0" loading="lazy" />
      </div>
    </div>
  );
}
