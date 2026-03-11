export default function CandidateRegisterPage() {
  return (
    <form className="card max-w-2xl mx-auto grid md:grid-cols-2 gap-3">
      <h2 className="text-xl font-bold text-municipalBlue md:col-span-2">Citizen Account Registration</h2>
      <input className="border rounded p-2" placeholder="Full Name" />
      <input className="border rounded p-2" placeholder="Email" />
      <input className="border rounded p-2" placeholder="Phone Number" />
      <input className="border rounded p-2" placeholder="Suburb" />
      <input className="border rounded p-2 md:col-span-2" type="password" placeholder="Password" />
      <button className="md:col-span-2 bg-municipalBlue text-white py-2 rounded">Create Account</button>
    </form>
  );
}
