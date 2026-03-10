import SectionCard from '../../components/SectionCard';

export default function Page() {
  const content = {
    about: ['Municipality overview and mandate for district-wide service delivery.', 'Vision: Inclusive growth through reliable services and accountable governance.', 'Mission: Deliver sustainable infrastructure and responsive citizen support.'],
    leadership: ['Executive Mayor and Council portfolios.', 'Administrative leadership with departmental directors.', 'Organisational structure aligned to municipal service plans.'],
    services: ['Water services', 'Electricity services', 'Waste management', 'Roads and infrastructure', 'Community programs'],
    community: ['Municipal news and public notices.', 'Community events calendar.', 'Development projects and procurement updates.'],
    projects: ['Capital projects tracking dashboard.', 'Local economic development programmes.', 'Infrastructure and social investment priorities.'],
    contact: ['Main Office: 15 Bells Road, Queenstown', 'Phone: 045 807 7600', 'Email: info@chrishani.gov.za']
  };
  const key = 'about';

  return (
    <SectionCard title={key.charAt(0).toUpperCase() + key.slice(1).replace('-', ' ')}>
      {content[key].map((item) => <p key={item}>{item}</p>)}
    </SectionCard>
  );
}
