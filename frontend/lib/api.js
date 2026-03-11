const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function fetchJobs(params = '') {
  const res = await fetch(`${API_URL}/jobs${params ? `?${params}` : ''}`, { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json();
}

export async function fetchJob(id) {
  const res = await fetch(`${API_URL}/jobs/${id}`, { cache: 'no-store' });
  if (!res.ok) return null;
  return res.json();
}

export async function login(payload) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('Login failed');
  return res.json();
}

export async function submitApplication(payload, token) {
  const res = await fetch(`${API_URL}/applications`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('Application failed');
  return res.json();
}
