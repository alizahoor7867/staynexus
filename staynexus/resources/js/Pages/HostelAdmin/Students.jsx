import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
    UserPlusIcon,
    MagnifyingGlassIcon,
    FunnelIcon,
    UserIcon,
    PhoneIcon,
    EnvelopeIcon,
    HomeIcon,
    CalendarIcon,
    DocumentTextIcon
} from '@heroicons/react/24/outline';
import HostelAdminLayout from '../../Layouts/HostelAdminLayout';

export default function Students() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [showModal, setShowModal] = useState(false);

    const students = [
        { id: 1, name: 'Ahmed Khan', email: 'ahmed@email.com', phone: '0300-1234567', room: '101-A', joinDate: '2024-01-15', status: 'Active', rent: 8000 },
        { id: 2, name: 'Sara Ali', email: 'sara@email.com', phone: '0301-2345678', room: '205-B', joinDate: '2024-01-10', status: 'Active', rent: 10000 },
        { id: 3, name: 'Hassan Sheikh', email: 'hassan@email.com', phone: '0302-3456789', room: '302-C', joinDate: '2024-02-01', status: 'Active', rent: 9000 },
        { id: 4, name: 'Fatima Malik', email: 'fatima@email.com', phone: '0303-4567890', room: '104-A', joinDate: '2023-12-20', status: 'Active', rent: 8500 },
        { id: 5, name: 'Ali Raza', email: 'ali@email.com', phone: '0304-5678901', room: '208-B', joinDate: '2024-01-25', status: 'Pending', rent: 10500 }
    ];

    const stats = [
        { label: 'Total Students', value: '42', color: 'indigo' },
        { label: 'Active', value: '38', color: 'green' },
        { label: 'Pending', value: '4', color: 'yellow' }
    ];

    return (
        <HostelAdminLayout currentPage="students">
            <Head title="Student Management" />
            
            <div className="space-y-6">
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                                    placeholder="Search students..."
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
                                <option value="active">Active</option>
                                <option value="pending">Pending</option>
                            </select>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowModal(true)}
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold flex items-center gap-2 hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg"
                        >
                            <UserPlusIcon className="h-5 w-5" />
                            Add Student
                        </motion.button>
                    </div>
                </div>

                {/* Students Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {students.map((student, index) => (
                        <motion.div
                            key={student.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20 hover:shadow-xl transition-all"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                                        <span className="text-white text-lg font-bold">{student.name.charAt(0)}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-black text-gray-900">{student.name}</h3>
                                        <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                                            student.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                        }`}>
                                            {student.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <HomeIcon className="h-4 w-4" />
                                    <span>Room {student.room}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <EnvelopeIcon className="h-4 w-4" />
                                    <span className="truncate">{student.email}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <PhoneIcon className="h-4 w-4" />
                                    <span>{student.phone}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <CalendarIcon className="h-4 w-4" />
                                    <span>Joined {student.joinDate}</span>
                                </div>
                                <div className="pt-2 border-t border-gray-200">
                                    <p className="font-bold text-indigo-600">₹{student.rent}/month</p>
                                </div>
                            </div>
                            <div className="mt-4 flex gap-2">
                                <button className="flex-1 px-3 py-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-all text-sm font-semibold">
                                    View Details
                                </button>
                                <button className="flex-1 px-3 py-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-all text-sm font-semibold">
                                    Edit
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </HostelAdminLayout>
    );
}
