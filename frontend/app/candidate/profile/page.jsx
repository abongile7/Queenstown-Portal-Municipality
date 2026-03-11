export default function ResidentProfilePage() {
  return (
    <form className="card space-y-3">
      <h2 className="text-xl font-bold text-municipalBlue">Resident Profile</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input className="border rounded p-2" placeholder="Full Name" />
        <input className="border rounded p-2" placeholder="South African ID Number" />
        <input className="border rounded p-2" type="date" placeholder="Date of Birth" />
        <select className="border rounded p-2"><option>Ward 1</option><option>Ward 2</option><option>Ward 3</option><option>Ward 4</option><option>Ward 5</option><option>Ward 6</option><option>Ward 7</option></select>
        <input className="border rounded p-2" defaultValue="Chris Hani District Municipality" />
        <input className="border rounded p-2" defaultValue="Eastern Cape" />
      </div>
      <textarea className="w-full border rounded p-2" placeholder="Education" rows="3" />
      <textarea className="w-full border rounded p-2" placeholder="Skills" rows="3" />
      <input className="w-full border rounded p-2" placeholder="Employment Status" />
      <label className="text-sm block">Upload CV <input type="file" className="mt-1" /></label>
      <label className="text-sm block">Upload Certificates <input type="file" className="mt-1" multiple /></label>
      <label className="text-sm block">Upload ID Copy <input type="file" className="mt-1" /></label>
      <button className="bg-municipalBlue text-white py-2 px-4 rounded">Save Profile</button>
    </form>
  );
}
