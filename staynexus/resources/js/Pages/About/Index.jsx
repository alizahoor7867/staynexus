import { Link, Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { UserGroupIcon, ShieldCheckIcon, HeartIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function About({ auth }) {
    return (
        <>
            <Head title="About Us - StayNexus" />
            
            <div className="min-h-screen bg-white">
                <Navbar auth={auth} />

                {/* Hero */}
                <div className="pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl font-black text-gray-900 mb-6"
                        >
                            About <span className="text-emerald-600">StayNexus</span>
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-600 max-w-3xl mx-auto"
                        >
                            We're on a mission to make student accommodation search simple, safe, and stress-free.
                        </motion.p>
                    </div>
                </div>

                {/* Mission */}
                <div className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl font-black text-gray-900 mb-6">Our Mission</h2>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    StayNexus was founded with a simple goal: to help students find safe, affordable, and comfortable accommodation near their campuses. We understand the challenges students face when searching for hostels, and we're here to make that process seamless.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Our platform connects students with verified hostels, providing transparent information, authentic reviews, and instant booking capabilities. We believe every student deserves a home away from home.
                                </p>
                            </div>
                            <div className="relative">
                                <img 
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
                                    alt="Students" 
                                    className="rounded-2xl shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-black text-gray-900 mb-16 text-center">Our Values</h2>
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { icon: ShieldCheckIcon, title: 'Trust', desc: 'Every hostel is verified and meets our quality standards' },
                                { icon: HeartIcon, title: 'Care', desc: 'We genuinely care about student welfare and safety' },
                                { icon: CheckCircleIcon, title: 'Quality', desc: 'Only the best hostels make it to our platform' },
                                { icon: UserGroupIcon, title: 'Community', desc: 'Building a supportive student community' }
                            ].map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-2xl p-8 text-center shadow-lg"
                                >
                                    <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                                        <value.icon className="h-8 w-8 text-emerald-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                    <p className="text-gray-600">{value.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-4 gap-8 text-center">
                            {[
                                { number: '500+', label: 'Verified Hostels' },
                                { number: '10,000+', label: 'Happy Students' },
                                { number: '50+', label: 'Cities' },
                                { number: '4.8/5', label: 'Average Rating' }
                            ].map((stat, index) => (
                                <div key={index}>
                                    <div className="text-5xl font-black text-emerald-600 mb-2">{stat.number}</div>
                                    <div className="text-gray-600 font-semibold">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-black text-white mb-6">Join Thousands of Students</h2>
                        <p className="text-xl text-white/90 mb-8">Start your hostel search journey with StayNexus today</p>
                        <Link href={route('register')} className="inline-block px-10 py-4 bg-white text-emerald-600 rounded-xl hover:shadow-2xl transition font-black text-lg">
                            Get Started Free
                        </Link>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}
