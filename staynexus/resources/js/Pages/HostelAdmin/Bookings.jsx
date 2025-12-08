import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { 
    CheckCircleIcon, 
    XCircleIcon, 
    ClockIcon,
    EyeIcon,
    CalendarDaysIcon,
    UserIcon,
    PhoneIcon,
    EnvelopeIcon
} from '@heroicons/react/24/outline';
import HostelAdminLayout from '../../Layouts/HostelAdminLayout';

export default function Bookings({ bookings = [] }) {
    const mockBookings = [
        { 
            id: 1, 
            student: 'Ahmed Khan', 
            email: 'ahmed@email.com', 
            phone: '+92 300 1234567',
            room: '102', 
            checkIn: '2024-02-01', 
            checkOut: '2024-08-01', 
            status: 'Pending',
            amount: 6000,
            duration: '6 months'
        },
        { 
            id: 2, 
            student: 'Sara Ali', 
            email: 'sara@email.com', 
            phone: '+92 301 2345678',
            room: '103', 
            checkIn: '2024-01-15', 
            checkOut: '2024-07-15', 
            status: 'Approved',
            amount: 5000,
            duration: '6 months'
        },
        { 
            id: 3, 
            student: 'Hassan Sheikh', 
            email: 'hassan@email.com', 
            phone: '+92 302 3456789',
            room: '201', 
            checkIn: '2024-02-10', 
            checkOut: '2024-12-10', 
            status: 'Pending',
            amount: 8000,
            duration: '10 months'
        },
        { 
            id: 4, 
            student: 'Fatima Malik', 
            email: 'fatima@email.com', 
            phone: '+92 303 4567890',
            room: '104', 
            checkIn: '2024-01-20', 
            checkOut: '2024-06-20', 
            status: 'Rejected',
            amount: 4500,
            duration: '5 months'
        }
    ];

    const bookingData = bookings.length > 0 ? bookings : mockBookings;

    const getStatusColor = (status) => {
        switch (status) {
            case 'Approved': return 'bg-green-100 text-green-800';
            case 'Pending': return 'bg-yellow-100 text-yellow-800';
            case 'Rejected': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const handleApprove = (bookingId) => {
        console.log('Approve booking:', bookingId);
    };

    const handleReject = (bookingId) => {
        console.log('Reject booking:', bookingId);
    };

    return (
        <HostelAdminLayout header="Booking Management" currentPage="bookings">
            <Head title="Bookings Management" />
            
            <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Total Bookings</p>
                                <p className="text-2xl font-bold text-gray-900">{bookingData.length}</p>
                            </div>
                            <CalendarDaysIcon className="h-8 w-8 text-indigo-600" />
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Pending</p>
                                <p className="text-2xl font-bold text-yellow-600">{bookingData.filter(b => b.status === 'Pending').length}</p>
                            </div>
                            <ClockIcon className="h-8 w-8 text-yellow-600" />
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Approved</p>
                                <p className="text-2xl font-bold text-green-600">{bookingData.filter(b => b.status === 'Approved').length}</p>
                            </div>
                            <CheckCircleIcon className="h-8 w-8 text-green-600" />
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Rejected</p>
                                <p className="text-2xl font-bold text-red-600">{bookingData.filter(b => b.status === 'Rejected').length}</p>
                            </div>
                            <XCircleIcon className="h-8 w-8 text-red-600" />
                        </div>
                    </div>
                </div>

                {/* Bookings List */}
                <div className="bg-white rounded-lg shadow">
                    <div className="p-6 border-b">
                        <h3 className="text-lg font-semibold">All Bookings</h3>
                    </div>
                    <div className="p-6">
                        <div className="space-y-4">
                            {bookingData.map((booking, index) => (
                                <motion.div
                                    key={booking.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-4 mb-3">
                                                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                                                    <UserIcon className="h-6 w-6 text-indigo-600" />
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-semibold">{booking.student}</h4>
                                                    <div className="flex items-center gap-4 text-sm text-gray-600">
                                                        <div className="flex items-center gap-1">
                                                            <EnvelopeIcon className="h-4 w-4" />
                                                            {booking.email}
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <PhoneIcon className="h-4 w-4" />
                                                            {booking.phone}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                                <div>
                                                    <span className="text-gray-600">Room:</span>
                                                    <p className="font-semibold">{booking.room}</p>
                                                </div>
                                                <div>
                                                    <span className="text-gray-600">Check-in:</span>
                                                    <p className="font-semibold">{booking.checkIn}</p>
                                                </div>
                                                <div>
                                                    <span className="text-gray-600">Duration:</span>
                                                    <p className="font-semibold">{booking.duration}</p>
                                                </div>
                                                <div>
                                                    <span className="text-gray-600">Amount:</span>
                                                    <p className="font-semibold">₹{booking.amount}/month</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row items-center gap-3">
                                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(booking.status)}`}>
                                                {booking.status}
                                            </span>
                                            
                                            <div className="flex gap-2">
                                                <button className="bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition-colors flex items-center gap-1">
                                                    <EyeIcon className="h-4 w-4" />
                                                    View
                                                </button>
                                                
                                                {booking.status === 'Pending' && (
                                                    <>
                                                        <button 
                                                            onClick={() => handleApprove(booking.id)}
                                                            className="bg-green-600 text-white px-3 py-2 rounded text-sm hover:bg-green-700 transition-colors flex items-center gap-1"
                                                        >
                                                            <CheckCircleIcon className="h-4 w-4" />
                                                            Approve
                                                        </button>
                                                        <button 
                                                            onClick={() => handleReject(booking.id)}
                                                            className="bg-red-600 text-white px-3 py-2 rounded text-sm hover:bg-red-700 transition-colors flex items-center gap-1"
                                                        >
                                                            <XCircleIcon className="h-4 w-4" />
                                                            Reject
                                                        </button>
                                                    </>
                                                )}
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