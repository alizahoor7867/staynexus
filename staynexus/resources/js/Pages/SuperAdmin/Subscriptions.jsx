import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { 
    CreditCardIcon,
    CheckCircleIcon,
    XCircleIcon,
    ClockIcon
} from '@heroicons/react/24/outline';
import SuperAdminLayout from '../../Layouts/SuperAdminLayout';

export default function Subscriptions() {
    const subscriptions = [
        { id: 1, hostel: 'Sunrise Student Residence', plan: 'Premium', amount: '₹5,000', status: 'Active', expires: '2024-12-15' },
        { id: 2, hostel: 'Green Valley Hostel', plan: 'Basic', amount: '₹2,000', status: 'Pending', expires: '2024-11-20' },
        { id: 3, hostel: 'City Center Lodge', plan: 'Premium', amount: '₹5,000', status: 'Active', expires: '2024-10-30' },
        { id: 4, hostel: 'Campus View Hostel', plan: 'Standard', amount: '₹3,500', status: 'Expired', expires: '2024-01-15' }
    ];

    return (
        <SuperAdminLayout currentPage="subscriptions">
            <Head title="Subscriptions - Super Admin" />
            
            <div className="px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    {[
                        { title: 'Total Revenue', value: '₹45,500', color: 'emerald' },
                        { title: 'Active Plans', value: '12', color: 'blue' },
                        { title: 'Pending', value: '3', color: 'yellow' },
                        { title: 'Expired', value: '2', color: 'red' }
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20"
                        >
                            <h3 className="text-sm font-semibold text-gray-600 mb-2">{stat.title}</h3>
                            <p className={`text-3xl font-black text-${stat.color}-600`}>{stat.value}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Subscriptions List */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20"
                >
                    <div className="p-6 border-b border-gray-100/50">
                        <h3 className="text-xl font-black text-gray-900">Subscription Management</h3>
                    </div>
                    <div className="p-6">
                        <div className="space-y-4">
                            {subscriptions.map((sub, index) => (
                                <motion.div
                                    key={sub.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                                >
                                    <div className="flex items-center space-x-4">
                                        <CreditCardIcon className="h-8 w-8 text-gray-600" />
                                        <div>
                                            <h4 className="font-bold text-gray-900">{sub.hostel}</h4>
                                            <p className="text-sm text-gray-600">{sub.plan} Plan • {sub.amount}/month</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="text-right">
                                            <p className="text-sm text-gray-600">Expires: {sub.expires}</p>
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${
                                            sub.status === 'Active' ? 'bg-green-100 text-green-800' :
                                            sub.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-red-100 text-red-800'
                                        }`}>
                                            {sub.status === 'Active' && <CheckCircleIcon className="h-3 w-3" />}
                                            {sub.status === 'Pending' && <ClockIcon className="h-3 w-3" />}
                                            {sub.status === 'Expired' && <XCircleIcon className="h-3 w-3" />}
                                            {sub.status}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </SuperAdminLayout>
    );
}