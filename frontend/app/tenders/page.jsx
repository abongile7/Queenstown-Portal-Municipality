export default function TendersPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-municipalBlue">Tenders & Supplier Portal</h2>
      <div className="card space-y-2">
        <p className="font-semibold">Supplier Registration</p>
        <input className="w-full border rounded p-2" placeholder="Company Name" />
        <input className="w-full border rounded p-2" placeholder="Tax Number" />
        <input className="w-full border rounded p-2" placeholder="Contact Details" />
        <label className="text-sm">Upload BEE Certificate <input type="file" className="mt-1" /></label>
      </div>
      <div className="card"><p className="font-semibold">Open Tenders</p><p className="text-sm">View, download tender documents, and submit bids online.</p></div>
    </div>
  );
}
