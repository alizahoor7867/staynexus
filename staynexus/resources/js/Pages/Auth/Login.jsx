import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Head, Link, useForm } from '@inertiajs/react';
import { EyeIcon, EyeSlashIcon, EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';

export default function Login({ status, canResetPassword }) {
    const [showPassword, setShowPassword] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <>
            <Head title="Login - StayNexus" />
            
            <div className="min-h-screen flex">
                {/* Background Image Side */}
                <div className="hidden lg:flex lg:w-1/2 relative">
                    <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: 'url("https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=1200&fit=crop&crop=center")',
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/80 to-teal-700/80" />
                    </div>
                    <div className="relative z-10 flex flex-col justify-center items-center text-white p-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-center"
                        >
                            <h1 className="text-5xl font-black mb-6">Welcome Back</h1>
                            <p className="text-xl opacity-90 leading-relaxed">
                                Find your perfect student accommodation with StayNexus. 
                                Comfortable, affordable, and convenient living spaces.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Form Side */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-white">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="w-full max-w-md"
                    >
                        <div className="text-center mb-8">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl font-black text-gray-900 mb-2"
                            >
                                Sign In
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-gray-600"
                            >
                                Access your StayNexus account
                            </motion.p>
                        </div>

                        {status && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 text-sm"
                            >
                                {status}
                            </motion.div>
                        )}

                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            onSubmit={submit}
                            className="space-y-6"
                        >
                            {/* Email Field */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                {errors.email && (
                                    <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                                )}
                            </div>

                            {/* Password Field */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                                        placeholder="Enter your password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? (
                                            <EyeSlashIcon className="h-5 w-5" />
                                        ) : (
                                            <EyeIcon className="h-5 w-5" />
                                        )}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="mt-2 text-sm text-red-600">{errors.password}</p>
                                )}
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={data.remember}
                                        onChange={(e) => setData('remember', e.target.checked)}
                                        className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                                    />
                                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                                </label>
                                {canResetPassword && (
                                    <Link
                                        href={route('password.request')}
                                        className="text-sm text-emerald-600 hover:text-emerald-700 font-semibold"
                                    >
                                        Forgot password?
                                    </Link>
                                )}
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={processing}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all disabled:opacity-50 shadow-lg"
                            >
                                {processing ? 'Signing In...' : 'Sign In'}
                            </motion.button>

                            {/* Register Link */}
                            <div className="text-center">
                                <span className="text-gray-600">Don't have an account? </span>
                                <Link
                                    href={route('register')}
                                    className="text-emerald-600 hover:text-emerald-700 font-semibold"
                                >
                                    Sign up
                                </Link>
                            </div>
                        </motion.form>
                    </motion.div>
                </div>
            </div>
        </>
    );
}