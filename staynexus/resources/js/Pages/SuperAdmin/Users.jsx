import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
    UserGroupIcon, 
    MagnifyingGlassIcon,
    EyeIcon,
    PencilIcon,
    TrashIcon,
    PlusIcon,
    EnvelopeIcon,
    PhoneIcon
} from '@heroicons/react/24/outline';
import SuperAdminLayout from '../../Layouts/SuperAdminLayout';

export default function Users() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');
    const [filterStatus, setFilterStatus] = useState('all');

    const users = [
        { 
            id: 1, 
            name: 'Ahmed Khan', 
            email: 'ahmed.khan@email.com',
            phone: '+92 300 1234567',
            type: 'Student', 
            status: 'Active',
            joinDate: '2024-01-15',
            lastLogin: '2024-01-20',
            bookings: 3,
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
        },
        { 
            id: 2, 
            name: 'Sara Ali', 
            email: 'sara.ali@email.com',
            phone: '+92 301 2345678',
            type: 'Hostel Owner', 
            status: 'Active',
            joinDate: '2024-01-14',
            lastLogin: '2024-01-20',
            hostels: 2,
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
        },
        { 
            id: 3, 
            name: 'Hassan Sheikh', 
            email: 'hassan.sheikh@email.com',
            phone: '+92 302 3456789',
            type: 'Student', 
            status: 'Pending',
            joinDate: '2024-01-13',
            lastLogin: '2024-01-19',
            bookings: 0,
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
        },
        { 
            id: 4, 
            name: 'Fatima Malik', 
            email: 'fatima.malik@email.com',
            phone: '+92 303 4567890',
            type: 'Student', 
            status: 'Active',
            joinDate: '2024-01-12',
            lastLogin: '2024-01-20',
            bookings: 1,
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
        },
        { 
            id: 5, 
            name: 'Ali Raza', 
            email: 'ali.raza@email.com',
            phone: '+92 304 5678901',
            type: 'Hostel Owner', 
            status: 'Active',
            joinDate: '2024-01-11',
            lastLogin: '2024-01-18',
            hostels: 1,
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
        },
        { 
            id: 6, 
            name: 'Zainab Ahmed', 
            email: 'zainab.ahmed@email.com',
            phone: '+92 305 6789012',
            type: 'Student', 
            status: 'Suspended',
            joinDate: '2024-01-10',
            lastLogin: '2024-01-15',
            bookings: 2,
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face'
        }
    ];

    const filteredUsers = users.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            user.phone.includes(searchTerm);
        const matchesType = filterType === 'all' || user.type.toLowerCase().replace(' ', '') === filterType;
        const matchesStatus = filterStatus === 'all' || user.status.toLowerCase() === filterStatus;
        return matchesSearch && matchesType && matchesStatus;
    });

    return (
        <SuperAdminLayout currentPage="users">
            <Head title="Manage Users - Super Admin" />
            
            <div className="px-4 sm:px-6 lg:px-8 py-8">
                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        {[
                            { title: 'Total Users', value: users.length, color: 'blue' },
                            { title: 'Students', value: users.filter(u => u.type === 'Student').length, color: 'emerald' },
                            { title: 'Hostel Owners', value: users.filter(u => u.type === 'Hostel Owner').length, color: 'purple' },
                            { title: 'Active Users', value: users.filter(u => u.status === 'Active').length, color: 'green' }
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
                            >
                                <h3 className="text-sm font-semibold text-gray-600 mb-2">{stat.title}</h3>
                                <p className={`text-3xl font-black text-${stat.color}-600`}>{stat.value}</p>
                            </motion.div>
                        ))}
                    </div>

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
                                        placeholder="Search users by name, email, or phone..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <select
                                    value={filterType}
                                    onChange={(e) => setFilterType(e.target.value)}
                                    className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                >
                                    <option value="all">All Types</option>
                                    <option value="student">Students</option>
                                    <option value="hostelowner">Hostel Owners</option>
                                </select>
                                <select
                                    value={filterStatus}
                                    onChange={(e) => setFilterStatus(e.target.value)}
                                    className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                >
                                    <option value="all">All Status</option>
                                    <option value="active">Active</option>
                                    <option value="pending">Pending</option>
                                    <option value="suspended">Suspended</option>
                                </select>
                            </div>
                        </div>
                    </motion.div>

                    {/* Users Grid */}
                    <div className="grid gap-6">
                        {filteredUsers.map((user, index) => (
                            <motion.div
                                key={user.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all"
                            >
                                <div className="p-6">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-start space-x-4">
                                            <img
                                                src={user.avatar}
                                                alt={user.name}
                                                className="w-16 h-16 rounded-xl object-cover"
                                            />
                                            <div>
                                                <h3 className="text-xl font-black text-gray-900 mb-1">{user.name}</h3>
                                                <div className="flex items-center text-gray-600 mb-1">
                                                    <EnvelopeIcon className="h-4 w-4 mr-2" />
                                                    <span className="text-sm">{user.email}</span>
                                                </div>
                                                <div className="flex items-center text-gray-600 mb-2">
                                                    <PhoneIcon className="h-4 w-4 mr-2" />
                                                    <span className="text-sm">{user.phone}</span>
                                                </div>
                                                <div className="flex items-center space-x-3">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                        user.type === 'Student' ? 'bg-emerald-100 text-emerald-800' : 'bg-purple-100 text-purple-800'
                                                    }`}>
                                                        {user.type}
                                                    </span>
                                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                        user.status === 'Active' ? 'bg-green-100 text-green-800' :
                                                        user.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                                        'bg-red-100 text-red-800'
                                                    }`}>
                                                        {user.status}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-100">
                                        <div className="text-center">
                                            <p className="text-lg font-black text-gray-900">{user.joinDate}</p>
                                            <p className="text-sm text-gray-600">Join Date</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-lg font-black text-emerald-600">{user.lastLogin}</p>
                                            <p className="text-sm text-gray-600">Last Login</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-lg font-black text-blue-600">
                                                {user.type === 'Student' ? user.bookings : user.hostels}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                {user.type === 'Student' ? 'Bookings' : 'Hostels'}
                                            </p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-lg font-black text-purple-600">
                                                {user.type === 'Student' ? '₹45K' : '₹2.1M'}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                {user.type === 'Student' ? 'Spent' : 'Revenue'}
                                            </p>
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

                    {filteredUsers.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-12"
                        >
                            <UserGroupIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">No users found</h3>
                            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                        </motion.div>
                    )}
            </div>
        </SuperAdminLayout>
    );
}