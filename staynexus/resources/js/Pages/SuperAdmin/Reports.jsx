import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { 
    DocumentTextIcon,
    ArrowDownTrayIcon,
    CalendarDaysIcon,
    ChartBarIcon
} from '@heroicons/react/24/outline';
import SuperAdminLayout from '../../Layouts/SuperAdminLayout';

export default function Reports() {
    const reports = [
        { id: 1, title: 'Monthly Revenue Report', type: 'Financial', date: '2024-01-20', size: '2.4 MB' },
        { id: 2, title: 'User Activity Report', type: 'Analytics', date: '2024-01-19', size: '1.8 MB' },
        { id: 3, title: 'Hostel Performance Report', type: 'Performance', date: '2024-01-18', size: '3.2 MB' },
        { id: 4, title: 'Booking Statistics Report', type: 'Analytics', date: '2024-01-17', size: '2.1 MB' }
    ];

    return (
        <SuperAdminLayout currentPage="reports">
            <Head title="Reports - Super Admin" />
            
            <div className="px-4 sm:px-6 lg:px-8 py-8">
                {/* Report Types */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {[
                        { title: 'Financial Reports', count: '12', icon: ChartBarIcon, color: 'emerald' },
                        { title: 'Analytics Reports', count: '8', icon: DocumentTextIcon, color: 'blue' },
                        { title: 'Performance Reports', count: '5', icon: CalendarDaysIcon, color: 'purple' }
                    ].map((type, index) => (
                        <motion.div
                            key={type.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">{type.title}</h3>
                                    <p className={`text-2xl font-black text-${type.color}-600`}>{type.count}</p>
                                </div>
                                <type.icon className={`h-12 w-12 text-${type.color}-600`} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Reports List */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20"
                >
                    <div className="p-6 border-b border-gray-100/50">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-black text-gray-900">Generated Reports</h3>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-emerald-700 transition"
                            >
                                <DocumentTextIcon className="h-4 w-4" />
                                Generate Report
                            </motion.button>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="space-y-4">
                            {reports.map((report, index) => (
                                <motion.div
                                    key={report.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition"
                                >
                                    <div className="flex items-center space-x-4">
                                        <DocumentTextIcon className="h-8 w-8 text-gray-600" />
                                        <div>
                                            <h4 className="font-bold text-gray-900">{report.title}</h4>
                                            <p className="text-sm text-gray-600">{report.type} • {report.size}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="text-right">
                                            <p className="text-sm text-gray-600">{report.date}</p>
                                        </div>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition"
                                        >
                                            <ArrowDownTrayIcon className="h-4 w-4" />
                                        </motion.button>
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