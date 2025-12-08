import { Link } from '@inertiajs/react';
import { HomeIcon, MagnifyingGlassIcon, CalendarIcon, StarIcon, UserIcon } from '@heroicons/react/24/outline';

export default function StudentLayout({ children, header }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="flex">
                {/* Sidebar */}
                <div className="w-64 bg-blue-900 min-h-screen">
                    <div className="p-6">
                        <h1 className="text-2xl font-bold text-white">StayNexus</h1>
                        <p className="text-blue-300 text-sm">Student Portal</p>
                    </div>
                    
                    <nav className="mt-6">
                        <Link href={route('student.dashboard')} className="flex items-center px-6 py-3 text-blue-200 hover:bg-blue-800 hover:text-white">
                            <HomeIcon className="h-5 w-5 mr-3" />
                            Dashboard
                        </Link>
                        <Link href={route('student.search')} className="flex items-center px-6 py-3 text-blue-200 hover:bg-blue-800 hover:text-white">
                            <MagnifyingGlassIcon className="h-5 w-5 mr-3" />
                            Search Hostels
                        </Link>
                        <Link href={route('student.bookings')} className="flex items-center px-6 py-3 text-blue-200 hover:bg-blue-800 hover:text-white">
                            <CalendarIcon className="h-5 w-5 mr-3" />
                            My Bookings
                        </Link>
                        <Link href={route('student.reviews')} className="flex items-center px-6 py-3 text-blue-200 hover:bg-blue-800 hover:text-white">
                            <StarIcon className="h-5 w-5 mr-3" />
                            My Reviews
                        </Link>
                        <Link href={route('student.profile')} className="flex items-center px-6 py-3 text-blue-200 hover:bg-blue-800 hover:text-white">
                            <UserIcon className="h-5 w-5 mr-3" />
                            Profile
                        </Link>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                    {/* Header */}
                    <header className="bg-white shadow">
                        <div className="px-8 py-6">
                            <h2 className="text-2xl font-semibold text-gray-800">{header}</h2>
                        </div>
                    </header>

                    {/* Page Content */}
                    <main className="p-8">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}
