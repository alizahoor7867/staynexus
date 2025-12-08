import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { BuildingOfficeIcon } from '@heroicons/react/24/outline';

export default function Navbar({ auth }) {
    return (
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed w-full bg-white shadow-md z-50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center"
                    >
                        <Link href={route('home')} className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                                <BuildingOfficeIcon className="w-7 h-7 text-white" />
                            </div>
                            <h1 className="text-2xl font-black text-gray-900">
                                Stay<span className="text-emerald-600">Nexus</span>
                            </h1>
                        </Link>
                    </motion.div>
                    <div className="flex items-center space-x-8">
                        <Link href={route('home')} className="text-gray-700 hover:text-emerald-600 font-semibold transition-all">
                            Home
                        </Link>
                        <Link href={route('about')} className="text-gray-700 hover:text-emerald-600 font-semibold transition-all">
                            About
                        </Link>
                        <Link href={route('contact')} className="text-gray-700 hover:text-emerald-600 font-semibold transition-all">
                            Contact
                        </Link>
                        {auth.user ? (
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link href={route('dashboard')} className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:shadow-xl transition-all font-bold">
                                    Dashboard
                                </Link>
                            </motion.div>
                        ) : (
                            <>
                                <Link href={route('login')} className="text-gray-700 hover:text-emerald-600 font-semibold transition-all">
                                    Log in
                                </Link>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link href={route('register')} className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:shadow-xl transition-all font-bold">
                                        Get Started
                                    </Link>
                                </motion.div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
