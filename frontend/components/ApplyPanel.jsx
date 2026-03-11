'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { submitApplication } from '../lib/api';

export default function ApplyPanel({ job }) {
  const router = useRouter();
  const [coverLetter, setCoverLetter] = useState('');
  const [cvUrl, setCvUrl] = useState('');
  const [error, setError] = useState('');

  async function handleApply(e) {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      localStorage.setItem('postLoginRedirect', `/careers/${job.id}`);
      router.push(`/candidate/login?redirect=/careers/${job.id}`);
      return;
    }

    try {
      const candidateId = localStorage.getItem('candidateId') || '';
      const res = await submitApplication({ candidateId, jobId: job.id, cvUrl, coverLetter }, token);
      router.push(`/applications/success?jobTitle=${encodeURIComponent(job.title)}&date=${encodeURIComponent(res.applicationDate)}&status=${encodeURIComponent(res.status)}`);
    } catch (err) {
      setError('Unable to submit application. Please verify profile and login.');
    }
  }

  return (
    <form onSubmit={handleApply} className="card space-y-2">
      <h3 className="font-semibold text-municipalBlue">Apply for this position</h3>
      <input className="w-full border rounded p-2" placeholder="CV URL (optional if profile has CV)" value={cvUrl} onChange={(e) => setCvUrl(e.target.value)} />
      <textarea className="w-full border rounded p-2" rows="4" placeholder="Cover letter" value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} />
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <button className="px-4 py-2 rounded bg-municipalBlue text-white">Apply</button>
    </form>
  );
}
