const docs = ['Integrated Development Plan', 'Annual Reports', 'Council Minutes', 'Municipal Budget', 'Policies', 'Bylaws'];

export default function DocumentsPage() {
  return <div className="space-y-3"><h2 className="text-2xl font-bold text-municipalBlue">Document Repository</h2>{docs.map((d) => <article className="card" key={d}><p className="font-semibold">{d}</p><a href="#" className="text-sm text-municipalBlue">Download document</a></article>)}</div>;
}
