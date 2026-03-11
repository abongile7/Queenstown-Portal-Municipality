'use client';

import { useState } from 'react';

const canned = {
  water: 'To report a water leak, open Report Issue and provide location + photo.',
  jobs: 'Municipal vacancies are available on the Careers page.',
  refuse: 'Refuse collection schedules are available under Municipal Services.'
};

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'bot', text: 'Hello! Ask me about services, jobs, or reporting issues.' }]);

  const ask = (q) => {
    const key = q.toLowerCase().includes('water') ? 'water' : q.toLowerCase().includes('job') ? 'jobs' : 'refuse';
    setMessages((m) => [...m, { role: 'user', text: q }, { role: 'bot', text: canned[key] }]);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open && (
        <div className="w-80 bg-white rounded-xl shadow-2xl border p-3 mb-2">
          <p className="font-semibold text-municipalBlue mb-2">Municipal Assistant</p>
          <div className="h-44 overflow-y-auto text-sm space-y-2 mb-2">
            {messages.map((m, idx) => <p key={idx} className={m.role === 'bot' ? 'text-slate-700' : 'text-right text-municipalBlue'}>{m.text}</p>)}
          </div>
          <div className="flex gap-2 text-xs">
            <button onClick={() => ask('How do I report a water leak?')} className="px-2 py-1 rounded bg-slate-100">Water leak</button>
            <button onClick={() => ask('Where do I apply for municipal jobs?')} className="px-2 py-1 rounded bg-slate-100">Jobs</button>
            <button onClick={() => ask('When is refuse collection?')} className="px-2 py-1 rounded bg-slate-100">Refuse</button>
          </div>
        </div>
      )}
      <button onClick={() => setOpen((v) => !v)} className="rounded-full bg-municipalBlue text-white px-4 py-2 shadow-lg">AI Assistant</button>
    </div>
  );
}
