import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { 
    PlusIcon,
    PencilIcon,
    TrashIcon,
    EyeIcon,
    UserIcon,
    PhoneIcon,
    EnvelopeIcon,
    CalendarDaysIcon,
    ClockIcon
} from '@heroicons/react/24/outline';
import HostelAdminLayout from '../../Layouts/HostelAdminLayout';

export default function Staff({ staff = [] }) {
    const mockStaff = [
        {
            id: 1,
            name: 'Muhammad Ali',
            role: 'Manager',
            email: 'ali.manager@hostel.com',
            phone: '+92 300 1111111',
            joinDate: '2023-01-15',
            salary: 45000,
            status: 'Active',
            shift: 'Day',
            department: 'Administration'
        },
        {
            id: 2,
            name: 'Ayesha Khan',
            role: 'Receptionist',
            email: 'ayesha@hostel.com',
            phone: '+92 301 2222222',
            joinDate: '2023-03-20',
            salary: 25000,
            status: 'Active',
            shift: 'Day',
            department: 'Front Desk'
        },
        {
            id: 3,
            name: 'Hassan Ahmed',
            role: 'Security Guard',
            email: 'hassan@hostel.com',
            phone: '+92 302 3333333',
            joinDate: '2023-02-10',
            salary: 30000,
            status: 'Active',
            shift: 'Night',
            department: 'Security'
        },
        {
            id: 4,
            name: 'Fatima Malik',
            role: 'Cleaner',
            email: 'fatima@hostel.com',
            phone: '+92 303 4444444',
            joinDate: '2023-04-05',
            salary: 20000,
            status: 'Active',
            shift: 'Day',
            department: 'Housekeeping'
        },
        {
            id: 5,
            name: 'Omar Sheikh',
            role: 'Maintenance',
            email: 'omar@hostel.com',
            phone: '+92 304 5555555',
            joinDate: '2023-05-12',
            salary: 28000,
            status: 'On Leave',
            shift: 'Day',
            department: 'Maintenance'
        }
    ];

    const staffData = staff.length > 0 ? staff : mockStaff;

    const getStatusColor = (status) => {
        switch (status) {
            case 'Active': return 'bg-green-100 text-green-800';
            case 'On Leave': return 'bg-yellow-100 text-yellow-800';
            case 'Inactive': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getShiftColor = (shift) => {
        switch (shift) {
            case 'Day': return 'bg-blue-100 text-blue-800';
            case 'Night': return 'bg-purple-100 text-purple-800';
            case 'Evening': return 'bg-orange-100 text-orange-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <HostelAdminLayout header="Staff Management" currentPage="staff">
            <Head title="Staff Management" />
            
            <div className="space-y-6">
                {/* Header Actions */}
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">Staff Overview</h3>
                        <p className="text-gray-600">Manage your hostel staff and their information</p>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-indigo-700 transition-colors"
                    >
                        <PlusIcon className="h-5 w-5" />
                        Add Staff Member
                    </motion.button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Total Staff</p>
                                <p className="text-2xl font-bold text-gray-900">{staffData.length}</p>
                            </div>
                            <UserIcon className="h-8 w-8 text-indigo-600" />
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Active</p>
                                <p className="text-2xl font-bold text-green-600">{staffData.filter(s => s.status === 'Active').length}</p>
                            </div>
                            <ClockIcon className="h-8 w-8 text-green-600" />
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">On Leave</p>
                                <p className="text-2xl font-bold text-yellow-600">{staffData.filter(s => s.status === 'On Leave').length}</p>
                            </div>
                            <CalendarDaysIcon className="h-8 w-8 text-yellow-600" />
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Total Salary</p>
                                <p className="text-2xl font-bold text-purple-600">₹{staffData.reduce((sum, s) => sum + s.salary, 0).toLocaleString()}</p>
                            </div>
                            <EnvelopeIcon className="h-8 w-8 text-purple-600" />
                        </div>
                    </div>
                </div>

                {/* Staff List */}
                <div className="bg-white rounded-lg shadow">
                    <div className="p-6 border-b">
                        <h3 className="text-lg font-semibold">All Staff Members</h3>
                    </div>
                    <div className="p-6">
                        <div className="space-y-4">
                            {staffData.map((member, index) => (
                                <motion.div
                                    key={member.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-4 mb-3">
                                                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                                                    <span className="text-lg font-bold text-indigo-600">
                                                        {member.name.charAt(0)}
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-semibold">{member.name}</h4>
                                                    <p className="text-indigo-600 font-medium">{member.role}</p>
                                                </div>
                                            </div>
                                            
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                                                <div className="flex items-center gap-2">
                                                    <EnvelopeIcon className="h-4 w-4 text-gray-400" />
                                                    <span className="text-gray-600">{member.email}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <PhoneIcon className="h-4 w-4 text-gray-400" />
                                                    <span className="text-gray-600">{member.phone}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <CalendarDaysIcon className="h-4 w-4 text-gray-400" />
                                                    <span className="text-gray-600">Joined: {member.joinDate}</span>
                                                </div>
                                                <div>
                                                    <span className="text-gray-600">Department: </span>
                                                    <span className="font-semibold">{member.department}</span>
                                                </div>
                                                <div>
                                                    <span className="text-gray-600">Salary: </span>
                                                    <span className="font-semibold">₹{member.salary.toLocaleString()}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getShiftColor(member.shift)}`}>
                                                        {member.shift} Shift
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row items-center gap-3">
                                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(member.status)}`}>
                                                {member.status}
                                            </span>
                                            
                                            <div className="flex gap-2">
                                                <button className="bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition-colors flex items-center gap-1">
                                                    <EyeIcon className="h-4 w-4" />
                                                    View
                                                </button>
                                                <button className="bg-gray-600 text-white px-3 py-2 rounded text-sm hover:bg-gray-700 transition-colors flex items-center gap-1">
                                                    <PencilIcon className="h-4 w-4" />
                                                    Edit
                                                </button>
                                                <button className="bg-red-600 text-white px-3 py-2 rounded text-sm hover:bg-red-700 transition-colors">
                                                    <TrashIcon className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </HostelAdminLayout>
    );
}