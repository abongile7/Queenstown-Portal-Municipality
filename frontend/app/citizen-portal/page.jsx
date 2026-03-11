import Link from 'next/link';

export default function CitizenPortalPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-municipalBlue">Citizen Service Portal</h2>
      <div className="grid md:grid-cols-2 gap-3">
        <Link href="/candidate/register" className="card">Create account</Link>
        <Link href="/candidate/login" className="card">Login</Link>
        <Link href="/report-issue" className="card">Submit service requests</Link>
        <Link href="/candidate/dashboard" className="card">Track issues and job applications</Link>
        <Link href="/notices" className="card">View municipal notices</Link>
        <Link href="/billing" className="card">View bills and payments</Link>
      </div>
    </div>
  );
}
