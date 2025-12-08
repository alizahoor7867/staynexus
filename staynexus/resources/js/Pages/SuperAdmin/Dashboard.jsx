import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
    BuildingOfficeIcon, 
    UserGroupIcon, 
    CurrencyDollarIcon,
    ChartBarIcon,
    PlusIcon,
    ArrowTrendingUpIcon,
    ArrowTrendingDownIcon,
    CalendarDaysIcon,
    MapPinIcon,
    StarIcon,
    Cog6ToothIcon,
    XMarkIcon
} from '@heroicons/react/24/outline';
import { 
    BuildingOfficeIcon as BuildingSolid,
    UserGroupIcon as UsersSolid,
    CurrencyDollarIcon as CurrencySolid,
    ChartBarIcon as ChartSolid
} from '@heroicons/react/24/solid';
import SuperAdminLayout from '../../Layouts/SuperAdminLayout';

export default function Dashboard({ stats = {} }) {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setShowModal(false);
        setFormData({ name: '', email: '', phone: '', address: '', city: '', description: '' });
    };
    const dashboardStats = [
        {
            title: 'Total Hostels',
            value: '156',
            change: '+12%',
            trend: 'up',
            icon: BuildingOfficeIcon,
            solidIcon: BuildingSolid,
            color: 'emerald',
            bgColor: 'bg-emerald-50',
            iconColor: 'text-emerald-600'
        },
        {
            title: 'Active Users',
            value: '2,847',
            change: '+8.2%',
            trend: 'up',
            icon: UserGroupIcon,
            solidIcon: UsersSolid,
            color: 'blue',
            bgColor: 'bg-blue-50',
            iconColor: 'text-blue-600'
        },
        {
            title: 'Monthly Revenue',
            value: '₹4.2M',
            change: '+15.3%',
            trend: 'up',
            icon: CurrencyDollarIcon,
            solidIcon: CurrencySolid,
            color: 'purple',
            bgColor: 'bg-purple-50',
            iconColor: 'text-purple-600'
        },
        {
            title: 'Bookings',
            value: '1,234',
            change: '-2.1%',
            trend: 'down',
            icon: ChartBarIcon,
            solidIcon: ChartSolid,
            color: 'orange',
            bgColor: 'bg-orange-50',
            iconColor: 'text-orange-600'
        }
    ];

    const recentHostels = [
        { id: 1, name: 'Sunrise Student Residence', location: 'Islamabad', status: 'Active', rooms: 45, rating: 4.8 },
        { id: 2, name: 'Green Valley Hostel', location: 'Lahore', status: 'Pending', rooms: 32, rating: 4.6 },
        { id: 3, name: 'City Center Lodge', location: 'Karachi', status: 'Active', rooms: 28, rating: 4.7 },
        { id: 4, name: 'Campus View Hostel', location: 'Rawalpindi', status: 'Active', rooms: 38, rating: 4.5 },
        { id: 5, name: 'Modern Living Space', location: 'Faisalabad', status: 'Review', rooms: 25, rating: 4.4 }
    ];

    const recentUsers = [
        { id: 1, name: 'Ahmed Khan', email: 'ahmed@email.com', type: 'Student', joined: '2024-01-15', status: 'Active' },
        { id: 2, name: 'Sara Ali', email: 'sara@email.com', type: 'Hostel Owner', joined: '2024-01-14', status: 'Active' },
        { id: 3, name: 'Hassan Sheikh', email: 'hassan@email.com', type: 'Student', joined: '2024-01-13', status: 'Pending' },
        { id: 4, name: 'Fatima Malik', email: 'fatima@email.com', type: 'Student', joined: '2024-01-12', status: 'Active' },
        { id: 5, name: 'Ali Raza', email: 'ali@email.com', type: 'Hostel Owner', joined: '2024-01-11', status: 'Active' }
    ];

    return (
        <SuperAdminLayout currentPage="dashboard">
            <Head title="Super Admin Dashboard" />
            
            <div className="px-4 sm:px-6 lg:px-8 py-8">
                {/* Add Hostel Button */}
                <div className="mb-8 flex justify-end">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowModal(true)}
                        className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl"
                    >
                        <PlusIcon className="h-5 w-5" />
                        Add Hostel
                    </motion.button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {dashboardStats.map((stat, index) => (
                        <motion.div
                            key={stat.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 hover:shadow-2xl hover:bg-white/90 transition-all duration-300 cursor-pointer"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <p className="text-gray-600 text-sm font-semibold uppercase tracking-wide">{stat.title}</p>
                                    </div>
                                    <p className="text-3xl font-black text-gray-900 mb-3">{stat.value}</p>
                                    <div className="flex items-center">
                                        <div className={`flex items-center px-2 py-1 rounded-full ${
                                            stat.trend === 'up' ? 'bg-green-100' : 'bg-red-100'
                                        }`}>
                                            {stat.trend === 'up' ? (
                                                <ArrowTrendingUpIcon className="h-3 w-3 text-green-600 mr-1" />
                                            ) : (
                                                <ArrowTrendingDownIcon className="h-3 w-3 text-red-600 mr-1" />
                                            )}
                                            <span className={`text-xs font-bold ${
                                                stat.trend === 'up' ? 'text-green-700' : 'text-red-700'
                                            }`}>
                                                {stat.change}
                                            </span>
                                        </div>
                                        <span className="text-gray-500 text-xs ml-2 font-medium">vs last month</span>
                                    </div>
                                </div>
                                <div className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                    <stat.solidIcon className={`h-8 w-8 ${stat.iconColor}`} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Recent Hostels */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20"
                    >
                        <div className="p-6 border-b border-gray-100/50">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                                        <BuildingSolid className="h-5 w-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-black text-gray-900">Recent Hostels</h3>
                                </div>
                                <Link href="/superadmin/hostels" className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                    View All
                                    <ArrowTrendingUpIcon className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="space-y-3">
                                {recentHostels.map((hostel, index) => (
                                    <motion.div
                                        key={hostel.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 + index * 0.1 }}
                                        className="group flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-50/50 rounded-xl hover:from-emerald-50 hover:to-teal-50 transition-all duration-300 cursor-pointer border border-transparent hover:border-emerald-200"
                                    >
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <BuildingOfficeIcon className="h-6 w-6 text-emerald-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 group-hover:text-emerald-900 transition-colors">{hostel.name}</h4>
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <MapPinIcon className="h-4 w-4" />
                                                    <span>{hostel.location}</span>
                                                    <span>•</span>
                                                    <span>{hostel.rooms} rooms</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                                hostel.status === 'Active' ? 'bg-green-100 text-green-800' :
                                                hostel.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-blue-100 text-blue-800'
                                            }`}>
                                                {hostel.status}
                                            </span>
                                            <div className="flex items-center justify-end gap-1 mt-2">
                                                <StarIcon className="h-4 w-4 text-yellow-500 fill-current" />
                                                <span className="text-sm font-semibold text-gray-700">{hostel.rating}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Recent Users */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20"
                    >
                        <div className="p-6 border-b border-gray-100/50">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                                        <UsersSolid className="h-5 w-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-black text-gray-900">Recent Users</h3>
                                </div>
                                <Link href="/superadmin/users" className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                    View All
                                    <ArrowTrendingUpIcon className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="space-y-3">
                                {recentUsers.map((user, index) => (
                                    <motion.div
                                        key={user.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 + index * 0.1 }}
                                        className="group flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-50/50 rounded-xl hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 cursor-pointer border border-transparent hover:border-blue-200"
                                    >
                                        <div className="flex items-center space-x-4">
                                            <div className="relative">
                                                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                                    <span className="text-lg font-bold text-blue-600">{user.name.charAt(0)}</span>
                                                </div>
                                                <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                                                    user.status === 'Active' ? 'bg-green-500' : 'bg-yellow-500'
                                                }`}></div>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 group-hover:text-blue-900 transition-colors">{user.name}</h4>
                                                <p className="text-sm text-gray-600">{user.email}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                                user.type === 'Student' ? 'bg-emerald-100 text-emerald-800' : 'bg-purple-100 text-purple-800'
                                            }`}>
                                                {user.type}
                                            </span>
                                            <div className="flex items-center justify-end gap-1 mt-2">
                                                <CalendarDaysIcon className="h-4 w-4 text-gray-400" />
                                                <span className="text-xs text-gray-600 font-medium">{user.joined}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Quick Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                            <Cog6ToothIcon className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-xl font-black text-gray-900">Quick Actions</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { title: 'Manage Hostels', icon: BuildingOfficeIcon, href: '/superadmin/hostels', gradient: 'from-emerald-500 to-teal-600' },
                            { title: 'View Users', icon: UserGroupIcon, href: '/superadmin/users', gradient: 'from-blue-500 to-indigo-600' },
                            { title: 'Analytics', icon: ChartBarIcon, href: '/superadmin/analytics', gradient: 'from-purple-500 to-pink-600' },
                            { title: 'Subscriptions', icon: CurrencyDollarIcon, href: '/superadmin/subscriptions', gradient: 'from-orange-500 to-red-600' }
                        ].map((action, index) => (
                            <motion.div
                                key={action.title}
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9 + index * 0.1 }}
                            >
                                <Link
                                    href={action.href}
                                    className="group block p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-gray-300 transition-all text-center shadow-sm hover:shadow-lg"
                                >
                                    <div className={`w-12 h-12 bg-gradient-to-r ${action.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                                        <action.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <h4 className="font-bold text-gray-900 group-hover:text-gray-700 transition-colors">{action.title}</h4>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Add Hostel Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={() => setShowModal(false)}></div>
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl relative z-10"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold text-gray-900">Add New Hostel</h3>
                                <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">
                                    <XMarkIcon className="h-6 w-6" />
                                </button>
                            </div>
                            
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Hostel Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                        placeholder="Enter hostel name"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                        placeholder="Enter email address"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                        placeholder="Enter phone number"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.city}
                                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                        placeholder="Enter city"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.address}
                                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                        placeholder="Enter full address"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                    <textarea
                                        rows="3"
                                        value={formData.description}
                                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                        placeholder="Enter hostel description"
                                    />
                                </div>
                                
                                <div className="flex gap-3 pt-4">
                                    <button
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                        className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 px-4 py-2 text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all"
                                    >
                                        Add Hostel
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            )}
        </SuperAdminLayout>
    );
}