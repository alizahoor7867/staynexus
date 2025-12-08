import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
    BuildingOfficeIcon, 
    MagnifyingGlassIcon,
    FunnelIcon,
    EyeIcon,
    PencilIcon,
    TrashIcon,
    PlusIcon
} from '@heroicons/react/24/outline';
import SuperAdminLayout from '../../Layouts/SuperAdminLayout';

export default function Hostels() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');

    const hostels = [
        { 
            id: 1, 
            name: 'Sunrise Student Residence', 
            location: 'F-7 Markaz, Islamabad', 
            owner: 'Ahmed Khan',
            rooms: 45, 
            occupancy: 38,
            rating: 4.8, 
            reviews: 156,
            revenue: '₹2.1M',
            status: 'Active',
            joinDate: '2023-06-15',
            image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=100&h=100&fit=crop'
        },
        { 
            id: 2, 
            name: 'Green Valley Hostel', 
            location: 'Gulberg, Lahore', 
            owner: 'Sara Ali',
            rooms: 32, 
            occupancy: 28,
            rating: 4.6, 
            reviews: 89,
            revenue: '₹1.8M',
            status: 'Pending',
            joinDate: '2023-08-22',
            image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=100&h=100&fit=crop'
        },
        { 
            id: 3, 
            name: 'City Center Lodge', 
            location: 'Clifton, Karachi', 
            owner: 'Hassan Sheikh',
            rooms: 28, 
            occupancy: 25,
            rating: 4.7, 
            reviews: 134,
            revenue: '₹1.5M',
            status: 'Active',
            joinDate: '2023-05-10',
            image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=100&h=100&fit=crop'
        },
        { 
            id: 4, 
            name: 'Campus View Hostel', 
            location: 'Satellite Town, Rawalpindi', 
            owner: 'Fatima Malik',
            rooms: 38, 
            occupancy: 32,
            rating: 4.5, 
            reviews: 67,
            revenue: '₹1.9M',
            status: 'Active',
            joinDate: '2023-07-03',
            image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=100&h=100&fit=crop'
        },
        { 
            id: 5, 
            name: 'Modern Living Space', 
            location: 'Civil Lines, Faisalabad', 
            owner: 'Ali Raza',
            rooms: 25, 
            occupancy: 20,
            rating: 4.4, 
            reviews: 45,
            revenue: '₹1.2M',
            status: 'Review',
            joinDate: '2023-09-18',
            image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=100&h=100&fit=crop'
        }
    ];

    const filteredHostels = hostels.filter(hostel => {
        const matchesSearch = hostel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            hostel.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            hostel.owner.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterStatus === 'all' || hostel.status.toLowerCase() === filterStatus;
        return matchesSearch && matchesFilter;
    });

    return (
        <SuperAdminLayout currentPage="hostels">
            <Head title="Manage Hostels - Super Admin" />
            
            <div className="px-4 sm:px-6 lg:px-8 py-8">
                    {/* Filters */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100"
                    >
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1">
                                <div className="relative">
                                    <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search hostels, locations, or owners..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <select
                                    value={filterStatus}
                                    onChange={(e) => setFilterStatus(e.target.value)}
                                    className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                >
                                    <option value="all">All Status</option>
                                    <option value="active">Active</option>
                                    <option value="pending">Pending</option>
                                    <option value="review">Under Review</option>
                                </select>
                            </div>
                        </div>
                    </motion.div>

                    {/* Hostels Grid */}
                    <div className="grid gap-6">
                        {filteredHostels.map((hostel, index) => (
                            <motion.div
                                key={hostel.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all"
                            >
                                <div className="p-6">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-start space-x-4">
                                            <img
                                                src={hostel.image}
                                                alt={hostel.name}
                                                className="w-20 h-20 rounded-xl object-cover"
                                            />
                                            <div>
                                                <h3 className="text-xl font-black text-gray-900 mb-1">{hostel.name}</h3>
                                                <p className="text-gray-600 mb-2">{hostel.location}</p>
                                                <p className="text-sm text-gray-500">Owner: {hostel.owner}</p>
                                                <p className="text-sm text-gray-500">Joined: {hostel.joinDate}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                                hostel.status === 'Active' ? 'bg-green-100 text-green-800' :
                                                hostel.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-blue-100 text-blue-800'
                                            }`}>
                                                {hostel.status}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6 pt-6 border-t border-gray-100">
                                        <div className="text-center">
                                            <p className="text-2xl font-black text-gray-900">{hostel.rooms}</p>
                                            <p className="text-sm text-gray-600">Total Rooms</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-2xl font-black text-emerald-600">{hostel.occupancy}</p>
                                            <p className="text-sm text-gray-600">Occupied</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-2xl font-black text-yellow-600">★ {hostel.rating}</p>
                                            <p className="text-sm text-gray-600">{hostel.reviews} reviews</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-2xl font-black text-purple-600">{hostel.revenue}</p>
                                            <p className="text-sm text-gray-600">Revenue</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-2xl font-black text-blue-600">{Math.round((hostel.occupancy / hostel.rooms) * 100)}%</p>
                                            <p className="text-sm text-gray-600">Occupancy</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-end space-x-3 mt-6 pt-6 border-t border-gray-100">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold hover:bg-blue-200 transition flex items-center gap-2"
                                        >
                                            <EyeIcon className="h-4 w-4" />
                                            View
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg font-semibold hover:bg-emerald-200 transition flex items-center gap-2"
                                        >
                                            <PencilIcon className="h-4 w-4" />
                                            Edit
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-4 py-2 bg-red-100 text-red-700 rounded-lg font-semibold hover:bg-red-200 transition flex items-center gap-2"
                                        >
                                            <TrashIcon className="h-4 w-4" />
                                            Delete
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {filteredHostels.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-12"
                        >
                            <BuildingOfficeIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">No hostels found</h3>
                            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                        </motion.div>
                    )}
            </div>
        </SuperAdminLayout>
    );
}