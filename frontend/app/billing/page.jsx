export default function BillingPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-municipalBlue">Online Bill Payments</h2>
      <div className="card space-y-2">
        <input className="w-full border rounded p-2" placeholder="Municipal account number" />
        <input className="w-full border rounded p-2" placeholder="ID / Passport" />
        <button className="px-4 py-2 rounded bg-municipalBlue text-white">View Bills</button>
      </div>
      <div className="card"><p className="font-semibold">Payment Options</p><p className="text-sm">Credit Card · EFT (mock integration)</p></div>
    </div>
  );
}
