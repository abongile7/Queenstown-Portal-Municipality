'use client';

import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export default function MapPanel({ markers, height = 420 }) {
  return (
    <div className="rounded-xl overflow-hidden border">
      <MapContainer center={[-31.8976, 26.8753]} zoom={11} style={{ height }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />
        {markers.map((m) => (
          <Marker key={m.title} position={[m.lat, m.lng]}>
            <Popup>
              <p className="font-semibold">{m.title}</p>
              <p>{m.description || m.type}</p>
              {m.status && <p>Status: {m.status}</p>}
              {m.date && <p>Date: {m.date}</p>}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
