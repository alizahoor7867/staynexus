import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { 
    BuildingOfficeIcon, 
    UserGroupIcon, 
    ChartBarIcon,
    HomeIcon,
    DocumentTextIcon,
    CreditCardIcon,
    ArrowRightOnRectangleIcon,
    Bars3Icon,
    BellIcon,
    Cog6ToothIcon
} from '@heroicons/react/24/outline';
import { 
    BuildingOfficeIcon as BuildingSolid,
    UserGroupIcon as UsersSolid,
    ChartBarIcon as ChartSolid,
    HomeIcon as HomeSolid,
    DocumentTextIcon as DocumentSolid,
    CreditCardIcon as CreditCardSolid
} from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function SuperAdminLayout({ children, currentPage = 'dashboard' }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navigation = [
        { name: 'Dashboard', href: '/superadmin/dashboard', icon: HomeIcon, solidIcon: HomeSolid, key: 'dashboard' },
        { name: 'Hostels', href: '/superadmin/hostels', icon: BuildingOfficeIcon, solidIcon: BuildingSolid, key: 'hostels' },
        { name: 'Users', href: '/superadmin/users', icon: UserGroupIcon, solidIcon: UsersSolid, key: 'users' },
        { name: 'Invoices', href: '/superadmin/invoices', icon: DocumentTextIcon, solidIcon: DocumentSolid, key: 'invoices' },
        { name: 'Analytics', href: '/superadmin/analytics', icon: ChartBarIcon, solidIcon: ChartSolid, key: 'analytics' },
        { name: 'Subscriptions', href: '/superadmin/subscriptions', icon: CreditCardIcon, solidIcon: CreditCardSolid, key: 'subscriptions' },
        { name: 'Reports', href: '/superadmin/reports', icon: DocumentTextIcon, solidIcon: DocumentSolid, key: 'reports' },
        { name: 'Settings', href: '/superadmin/settings', icon: Cog6ToothIcon, solidIcon: Cog6ToothIcon, key: 'settings' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex">
            {/* Sidebar */}
            <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 lg:z-50">
                <div className="flex flex-col flex-grow bg-white/80 backdrop-blur-xl border-r border-gray-200/50 shadow-lg h-full overflow-y-auto">
                    {/* Logo */}
                    <div className="flex items-center flex-shrink-0 px-4 py-4 border-b border-gray-200/50">
                        <div className="w-9 h-9 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <ChartSolid className="h-5 w-5 text-white" />
                        </div>
                        <h1 className="ml-3 text-lg font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent truncate">StayNexus</h1>
                    </div>
                    
                    {/* Navigation */}
                    <nav className="flex-1 px-3 py-2">
                        {navigation.map((item) => {
                            const isCurrent = item.key === currentPage;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 mb-1 ${
                                        isCurrent
                                            ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md'
                                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                                >
                                    {isCurrent ? (
                                        <item.solidIcon className="mr-3 h-4 w-4 text-white flex-shrink-0" />
                                    ) : (
                                        <item.icon className="mr-3 h-4 w-4 text-gray-500 group-hover:text-gray-700 transition-colors flex-shrink-0" />
                                    )}
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                    
                    {/* User Profile */}
                    <div className="flex-shrink-0 px-3 py-3 border-t border-gray-200/50">
                        <div className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 transition-all cursor-pointer mb-1">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                                <span className="text-white text-sm font-bold">A</span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-semibold text-sm text-gray-900 truncate">Admin User</p>
                                <p className="text-xs text-gray-500 truncate">Super Admin</p>
                            </div>
                        </div>
                        <Link
                            href="/logout"
                            method="post"
                            className="flex items-center px-3 py-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition-all"
                        >
                            <ArrowRightOnRectangleIcon className="mr-3 h-4 w-4 flex-shrink-0" />
                            Sign out
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile sidebar */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-40 lg:hidden">
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
                    <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white/90 backdrop-blur-xl">
                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                            <button
                                type="button"
                                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                onClick={() => setSidebarOpen(false)}
                            >
                                <span className="sr-only">Close sidebar</span>
                                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
                            <div className="flex items-center flex-shrink-0 px-4">
                                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                                    <ChartSolid className="h-5 w-5 text-white" />
                                </div>
                                <h1 className="ml-2 text-lg font-black text-gray-900">StayNexus</h1>
                            </div>
                            <nav className="mt-5 flex-1 px-2 space-y-1">
                                {navigation.map((item) => {
                                    const isCurrent = item.key === currentPage;
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                                                isCurrent
                                                    ? 'bg-emerald-100 text-emerald-900'
                                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                            }`}
                                        >
                                            <item.icon className="mr-4 h-6 w-6" />
                                            {item.name}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>
                    </div>
                </div>
            )}

            {/* Main content */}
            <div className="flex-1 flex flex-col lg:pl-64">
                {/* Header */}
                <div className="bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-6">
                            <div className="flex items-center">
                                <button
                                    type="button"
                                    className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all mr-4"
                                    onClick={() => setSidebarOpen(true)}
                                >
                                    <Bars3Icon className="h-6 w-6" />
                                </button>
                                <div>
                                    <h1 className="text-2xl font-black text-gray-900 capitalize">{currentPage}</h1>
                                    <p className="text-gray-600 font-medium">Manage your platform efficiently</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all"
                                >
                                    <BellIcon className="h-6 w-6" />
                                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all"
                                >
                                    <Cog6ToothIcon className="h-6 w-6" />
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Page content */}
                <div className="flex-1">
                    {children}
                </div>
            </div>
        </div>
    );
}