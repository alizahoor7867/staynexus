import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { 
    BuildingOfficeIcon,
    MapPinIcon,
    PhoneIcon,
    EnvelopeIcon,
    CurrencyDollarIcon,
    WifiIcon,
    ShieldCheckIcon,
    ClockIcon,
    PhotoIcon,
    Cog6ToothIcon
} from '@heroicons/react/24/outline';
import HostelAdminLayout from '../../Layouts/HostelAdminLayout';

export default function Settings({ hostelInfo = {} }) {
    const defaultInfo = {
        name: 'Green Valley Hostel',
        address: '123 University Road, Lahore, Pakistan',
        phone: '+92 42 1234567',
        email: 'info@greenvalley.com',
        description: 'A modern hostel providing comfortable accommodation for students with all necessary amenities.',
        checkInTime: '14:00',
        checkOutTime: '12:00',
        wifiPassword: 'GreenValley2024',
        securityDeposit: 5000,
        monthlyRent: {
            single: 8000,
            double: 6000,
            triple: 5000,
            quad: 4500
        },
        amenities: [
            'Free Wi-Fi',
            '24/7 Security',
            'Laundry Service',
            'Common Kitchen',
            'Study Room',
            'Parking',
            'Air Conditioning',
            'Hot Water'
        ],
        rules: [
            'No smoking inside the premises',
            'Visitors allowed until 10 PM',
            'Keep common areas clean',
            'No loud music after 11 PM',
            'Report any maintenance issues immediately'
        ]
    };

    const info = Object.keys(hostelInfo).length > 0 ? hostelInfo : defaultInfo;

    return (
        <HostelAdminLayout header="Hostel Settings" currentPage="settings">
            <Head title="Hostel Settings" />
            
            <div className="space-y-6">
                {/* Basic Information */}
                <div className="bg-white rounded-lg shadow">
                    <div className="p-6 border-b">
                        <div className="flex items-center gap-3">
                            <BuildingOfficeIcon className="h-6 w-6 text-indigo-600" />
                            <h3 className="text-lg font-semibold">Basic Information</h3>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Hostel Name</label>
                                <input 
                                    type="text" 
                                    defaultValue={info.name}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                <input 
                                    type="tel" 
                                    defaultValue={info.phone}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                                <input 
                                    type="text" 
                                    defaultValue={info.address}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input 
                                    type="email" 
                                    defaultValue={info.email}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Security Deposit</label>
                                <input 
                                    type="number" 
                                    defaultValue={info.securityDeposit}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                                <textarea 
                                    rows="3"
                                    defaultValue={info.description}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pricing */}
                <div className="bg-white rounded-lg shadow">
                    <div className="p-6 border-b">
                        <div className="flex items-center gap-3">
                            <CurrencyDollarIcon className="h-6 w-6 text-green-600" />
                            <h3 className="text-lg font-semibold">Room Pricing (Monthly)</h3>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Single Room</label>
                                <input 
                                    type="number" 
                                    defaultValue={info.monthlyRent.single}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Double Room</label>
                                <input 
                                    type="number" 
                                    defaultValue={info.monthlyRent.double}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Triple Room</label>
                                <input 
                                    type="number" 
                                    defaultValue={info.monthlyRent.triple}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Quad Room</label>
                                <input 
                                    type="number" 
                                    defaultValue={info.monthlyRent.quad}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Operational Settings */}
                <div className="bg-white rounded-lg shadow">
                    <div className="p-6 border-b">
                        <div className="flex items-center gap-3">
                            <ClockIcon className="h-6 w-6 text-blue-600" />
                            <h3 className="text-lg font-semibold">Operational Settings</h3>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Time</label>
                                <input 
                                    type="time" 
                                    defaultValue={info.checkInTime}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Time</label>
                                <input 
                                    type="time" 
                                    defaultValue={info.checkOutTime}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Wi-Fi Password</label>
                                <input 
                                    type="text" 
                                    defaultValue={info.wifiPassword}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Amenities */}
                <div className="bg-white rounded-lg shadow">
                    <div className="p-6 border-b">
                        <div className="flex items-center gap-3">
                            <WifiIcon className="h-6 w-6 text-purple-600" />
                            <h3 className="text-lg font-semibold">Amenities</h3>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {info.amenities.map((amenity, index) => (
                                <div key={index} className="flex items-center">
                                    <input 
                                        type="checkbox" 
                                        defaultChecked 
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    />
                                    <label className="ml-2 text-sm text-gray-700">{amenity}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Rules */}
                <div className="bg-white rounded-lg shadow">
                    <div className="p-6 border-b">
                        <div className="flex items-center gap-3">
                            <ShieldCheckIcon className="h-6 w-6 text-red-600" />
                            <h3 className="text-lg font-semibold">Hostel Rules</h3>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="space-y-3">
                            {info.rules.map((rule, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <span className="text-indigo-600 font-bold">{index + 1}.</span>
                                    <input 
                                        type="text" 
                                        defaultValue={rule}
                                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                            ))}
                        </div>
                        <button className="mt-4 text-indigo-600 hover:text-indigo-700 font-semibold text-sm">
                            + Add New Rule
                        </button>
                    </div>
                </div>

                {/* Save Button */}
                <div className="flex justify-end">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2"
                    >
                        <Cog6ToothIcon className="h-5 w-5" />
                        Save Settings
                    </motion.button>
                </div>
            </div>
        </HostelAdminLayout>
    );
}