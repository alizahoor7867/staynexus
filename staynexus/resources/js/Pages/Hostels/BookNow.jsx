import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    CalendarDaysIcon, 
    UserIcon, 
    CreditCardIcon, 
    CheckCircleIcon,
    ArrowLeftIcon,
    MapPinIcon,
    StarIcon
} from '@heroicons/react/24/outline';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function BookNow({ hostel }) {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedRoom, setSelectedRoom] = useState(null);
    
    const { data, setData, post, processing, errors } = useForm({
        room_type: '',
        check_in: '',
        duration: '',
        guest_name: '',
        email: '',
        phone: '',
        payment_method: 'card'
    });

    const steps = [
        { id: 1, title: 'Select Room', icon: UserIcon },
        { id: 2, title: 'Details', icon: CalendarDaysIcon },
        { id: 3, title: 'Payment', icon: CreditCardIcon },
        { id: 4, title: 'Confirm', icon: CheckCircleIcon }
    ];

    const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/bookings');
    };

    return (
        <>
            <Head title="Book Now - StayNexus" />
            
            <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
                <Navbar auth={{}} />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
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
                                    <h1 className="text-3xl font-black text-gray-900 mb-2">Book Your Stay</h1>
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

                    {/* Progress Steps */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100"
                    >
                        <div className="flex items-center justify-between">
                            {steps.map((step, index) => (
                                <div key={step.id} className="flex items-center">
                                    <motion.div
                                        className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                                            currentStep >= step.id
                                                ? 'bg-emerald-600 border-emerald-600 text-white'
                                                : 'border-gray-300 text-gray-400'
                                        }`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <step.icon className="h-6 w-6" />
                                    </motion.div>
                                    <div className="ml-3">
                                        <div className={`font-semibold ${currentStep >= step.id ? 'text-emerald-600' : 'text-gray-400'}`}>
                                            {step.title}
                                        </div>
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div className={`w-16 h-0.5 mx-4 ${currentStep > step.id ? 'bg-emerald-600' : 'bg-gray-300'}`} />
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                    >
                        <form onSubmit={handleSubmit}>
                            <AnimatePresence mode="wait">
                                {/* Step 1: Room Selection */}
                                {currentStep === 1 && (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        className="p-8"
                                    >
                                        <h2 className="text-2xl font-black text-gray-900 mb-6">Select Room Type</h2>
                                        <div className="space-y-4">
                                            {[
                                                { type: 'Single', price: 8500, available: 3, features: ['Private bathroom', 'Study desk', 'Wardrobe'] },
                                                { type: 'Double', price: 6000, available: 5, features: ['Shared bathroom', 'Study area', 'Storage space'] }
                                            ].map((room, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    onClick={() => {
                                                        setSelectedRoom(room);
                                                        setData('room_type', room.type);
                                                    }}
                                                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                                                        selectedRoom?.type === room.type
                                                            ? 'border-emerald-600 bg-emerald-50'
                                                            : 'border-gray-200 hover:border-emerald-300'
                                                    }`}
                                                >
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h3 className="text-xl font-bold text-gray-900">{room.type} Room</h3>
                                                            <p className="text-gray-600 mb-3">{room.available} rooms available</p>
                                                            <div className="flex flex-wrap gap-2">
                                                                {room.features.map((feature, i) => (
                                                                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                                                        {feature}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <div className="text-right">
                                                            <div className="text-2xl font-black text-emerald-600">₹{room.price.toLocaleString()}</div>
                                                            <div className="text-gray-600">per month</div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {/* Step 2: Details */}
                                {currentStep === 2 && (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        className="p-8"
                                    >
                                        <h2 className="text-2xl font-black text-gray-900 mb-6">Booking Details</h2>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">Check-in Date</label>
                                                <input
                                                    type="date"
                                                    value={data.check_in}
                                                    onChange={e => setData('check_in', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">Duration (months)</label>
                                                <select
                                                    value={data.duration}
                                                    onChange={e => setData('duration', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                                >
                                                    <option value="">Select duration</option>
                                                    <option value="1">1 month</option>
                                                    <option value="3">3 months</option>
                                                    <option value="6">6 months</option>
                                                    <option value="12">12 months</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                                <input
                                                    type="text"
                                                    value={data.guest_name}
                                                    onChange={e => setData('guest_name', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                                    placeholder="Enter your full name"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                                                <input
                                                    type="email"
                                                    value={data.email}
                                                    onChange={e => setData('email', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                            <div className="md:col-span-2">
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    value={data.phone}
                                                    onChange={e => setData('phone', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                                    placeholder="+92 300 1234567"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Step 3: Payment */}
                                {currentStep === 3 && (
                                    <motion.div
                                        key="step3"
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        className="p-8"
                                    >
                                        <h2 className="text-2xl font-black text-gray-900 mb-6">Payment Method</h2>
                                        <div className="space-y-4">
                                            {[
                                                { id: 'card', name: 'Credit/Debit Card', desc: 'Pay securely with your card' },
                                                { id: 'bank', name: 'Bank Transfer', desc: 'Direct bank transfer' },
                                                { id: 'wallet', name: 'Digital Wallet', desc: 'JazzCash, EasyPaisa, etc.' }
                                            ].map((method) => (
                                                <motion.div
                                                    key={method.id}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    onClick={() => setData('payment_method', method.id)}
                                                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                                        data.payment_method === method.id
                                                            ? 'border-emerald-600 bg-emerald-50'
                                                            : 'border-gray-200 hover:border-emerald-300'
                                                    }`}
                                                >
                                                    <div className="flex items-center">
                                                        <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                                                            data.payment_method === method.id ? 'border-emerald-600 bg-emerald-600' : 'border-gray-300'
                                                        }`} />
                                                        <div>
                                                            <div className="font-semibold text-gray-900">{method.name}</div>
                                                            <div className="text-sm text-gray-600">{method.desc}</div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {/* Step 4: Confirmation */}
                                {currentStep === 4 && (
                                    <motion.div
                                        key="step4"
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        className="p-8"
                                    >
                                        <h2 className="text-2xl font-black text-gray-900 mb-6">Booking Summary</h2>
                                        <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Room Type:</span>
                                                <span className="font-semibold">{selectedRoom?.type} Room</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Duration:</span>
                                                <span className="font-semibold">{data.duration} month(s)</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Monthly Rate:</span>
                                                <span className="font-semibold">₹{selectedRoom?.price.toLocaleString()}</span>
                                            </div>
                                            <div className="border-t pt-4">
                                                <div className="flex justify-between text-lg">
                                                    <span className="font-bold">Total Amount:</span>
                                                    <span className="font-black text-emerald-600">
                                                        ₹{(selectedRoom?.price * parseInt(data.duration || 1)).toLocaleString()}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Navigation Buttons */}
                            <div className="px-8 py-6 bg-gray-50 flex justify-between">
                                {currentStep > 1 && (
                                    <motion.button
                                        type="button"
                                        onClick={prevStep}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 transition"
                                    >
                                        Previous
                                    </motion.button>
                                )}
                                
                                <div className="ml-auto">
                                    {currentStep < 4 ? (
                                        <motion.button
                                            type="button"
                                            onClick={nextStep}
                                            disabled={currentStep === 1 && !selectedRoom}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-8 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            Next Step
                                        </motion.button>
                                    ) : (
                                        <motion.button
                                            type="submit"
                                            disabled={processing}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-8 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition disabled:opacity-50"
                                        >
                                            {processing ? 'Processing...' : 'Confirm Booking'}
                                        </motion.button>
                                    )}
                                </div>
                            </div>
                        </form>
                    </motion.div>
                </div>

                <Footer />
            </div>
        </>
    );
}