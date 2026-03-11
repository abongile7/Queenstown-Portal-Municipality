import dynamic from 'next/dynamic';

const MapPanel = dynamic(() => import('../../components/MapPanel'), { ssr: false });

const markers = [
  { title: 'Municipal Offices', type: 'Office', lat: -31.8976, lng: 26.8753 },
  { title: 'Community Centre - Ezibeleni', type: 'Community Facility', lat: -31.905, lng: 26.86 },
  { title: 'Water Infrastructure Node', type: 'Infrastructure', lat: -31.89, lng: 26.89 }
];

export default function MapPage() {
  return <div className="space-y-3"><h2 className="text-2xl font-bold text-municipalBlue">Municipal GIS Map</h2><MapPanel markers={markers} /></div>;
}
