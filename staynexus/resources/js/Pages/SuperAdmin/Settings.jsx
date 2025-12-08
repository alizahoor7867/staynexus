import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
    ShieldCheckIcon,
    CheckIcon,
    XMarkIcon
} from '@heroicons/react/24/outline';
import SuperAdminLayout from '../../Layouts/SuperAdminLayout';

export default function Settings() {
    const [permissions, setPermissions] = useState({
        'manage_rooms': true,
        'manage_bookings': true,
        'manage_reviews': true,
        'manage_staff': true,
        'view_analytics': false,
        'manage_payments': true,
        'export_reports': false,
        'manage_settings': true
    });

    const permissionsList = [
        { key: 'manage_rooms', label: 'Manage Rooms & Beds', description: 'Add, edit, and delete room information' },
        { key: 'manage_bookings', label: 'Manage Bookings', description: 'Approve, reject, and manage booking requests' },
        { key: 'manage_reviews', label: 'Manage Reviews', description: 'View and respond to customer reviews' },
        { key: 'manage_staff', label: 'Manage Staff', description: 'Add, edit, and remove staff members' },
        { key: 'view_analytics', label: 'View Analytics', description: 'Access analytics and performance reports' },
        { key: 'manage_payments', label: 'Manage Payments', description: 'Process payments and view financial data' },
        { key: 'export_reports', label: 'Export Reports', description: 'Download and export various reports' },
        { key: 'manage_settings', label: 'Manage Settings', description: 'Update hostel settings and configurations' }
    ];

    const togglePermission = (key) => {
        setPermissions(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const handleSave = () => {
        console.log('Saving permissions:', permissions);
        alert('Permissions updated successfully!');
    };

    return (
        <SuperAdminLayout currentPage="settings">
            <Head title="Settings - Permissions" />
            
            <div className="px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-black text-gray-900 mb-2">Hostel Admin Permissions</h1>
                        <p className="text-gray-600">Manage what hostel administrators can and cannot do in their dashboard</p>
                    </div>

                    {/* Permissions Card */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                                <ShieldCheckIcon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900">Permission Settings</h2>
                                <p className="text-sm text-gray-600">Toggle permissions for hostel administrators</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {permissionsList.map((permission, index) => (
                                <motion.div
                                    key={permission.key}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                                >
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900">{permission.label}</h3>
                                        <p className="text-sm text-gray-600">{permission.description}</p>
                                    </div>
                                    
                                    <button
                                        onClick={() => togglePermission(permission.key)}
                                        className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                                            permissions[permission.key] ? 'bg-emerald-600' : 'bg-gray-300'
                                        }`}
                                    >
                                        <span
                                            className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                                                permissions[permission.key] ? 'translate-x-7' : 'translate-x-1'
                                            }`}
                                        >
                                            {permissions[permission.key] ? (
                                                <CheckIcon className="h-6 w-6 text-emerald-600" />
                                            ) : (
                                                <XMarkIcon className="h-6 w-6 text-gray-400" />
                                            )}
                                        </span>
                                    </button>
                                </motion.div>
                            ))}
                        </div>

                        {/* Save Button */}
                        <div className="mt-8 flex justify-end gap-3">
                            <button
                                onClick={() => setPermissions({
                                    'manage_rooms': true,
                                    'manage_bookings': true,
                                    'manage_reviews': true,
                                    'manage_staff': true,
                                    'view_analytics': false,
                                    'manage_payments': true,
                                    'export_reports': false,
                                    'manage_settings': true
                                })}
                                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                            >
                                Reset to Default
                            </button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleSave}
                                className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg"
                            >
                                Save Permissions
                            </motion.button>
                        </div>
                    </div>

                    {/* Permission Summary */}
                    <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
                        <div className="flex items-start gap-3">
                            <ShieldCheckIcon className="h-5 w-5 text-blue-600 mt-0.5" />
                            <div>
                                <h3 className="font-semibold text-blue-900">Permission Summary</h3>
                                <p className="text-sm text-blue-700 mt-1">
                                    Currently <span className="font-bold">{Object.values(permissions).filter(Boolean).length}</span> out of <span className="font-bold">{permissionsList.length}</span> permissions are enabled for hostel administrators.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SuperAdminLayout>
    );
}
