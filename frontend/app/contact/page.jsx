export default function ContactPage() {
  return (
    <div className="space-y-4">
      <div className="card">
        <h2 className="text-2xl font-bold text-municipalBlue">Contact Us</h2>
        <p>Chris Hani District Municipality</p>
        <p>15 Bells Road</p>
        <p>Queenstown (Komani)</p>
        <p>Eastern Cape, South Africa</p>
        <p className="mt-2">Phone: 045 808 4600</p>
        <p>Email: communications@chrishanidm.gov.za</p>
      </div>
      <div className="card p-0 overflow-hidden">
        <iframe
          title="Chris Hani District Municipality Map"
          src="https://maps.google.com/maps?q=Queenstown%20South%20Africa&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-80 border-0"
          loading="lazy"
        />
      </div>
    </div>
  );
}
