import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function HostelMap({ hostels, center = [33.6844, 73.0479] }) {
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current || mapInstanceRef.current) return;

        // Initialize map
        const map = L.map(mapRef.current).setView(center, 12);
        mapInstanceRef.current = map;

        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        // Add markers
        hostels.forEach((hostel) => {
            const marker = L.marker([hostel.lat || 33.6844, hostel.lng || 73.0479]).addTo(map);
            marker.bindPopup(`
                <div style="padding: 8px;">
                    <h3 style="font-weight: bold; color: #111827; margin-bottom: 4px;">${hostel.name}</h3>
                    <p style="font-size: 14px; color: #6B7280; margin-bottom: 4px;">${hostel.address}</p>
                    <p style="color: #10B981; font-weight: bold;">₹${hostel.price.toLocaleString()}/mo</p>
                </div>
            `);
        });

        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, [hostels, center]);

    return <div ref={mapRef} style={{ height: '500px', width: '100%' }} className="rounded-2xl" />;
}
