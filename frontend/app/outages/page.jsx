import dynamic from 'next/dynamic';
import { issues } from '../../data/municipalData';

const MapPanel = dynamic(() => import('../../components/MapPanel'), { ssr: false });

export default function OutagesPage() {
  return <div className="space-y-3"><h2 className="text-2xl font-bold text-municipalBlue">Service Outage Map</h2><MapPanel markers={issues} /></div>;
}
