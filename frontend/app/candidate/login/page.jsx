'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { login } from '../../../lib/api';

export default function CandidateLoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await login(form);
      localStorage.setItem('token', res.token);
      if (res.candidateId) localStorage.setItem('candidateId', String(res.candidateId));
      const redirect = searchParams.get('redirect') || localStorage.getItem('postLoginRedirect') || '/candidate/dashboard';
      localStorage.removeItem('postLoginRedirect');
      router.push(redirect);
    } catch {
      setError('Invalid credentials');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card max-w-lg mx-auto space-y-3">
      <h2 className="text-xl font-bold text-municipalBlue">Resident Login</h2>
      <input className="w-full border rounded p-2" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input className="w-full border rounded p-2" type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <button className="w-full bg-municipalBlue text-white py-2 rounded">Login</button>
    </form>
  );
}
