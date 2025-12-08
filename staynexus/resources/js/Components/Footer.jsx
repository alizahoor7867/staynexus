import { Link } from '@inertiajs/react';
import { BuildingOfficeIcon } from '@heroicons/react/24/outline';

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                                <BuildingOfficeIcon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-black text-gray-900">StayNexus</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            Your trusted partner in finding the perfect student accommodation.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-lg text-gray-900">Quick Links</h4>
                        <ul className="space-y-3 text-gray-600">
                            <li><Link href={route('about')} className="hover:text-emerald-600 transition">About Us</Link></li>
                            <li><Link href={route('home')} className="hover:text-emerald-600 transition">How It Works</Link></li>
                            <li><Link href={route('hostels.search')} className="hover:text-emerald-600 transition">Search Hostels</Link></li>
                            <li><Link href={route('contact')} className="hover:text-emerald-600 transition">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-lg text-gray-900">Support</h4>
                        <ul className="space-y-3 text-gray-600">
                            <li><Link href="#" className="hover:text-emerald-600 transition">Help Center</Link></li>
                            <li><Link href="#" className="hover:text-emerald-600 transition">Safety Guidelines</Link></li>
                            <li><Link href="#" className="hover:text-emerald-600 transition">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-emerald-600 transition">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-lg text-gray-900">Contact</h4>
                        <ul className="space-y-3 text-gray-600">
                            <li>support@staynexus.com</li>
                            <li>+91 1800-123-4567</li>
                            <li>Available 24/7</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
                    <p>&copy; 2024 StayNexus. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
