const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function fetchJobs(params = '') {
  const res = await fetch(`${API_URL}/jobs${params ? `?${params}` : ''}`, { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json();
}
