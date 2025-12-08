import { Head, Link } from '@inertiajs/react';
import StudentLayout from '@/Layouts/StudentLayout';
import { MagnifyingGlassIcon, CalendarIcon, StarIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Dashboard({ bookings, recommendations }) {
    return (
        <StudentLayout header="Dashboard">
            <Head title="Student Dashboard" />

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Link href={route('student.search')} className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow p-6 text-white hover:shadow-lg transition">
                    <MagnifyingGlassIcon className="h-10 w-10 mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Search Hostels</h3>
                    <p className="text-blue-100">Find your perfect hostel near campus</p>
                </Link>

                <Link href={route('student.bookings')} className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg shadow p-6 text-white hover:shadow-lg transition">
                    <CalendarIcon className="h-10 w-10 mb-3" />
                    <h3 className="text-xl font-semibold mb-2">My Bookings</h3>
                    <p className="text-green-100">View and manage your bookings</p>
                </Link>

                <Link href={route('student.reviews')} className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg shadow p-6 text-white hover:shadow-lg transition">
                    <StarIcon className="h-10 w-10 mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Write Review</h3>
                    <p className="text-purple-100">Share your hostel experience</p>
                </Link>
            </div>

            {/* Current Booking */}
            {bookings?.current && (
                <div className="bg-white rounded-lg shadow mb-8">
                    <div className="p-6 border-b">
                        <h3 className="text-lg font-semibold">Current Booking</h3>
                    </div>
                    <div className="p-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                                    {bookings.current.hostel_name}
                                </h4>
                                <div className="flex items-center text-gray-600 mb-2">
                                    <MapPinIcon className="h-4 w-4 mr-1" />
                                    <span className="text-sm">{bookings.current.address}</span>
                                </div>
                                <p className="text-gray-600">Room: {bookings.current.room_number}</p>
                                <p className="text-gray-600">Bed: {bookings.current.bed_number}</p>
                            </div>
                            <div className="text-right">
                                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                                    Active
                                </span>
                                <p className="text-2xl font-bold text-blue-600 mt-4">
                                    ₹{bookings.current.price}/month
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Recommended Hostels */}
            <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b">
                    <h3 className="text-lg font-semibold">Recommended Hostels</h3>
                </div>
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {recommendations?.map((hostel) => (
                            <div key={hostel.id} className="border rounded-lg p-4 hover:shadow-md transition">
                                <h4 className="font-semibold text-lg mb-2">{hostel.name}</h4>
                                <div className="flex items-center text-gray-600 mb-2">
                                    <MapPinIcon className="h-4 w-4 mr-1" />
                                    <span className="text-sm">{hostel.address}</span>
                                </div>
                                <div className="flex items-center mb-3">
                                    <StarIcon className="h-5 w-5 text-yellow-400 fill-current" />
                                    <span className="ml-1 font-semibold">{hostel.rating}</span>
                                    <span className="ml-1 text-gray-600 text-sm">
                                        ({hostel.reviews_count} reviews)
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xl font-bold text-blue-600">
                                        ₹{hostel.price}/month
                                    </span>
                                    <Link
                                        href={route('hostels.show', hostel.id)}
                                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        )) || <p className="text-gray-500">No recommendations available</p>}
                    </div>
                </div>
            </div>
        </StudentLayout>
    );
}
