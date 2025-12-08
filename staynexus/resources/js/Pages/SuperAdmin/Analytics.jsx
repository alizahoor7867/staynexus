import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { 
    ChartBarIcon,
    ArrowTrendingUpIcon,
    ArrowTrendingDownIcon,
    EyeIcon,
    UserGroupIcon,
    BuildingOfficeIcon,
    CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import SuperAdminLayout from '../../Layouts/SuperAdminLayout';

export default function Analytics() {
    const analyticsData = [
        { title: 'Total Revenue', value: '₹12.5M', change: '+15.3%', trend: 'up' },
        { title: 'Active Bookings', value: '2,847', change: '+8.2%', trend: 'up' },
        { title: 'Platform Growth', value: '23.4%', change: '+5.1%', trend: 'up' },
        { title: 'User Retention', value: '89.2%', change: '-2.1%', trend: 'down' }
    ];

    return (
        <SuperAdminLayout currentPage="analytics">
            <Head title="Analytics - Super Admin" />
            
            <div className="px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {analyticsData.map((stat, index) => (
                        <motion.div
                            key={stat.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20"
                        >
                            <h3 className="text-sm font-semibold text-gray-600 mb-2">{stat.title}</h3>
                            <p className="text-3xl font-black text-gray-900 mb-2">{stat.value}</p>
                            <div className="flex items-center">
                                {stat.trend === 'up' ? (
                                    <ArrowTrendingUpIcon className="h-4 w-4 text-green-600 mr-1" />
                                ) : (
                                    <ArrowTrendingDownIcon className="h-4 w-4 text-red-600 mr-1" />
                                )}
                                <span className={`text-sm font-semibold ${
                                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                                }`}>
                                    {stat.change}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Charts Placeholder */}
                <div className="grid lg:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20"
                    >
                        <h3 className="text-xl font-black text-gray-900 mb-4">Revenue Analytics</h3>
                        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                            <ChartBarIcon className="h-16 w-16 text-gray-400" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20"
                    >
                        <h3 className="text-xl font-black text-gray-900 mb-4">User Growth</h3>
                        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                            <UserGroupIcon className="h-16 w-16 text-gray-400" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </SuperAdminLayout>
    );
}