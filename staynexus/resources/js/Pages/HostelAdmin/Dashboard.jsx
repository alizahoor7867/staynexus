import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { 
    HomeIcon,
    UserGroupIcon,
    CurrencyDollarIcon,
    BanknotesIcon,
    ChartBarIcon,
    BellAlertIcon,
    WrenchScrewdriverIcon,
    ClockIcon,
    ArrowTrendingUpIcon,
    ArrowTrendingDownIcon
} from '@heroicons/react/24/outline';
import { 
    HomeIcon as HomeSolid,
    UserGroupIcon as UsersSolid,
    CurrencyDollarIcon as CurrencySolid,
    BanknotesIcon as BankSolid
} from '@heroicons/react/24/solid';
import HostelAdminLayout from '../../Layouts/HostelAdminLayout';

export default function Dashboard() {
    const stats = [
        { label: 'Total Rooms', value: '48', change: '+2', trend: 'up', icon: HomeIcon, solidIcon: HomeSolid, bgColor: 'bg-emerald-50', iconColor: 'text-emerald-600' },
        { label: 'Occupied', value: '42', change: '87.5%', trend: 'up', icon: UserGroupIcon, solidIcon: UsersSolid, bgColor: 'bg-teal-50', iconColor: 'text-teal-600' },
        { label: 'Vacant', value: '6', change: '12.5%', trend: 'down', icon: HomeIcon, solidIcon: HomeSolid, bgColor: 'bg-cyan-50', iconColor: 'text-cyan-600' },
        { label: 'Revenue', value: '₹2.4L', change: '+12%', trend: 'up', icon: CurrencyDollarIcon, solidIcon: CurrencySolid, bgColor: 'bg-purple-50', iconColor: 'text-purple-600' },
        { label: 'Pending Rent', value: '₹45K', change: '8 students', trend: 'down', icon: BanknotesIcon, solidIcon: BankSolid, bgColor: 'bg-orange-50', iconColor: 'text-orange-600' },
        { label: 'Maintenance', value: '5', change: '2 urgent', trend: 'down', icon: WrenchScrewdriverIcon, solidIcon: WrenchScrewdriverIcon, bgColor: 'bg-red-50', iconColor: 'text-red-600' }
    ];

    const recentBookings = [
        { id: 1, student: 'Ahmed Khan', room: '101-A', date: '2024-02-15', status: 'Active', rent: 8000 },
        { id: 2, student: 'Sara Ali', room: '205-B', date: '2024-02-14', status: 'Active', rent: 10000 },
        { id: 3, student: 'Hassan Sheikh', room: '302-C', date: '2024-02-13', status: 'Pending', rent: 9000 }
    ];

    const pendingPayments = [
        { id: 1, student: 'Fatima Malik', room: '104-A', amount: 8500, dueDate: '2024-02-10', days: 5 },
        { id: 2, student: 'Ali Raza', room: '208-B', amount: 10500, dueDate: '2024-02-08', days: 7 },
        { id: 3, student: 'Zainab Ahmed', room: '301-C', amount: 9200, dueDate: '2024-02-12', days: 3 }
    ];

    const maintenanceRequests = [
        { id: 1, room: '203-B', issue: 'AC not working', priority: 'High', time: '2 hours ago' },
        { id: 2, room: '105-A', issue: 'Water leakage', priority: 'Urgent', time: '30 mins ago' },
        { id: 3, room: '304-C', issue: 'Light bulb replacement', priority: 'Low', time: '5 hours ago' }
    ];

    return (
        <HostelAdminLayout currentPage="dashboard">
            <Head title="Hostel Admin Dashboard" />
            
            <div className="px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 hover:shadow-2xl hover:bg-white/90 transition-all duration-300 cursor-pointer"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex-1">
                                    <p className="text-gray-600 text-sm font-semibold uppercase tracking-wide mb-1">{stat.label}</p>
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
                                    </div>
                                </div>
                                <div className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                    <stat.solidIcon className={`h-8 w-8 ${stat.iconColor}`} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-6 mb-6">
                    {/* Recent Bookings */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20"
                    >
                        <div className="p-6 border-b border-gray-100/50">
                            <h3 className="text-xl font-black text-gray-900">Recent Bookings</h3>
                        </div>
                        <div className="p-6 space-y-3">
                            {recentBookings.map((booking, idx) => (
                                <motion.div 
                                    key={booking.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 + idx * 0.1 }}
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl hover:from-emerald-100 hover:to-teal-100 transition-all cursor-pointer border border-emerald-100/50"
                                >
                                    <div>
                                        <p className="font-bold text-gray-900">{booking.student}</p>
                                        <p className="text-sm text-gray-600">Room {booking.room} • ₹{booking.rent.toLocaleString()}/month</p>
                                    </div>
                                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                                        booking.status === 'Active' ? 'bg-emerald-600 text-white' : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                        {booking.status}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Pending Payments */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20"
                    >
                        <div className="p-6 border-b border-gray-100/50">
                            <h3 className="text-xl font-black text-gray-900">Pending Payments</h3>
                        </div>
                        <div className="p-6 space-y-3">
                            {pendingPayments.map((payment, idx) => (
                                <motion.div 
                                    key={payment.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 + idx * 0.1 }}
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    className="flex items-center justify-between p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-all cursor-pointer border border-orange-100/50"
                                >
                                    <div>
                                        <p className="font-bold text-gray-900">{payment.student}</p>
                                        <p className="text-sm text-gray-600">Room {payment.room} • {payment.days} days overdue</p>
                                    </div>
                                    <p className="font-black text-orange-600">₹{payment.amount.toLocaleString()}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Maintenance Requests */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20"
                >
                    <div className="p-6 border-b border-gray-100/50">
                        <h3 className="text-xl font-black text-gray-900">Maintenance Requests</h3>
                    </div>
                    <div className="p-6 space-y-3">
                        {maintenanceRequests.map((request, idx) => (
                            <motion.div 
                                key={request.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + idx * 0.1 }}
                                whileHover={{ scale: 1.02, x: 5 }}
                                className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-emerald-50 rounded-xl hover:from-gray-100 hover:to-emerald-100 transition-all cursor-pointer border border-gray-100/50"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                                        <WrenchScrewdriverIcon className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">Room {request.room}</p>
                                        <p className="text-sm text-gray-600">{request.issue}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                                        request.priority === 'Urgent' ? 'bg-red-600 text-white' :
                                        request.priority === 'High' ? 'bg-orange-600 text-white' :
                                        'bg-blue-600 text-white'
                                    }`}>
                                        {request.priority}
                                    </span>
                                    <p className="text-xs text-gray-500 mt-1">{request.time}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </HostelAdminLayout>
    );
}
