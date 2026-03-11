export default function ApplicationSuccessPage({ searchParams }) {
  return (
    <div className="card max-w-2xl mx-auto space-y-2">
      <h2 className="text-2xl font-bold text-green-700">Application submitted successfully.</h2>
      <p><strong>Job title:</strong> {searchParams.jobTitle || 'N/A'}</p>
      <p><strong>Application date:</strong> {searchParams.date || new Date().toISOString().slice(0, 10)}</p>
      <p><strong>Status:</strong> {searchParams.status || 'Submitted'}</p>
    </div>
  );
}
