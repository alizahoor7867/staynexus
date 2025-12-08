import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    CalendarDaysIcon, 
    ClockIcon,
    ArrowLeftIcon,
    MapPinIcon,
    StarIcon,
    UserIcon,
    PhoneIcon
} from '@heroicons/react/24/outline';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function ScheduleVisit({ hostel }) {
    const { data, setData, post, processing, errors } = useForm({
        visit_date: '',
        visit_time: '',
        visitor_name: '',
        phone: '',
        email: '',
        message: ''
    });

    const timeSlots = [
        '09:00', '10:00', '11:00', '12:00', 
        '14:00', '15:00', '16:00', '17:00'
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/schedule-visit');
    };

    return (
        <>
            <Head title="Schedule Visit - StayNexus" />
            
            <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
                <Navbar auth={{}} />

                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <Link href="/hostels/1" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold mb-4">
                            <ArrowLeftIcon className="h-5 w-5 mr-2" />
                            Back to Hostel
                        </Link>
                        
                        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="text-3xl font-black text-gray-900 mb-2">Schedule a Visit</h1>
                                    <div className="flex items-center text-gray-600">
                                        <MapPinIcon className="h-5 w-5 mr-2" />
                                        <span>Sunrise Student Residence</span>
                                        <div className="flex items-center ml-4">
                                            <StarIcon className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                                            <span className="font-semibold">4.8</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-black text-emerald-600">₹8,500</div>
                                    <div className="text-gray-600">per month</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                    >
                        <form onSubmit={handleSubmit} className="p-8">
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Date Selection */}
                                <div>
                                    <label className="flex items-center text-lg font-bold text-gray-900 mb-4">
                                        <CalendarDaysIcon className="h-6 w-6 mr-2 text-emerald-600" />
                                        Select Date
                                    </label>
                                    <input
                                        type="date"
                                        value={data.visit_date}
                                        onChange={e => setData('visit_date', e.target.value)}
                                        min={new Date().toISOString().split('T')[0]}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-lg"
                                        required
                                    />
                                </div>

                                {/* Time Selection */}
                                <div>
                                    <label className="flex items-center text-lg font-bold text-gray-900 mb-4">
                                        <ClockIcon className="h-6 w-6 mr-2 text-emerald-600" />
                                        Select Time
                                    </label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {timeSlots.map((time) => (
                                            <motion.button
                                                key={time}
                                                type="button"
                                                onClick={() => setData('visit_time', time)}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className={`p-3 rounded-lg border-2 font-semibold transition-all ${
                                                    data.visit_time === time
                                                        ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                                                        : 'border-gray-200 hover:border-emerald-300 text-gray-700'
                                                }`}
                                            >
                                                {time}
                                            </motion.button>
                                        ))}
                                    </div>
                                </div>

                                {/* Visitor Name */}
                                <div>
                                    <label className="flex items-center text-lg font-bold text-gray-900 mb-4">
                                        <UserIcon className="h-6 w-6 mr-2 text-emerald-600" />
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        value={data.visitor_name}
                                        onChange={e => setData('visitor_name', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-lg"
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="flex items-center text-lg font-bold text-gray-900 mb-4">
                                        <PhoneIcon className="h-6 w-6 mr-2 text-emerald-600" />
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        value={data.phone}
                                        onChange={e => setData('phone', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-lg"
                                        placeholder="+92 300 1234567"
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div className="md:col-span-2">
                                    <label className="block text-lg font-bold text-gray-900 mb-4">Email Address</label>
                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={e => setData('email', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-lg"
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>

                                {/* Message */}
                                <div className="md:col-span-2">
                                    <label className="block text-lg font-bold text-gray-900 mb-4">Additional Message (Optional)</label>
                                    <textarea
                                        value={data.message}
                                        onChange={e => setData('message', e.target.value)}
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-lg resize-none"
                                        placeholder="Any specific requirements or questions..."
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="mt-8 flex justify-center">
                                <motion.button
                                    type="submit"
                                    disabled={processing}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-12 py-4 bg-emerald-600 text-white rounded-xl font-bold text-lg hover:bg-emerald-700 transition disabled:opacity-50 shadow-lg"
                                >
                                    {processing ? 'Scheduling...' : 'Schedule Visit'}
                                </motion.button>
                            </div>
                        </form>

                        {/* Info Section */}
                        <div className="bg-gray-50 p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Visit Information</h3>
                            <div className="space-y-2 text-gray-600">
                                <p>• Visit duration: Approximately 30-45 minutes</p>
                                <p>• You'll be shown available rooms and facilities</p>
                                <p>• Feel free to ask questions about amenities and policies</p>
                                <p>• Bring a valid ID for verification</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <Footer />
            </div>
        </>
    );
}