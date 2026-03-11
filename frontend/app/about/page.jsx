import SectionCard from '../../components/SectionCard';

const municipalities = [
  'Enoch Mgijima Local Municipality',
  'Sakhisizwe Local Municipality',
  'Emalahleni Local Municipality',
  'Dr AB Xuma Local Municipality',
  'Intsika Yethu Local Municipality',
  'Inxuba Yethemba Local Municipality'
];

export default function AboutPage() {
  return (
    <SectionCard title="About Chris Hani District Municipality">
      <p>Chris Hani District Municipality is located in the Eastern Cape Province of South Africa with its administrative seat in Queenstown (Komani).</p>
      <p>The district consists of the following local municipalities:</p>
      <ul className="list-disc pl-5">
        {municipalities.map((m) => <li key={m}>{m}</li>)}
      </ul>
      <p>The municipality focuses on service delivery, infrastructure development, economic development, and community empowerment.</p>
    </SectionCard>
  );
}
