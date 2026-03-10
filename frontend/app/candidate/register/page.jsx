export default function CandidateRegisterPage() {
  return (
    <form className="card max-w-lg mx-auto space-y-3">
      <h2 className="text-xl font-bold text-municipalBlue">Candidate Registration</h2>
      <input className="w-full border rounded p-2" placeholder="Full Name" />
      <input className="w-full border rounded p-2" placeholder="Email" />
      <input className="w-full border rounded p-2" placeholder="Phone" />
      <input className="w-full border rounded p-2" type="password" placeholder="Password" />
      <button className="w-full bg-municipalBlue text-white py-2 rounded">Create Account</button>
    </form>
  );
}
