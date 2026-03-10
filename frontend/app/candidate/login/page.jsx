export default function CandidateLoginPage() {
  return (
    <form className="card max-w-lg mx-auto space-y-3">
      <h2 className="text-xl font-bold text-municipalBlue">Candidate Login</h2>
      <input className="w-full border rounded p-2" placeholder="Email" />
      <input className="w-full border rounded p-2" type="password" placeholder="Password" />
      <button className="w-full bg-municipalBlue text-white py-2 rounded">Login</button>
    </form>
  );
}
