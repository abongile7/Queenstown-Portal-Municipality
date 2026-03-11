export default function ResidentRegisterPage() {
  return (
    <form className="card max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
      <h2 className="text-xl font-bold text-municipalBlue md:col-span-2">Resident Registration</h2>
      <input className="border rounded p-2" placeholder="Full Name" />
      <input className="border rounded p-2" placeholder="Email" />
      <input className="border rounded p-2" placeholder="South African ID Number" />
      <input className="border rounded p-2" placeholder="Date of Birth" type="date" />
      <input className="border rounded p-2" placeholder="Ward Number" />
      <input className="border rounded p-2" placeholder="Municipality" defaultValue="Chris Hani District Municipality" />
      <input className="border rounded p-2" placeholder="Province" defaultValue="Eastern Cape" />
      <input className="border rounded p-2" placeholder="Employment Status" />
      <input className="border rounded p-2 md:col-span-2" type="password" placeholder="Password" />
      <button className="md:col-span-2 w-full bg-municipalBlue text-white py-2 rounded">Create Account</button>
    </form>
  );
}
