import { Link, Head, router } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { MagnifyingGlassIcon, MapPinIcon, StarIcon, ShieldCheckIcon, CheckCircleIcon, UserGroupIcon, BuildingOfficeIcon, ClockIcon, BoltIcon } from '@heroicons/react/24/outline';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function Home({ auth }) {
    const [location, setLocation] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        router.get(route('hostels.search'), { location });
    };

    return (
        <>
            <Head title="StayNexus - Find Your Perfect Hostel" />
            
            <div className="min-h-screen bg-white">
                <Navbar auth={auth} />

                {/* Hero Section */}
                <div className="relative pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="inline-block mb-6"
                                >
                                    <span className="px-5 py-2.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold border-2 border-emerald-200">
                                        🎓 Trusted by 10,000+ Students
                                    </span>
                                </motion.div>
                                <motion.h1 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-6xl font-black text-gray-900 mb-6 leading-tight"
                                >
                                    Find Your Dream
                                    <span className="block text-emerald-600">
                                        Student Hostel
                                    </span>
                                </motion.h1>
                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-xl text-gray-600 mb-10 leading-relaxed"
                                >
                                    Discover verified hostels near your campus. Safe, affordable, and hassle-free accommodation with instant booking.
                                </motion.p>
                                
                                {/* Search Bar */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="relative"
                                >
                                    <form onSubmit={handleSearch} className="bg-white rounded-xl shadow-2xl p-4 border border-gray-100">
                                        <div className="flex gap-4">
                                            <div className="flex-1 flex items-center px-6 bg-gray-50 rounded-lg">
                                                <MapPinIcon className="h-6 w-6 text-emerald-500 mr-3" />
                                                <input
                                                    type="text"
                                                    value={location}
                                                    onChange={(e) => setLocation(e.target.value)}
                                                    placeholder="Enter your college or location..."
                                                    className="w-full bg-transparent border-0 focus:ring-0 text-gray-900 placeholder-gray-400 font-medium"
                                                />
                                            </div>
                                            <motion.button
                                                type="submit"
                                                whileHover={{ scale: 1.05 }} 
                                                whileTap={{ scale: 0.95 }}
                                                className="px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:shadow-xl transition-all font-bold flex items-center"
                                            >
                                                <MagnifyingGlassIcon className="h-6 w-6 mr-2" />
                                                Search
                                            </motion.button>
                                        </div>
                                    </form>
                                </motion.div>

                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="flex items-center space-x-8 mt-8 text-sm text-gray-600"
                                >
                                    <div className="flex items-center">
                                        <CheckCircleIcon className="h-5 w-5 text-emerald-500 mr-2" />
                                        <span className="font-semibold">Verified Hostels</span>
                                    </div>
                                    <div className="flex items-center">
                                        <BoltIcon className="h-5 w-5 text-amber-500 mr-2" />
                                        <span className="font-semibold">Instant Booking</span>
                                    </div>
                                    <div className="flex items-center">
                                        <ShieldCheckIcon className="h-5 w-5 text-blue-500 mr-2" />
                                        <span className="font-semibold">24/7 Support</span>
                                    </div>
                                </motion.div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                <motion.div 
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="relative z-10"
                                >
                                    <img 
                                        src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=600&fit=crop" 
                                        alt="Modern Hostel Room" 
                                        className="rounded-2xl shadow-2xl border-4 border-white"
                                    />
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-2xl"
                                    >
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
                                                <CheckCircleIcon className="w-7 h-7 text-white" />
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-gray-900">500+</div>
                                                <div className="text-sm text-gray-600">Verified Hostels</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="py-20 bg-white"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { number: '500+', label: 'Verified Hostels', color: 'emerald' },
                                { number: '10K+', label: 'Happy Students', color: 'teal' },
                                { number: '50+', label: 'Cities Covered', color: 'cyan' },
                                { number: '4.8★', label: 'Average Rating', color: 'amber' }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center shadow-lg border border-gray-200"
                                >
                                    <div className={`text-5xl font-black text-${stat.color}-600 mb-3`}>
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-600 font-semibold">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Features Section */}
                <div id="features" className="py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-20"
                        >
                            <h2 className="text-5xl font-black text-gray-900 mb-6">
                                Why Choose <span className="text-emerald-600">StayNexus</span>?
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Everything you need to find and book your perfect student accommodation
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: MapPinIcon, title: 'Location Based Search', desc: 'Find hostels near your college with accurate distance calculation and commute time.', color: 'emerald' },
                                { icon: StarIcon, title: 'Verified Reviews', desc: 'Read authentic reviews from verified students. Make informed decisions.', color: 'amber' },
                                { icon: ShieldCheckIcon, title: 'Secure Booking', desc: 'Safe and secure booking process with instant confirmation and encryption.', color: 'blue' },
                                { icon: BuildingOfficeIcon, title: 'Quality Hostels', desc: 'All hostels are verified and meet our quality standards for cleanliness.', color: 'teal' },
                                { icon: UserGroupIcon, title: 'Community Living', desc: 'Connect with fellow students and build lasting friendships.', color: 'cyan' },
                                { icon: ClockIcon, title: '24/7 Support', desc: 'Round-the-clock customer support. We\'re here to help anytime.', color: 'indigo' }
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -10 }}
                                    className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
                                >
                                    <div className={`w-16 h-16 bg-${feature.color}-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <feature.icon className={`h-8 w-8 text-${feature.color}-600`} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* How It Works */}
                <div id="how-it-works" className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-20"
                        >
                            <h2 className="text-5xl font-black text-gray-900 mb-6">
                                How It <span className="text-emerald-600">Works</span>
                            </h2>
                            <p className="text-xl text-gray-600">Book your hostel in 3 simple steps</p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                { step: '1', title: 'Search & Filter', desc: 'Enter your college location and filter by price, gender, amenities, and distance.' },
                                { step: '2', title: 'Compare & Review', desc: 'Compare hostels, read verified reviews, check photos, and view detailed information.' },
                                { step: '3', title: 'Book Instantly', desc: 'Submit your booking request and get instant confirmation. Move in hassle-free.' }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="text-center"
                                >
                                    <motion.div 
                                        whileHover={{ scale: 1.1, rotate: 360 }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                        className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-8 text-white text-4xl font-black shadow-xl"
                                    >
                                        {item.step}
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Testimonials */}
                <div id="testimonials" className="py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-20"
                        >
                            <h2 className="text-5xl font-black text-gray-900 mb-6">
                                What <span className="text-emerald-600">Students</span> Say
                            </h2>
                            <p className="text-xl text-gray-600">Real experiences from real students</p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { name: 'Priya Sharma', role: 'Engineering Student, Delhi', initial: 'PS', review: 'StayNexus made finding a hostel so easy! I found a great place near my college within minutes. The booking process was smooth and hassle-free.' },
                                { name: 'Rahul Kumar', role: 'MBA Student, Mumbai', initial: 'RK', review: 'The verified reviews helped me make the right choice. My hostel is exactly as described - clean, safe, and close to campus. Highly recommend!' },
                                { name: 'Ananya Mehta', role: 'Medical Student, Bangalore', initial: 'AM', review: 'Best decision ever! The hostel I found through StayNexus has amazing facilities and great roommates. The support team is always helpful.' }
                            ].map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -10 }}
                                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                                >
                                    <div className="flex items-center mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <StarIcon key={i} className="h-5 w-5 text-amber-400 fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 mb-8 leading-relaxed italic">"{testimonial.review}"</p>
                                    <div className="flex items-center">
                                        <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg">
                                            {testimonial.initial}
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900">{testimonial.name}</div>
                                            <div className="text-sm text-gray-600">{testimonial.role}</div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="py-24 bg-gradient-to-r from-emerald-600 to-teal-600"
                >
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-5xl font-black text-white mb-6">
                            Ready to Find Your Perfect Hostel?
                        </h2>
                        <p className="text-xl text-white/90 mb-12">
                            Join thousands of students who found their ideal accommodation through StayNexus
                        </p>
                        <div className="flex justify-center gap-6">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href={route('register')}
                                    className="px-10 py-5 bg-white text-emerald-600 rounded-xl hover:shadow-2xl transition font-black text-lg"
                                >
                                    Get Started Free
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href={route('hostels.search')}
                                    className="px-10 py-5 bg-white/20 backdrop-blur-xl text-white rounded-xl hover:bg-white/30 transition font-black text-lg border-2 border-white/30"
                                >
                                    Browse Hostels
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                <Footer />
            </div>
        </>
    );
}
