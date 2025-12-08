import { Link, Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function ContactMap() {
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current || mapInstanceRef.current) return;

        // Fix default marker icon
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });

        // Initialize map - Blue Area, Islamabad
        const map = L.map(mapRef.current).setView([33.7181, 73.0776], 15);
        mapInstanceRef.current = map;

        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        // Add marker for office location
        const marker = L.marker([33.7181, 73.0776]).addTo(map);
        marker.bindPopup(`
            <div style="padding: 12px; min-width: 200px;">
                <h3 style="font-weight: bold; color: #111827; margin-bottom: 8px; font-size: 16px;">StayNexus Office</h3>
                <p style="font-size: 14px; color: #6B7280; margin-bottom: 4px;">Blue Area, Jinnah Avenue</p>
                <p style="font-size: 14px; color: #6B7280; margin-bottom: 8px;">Islamabad, Pakistan</p>
                <p style="color: #10B981; font-weight: bold; font-size: 14px;">📞 +92 51 1234567</p>
            </div>
        `).openPopup();

        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, []);

    return <div ref={mapRef} style={{ height: '500px', width: '100%' }} />;
}

export default function Contact({ auth }) {
    return (
        <>
            <Head title="Contact Us - StayNexus" />
            
            <div className="min-h-screen bg-white">
                <Navbar auth={auth} />

                {/* Hero */}
                <div className="pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl font-black text-gray-900 mb-6"
                        >
                            Get in <span className="text-emerald-600">Touch</span>
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-600 max-w-3xl mx-auto"
                        >
                            Have questions? We're here to help. Reach out to us anytime.
                        </motion.p>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-16">
                            {/* Contact Info */}
                            <div>
                                <h2 className="text-3xl font-black text-gray-900 mb-8">Contact Information</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                                            <EnvelopeIcon className="h-6 w-6 text-emerald-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                                            <p className="text-gray-600">support@staynexus.com</p>
                                            <p className="text-gray-600">info@staynexus.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                                            <PhoneIcon className="h-6 w-6 text-emerald-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                                            <p className="text-gray-600">+92 51 1234567</p>
                                            <p className="text-gray-600">+92 300 1234567</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                                            <MapPinIcon className="h-6 w-6 text-emerald-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                                            <p className="text-gray-600">Blue Area, Jinnah Avenue</p>
                                            <p className="text-gray-600">Islamabad, Pakistan</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                                            <ClockIcon className="h-6 w-6 text-emerald-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-1">Working Hours</h3>
                                            <p className="text-gray-600">24/7 Support Available</p>
                                            <p className="text-gray-600">We're always here to help</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                                <h2 className="text-3xl font-black text-gray-900 mb-6">Send us a Message</h2>
                                <form className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                        <input 
                                            type="text" 
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                                        <input 
                                            type="email" 
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                                        <input 
                                            type="tel" 
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                            placeholder="+92 300 1234567"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                        <textarea 
                                            rows="4" 
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                            placeholder="How can we help you?"
                                        ></textarea>
                                    </div>

                                    <button 
                                        type="submit" 
                                        className="w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:shadow-xl transition-all font-bold"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-black text-gray-900 mb-8 text-center"
                        >
                            Find Us on Map
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
                        >
                            <ContactMap />
                        </motion.div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}
