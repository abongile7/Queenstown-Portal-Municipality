export default function CandidateProfilePage() {
  return (
    <form className="card space-y-3">
      <h2 className="text-xl font-bold text-municipalBlue">Citizen Profile</h2>
      <input className="w-full border rounded p-2" placeholder="Full Name" />
      <input className="w-full border rounded p-2" placeholder="Ward Number" />
      <textarea className="w-full border rounded p-2" placeholder="Skills and Qualifications" rows="3" />
      <label className="text-sm block">Upload CV <input type="file" className="mt-1" /></label>
      <label className="text-sm block">Upload ID copy <input type="file" className="mt-1" /></label>
      <button className="bg-municipalBlue text-white py-2 px-4 rounded">Save</button>
    </form>
  );
}
