import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
    CurrencyDollarIcon,
    MagnifyingGlassIcon,
    PlusIcon,
    CheckCircleIcon,
    ClockIcon,
    XCircleIcon,
    PrinterIcon,
    DocumentTextIcon
} from '@heroicons/react/24/outline';
import HostelAdminLayout from '../../Layouts/HostelAdminLayout';

export default function Billing() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');

    const bills = [
        { id: 1, student: 'Ahmed Khan', room: '101-A', amount: 8000, dueDate: '2024-02-28', status: 'paid', paidDate: '2024-02-25' },
        { id: 2, student: 'Sara Ali', room: '205-B', amount: 10000, dueDate: '2024-02-28', status: 'pending', paidDate: null },
        { id: 3, student: 'Hassan Sheikh', room: '302-C', amount: 9000, dueDate: '2024-02-20', status: 'overdue', paidDate: null },
        { id: 4, student: 'Fatima Malik', room: '104-A', amount: 8500, dueDate: '2024-02-28', status: 'paid', paidDate: '2024-02-26' },
        { id: 5, student: 'Ali Raza', room: '208-B', amount: 10500, dueDate: '2024-02-28', status: 'pending', paidDate: null }
    ];

    const stats = [
        { label: 'Total Revenue', value: '₹3.6L', color: 'green' },
        { label: 'Pending', value: '₹20.5K', color: 'yellow' },
        { label: 'Overdue', value: '₹9K', color: 'red' },
        { label: 'This Month', value: '₹2.4L', color: 'indigo' }
    ];

    return (
        <HostelAdminLayout currentPage="billing">
            <Head title="Billing & Rent Management" />
            
            <div className="space-y-6">
                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20"
                        >
                            <p className="text-gray-600 text-sm font-semibold mb-2">{stat.label}</p>
                            <p className={`text-3xl font-black text-${stat.color}-600`}>{stat.value}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Actions Bar */}
                <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-white/20">
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                        <div className="flex gap-4 w-full md:w-auto">
                            <div className="relative flex-1 md:w-80">
                                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search bills..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                            </div>
                            <select
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            >
                                <option value="all">All Status</option>
                                <option value="paid">Paid</option>
                                <option value="pending">Pending</option>
                                <option value="overdue">Overdue</option>
                            </select>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold flex items-center gap-2 hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg"
                        >
                            <PlusIcon className="h-5 w-5" />
                            Generate Bills
                        </motion.button>
                    </div>
                </div>

                {/* Bills Table */}
                <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50/50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">Student</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">Room</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">Amount</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">Due Date</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">Status</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white/50 divide-y divide-gray-200">
                                {bills.map((bill) => (
                                    <tr key={bill.id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <span className="font-bold text-gray-900">{bill.student}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-gray-700">{bill.room}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="font-bold text-gray-900">₹{bill.amount.toLocaleString()}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-gray-700">{bill.dueDate}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full ${
                                                bill.status === 'paid' ? 'bg-green-100 text-green-800' :
                                                bill.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-red-100 text-red-800'
                                            }`}>
                                                {bill.status === 'paid' && <CheckCircleIcon className="h-4 w-4 mr-1" />}
                                                {bill.status === 'pending' && <ClockIcon className="h-4 w-4 mr-1" />}
                                                {bill.status === 'overdue' && <XCircleIcon className="h-4 w-4 mr-1" />}
                                                {bill.status.charAt(0).toUpperCase() + bill.status.slice(1)}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex gap-2">
                                                <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all" title="View Receipt">
                                                    <DocumentTextIcon className="h-5 w-5" />
                                                </button>
                                                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="Print">
                                                    <PrinterIcon className="h-5 w-5" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </HostelAdminLayout>
    );
}
