export default function CandidateProfilePage() {
  return (
    <form className="card space-y-3">
      <h2 className="text-xl font-bold text-municipalBlue">Candidate Profile (CV Autofill Ready)</h2>
      <input className="w-full border rounded p-2" placeholder="Name" />
      <input className="w-full border rounded p-2" placeholder="Email" />
      <input className="w-full border rounded p-2" placeholder="Phone" />
      <input className="w-full border rounded p-2" placeholder="Address" />
      <textarea className="w-full border rounded p-2" placeholder="Education" rows="3" />
      <textarea className="w-full border rounded p-2" placeholder="Skills" rows="3" />
      <textarea className="w-full border rounded p-2" placeholder="Work Experience" rows="3" />
      <label className="block text-sm">Upload CV <input type="file" className="mt-1" /></label>
      <button className="bg-municipalBlue text-white py-2 px-4 rounded">Save Profile</button>
    </form>
  );
}
