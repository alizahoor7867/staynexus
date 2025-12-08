import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { 
    PlusIcon, 
    PencilIcon, 
    TrashIcon,
    EyeIcon,
    UserIcon,
    HomeIcon as BedIcon,
    CheckCircleIcon,
    XCircleIcon
} from '@heroicons/react/24/outline';
import HostelAdminLayout from '../../Layouts/HostelAdminLayout';

export default function Rooms({ rooms = [] }) {
    const mockRooms = [
        { id: 1, number: '101', type: 'Single', beds: 1, occupied: 1, available: 0, status: 'Full', price: 8000 },
        { id: 2, number: '102', type: 'Double', beds: 2, occupied: 1, available: 1, status: 'Available', price: 6000 },
        { id: 3, number: '103', type: 'Triple', beds: 3, occupied: 2, available: 1, status: 'Available', price: 5000 },
        { id: 4, number: '104', type: 'Quad', beds: 4, occupied: 4, available: 0, status: 'Full', price: 4500 },
        { id: 5, number: '201', type: 'Single', beds: 1, occupied: 0, available: 1, status: 'Available', price: 8000 },
        { id: 6, number: '202', type: 'Double', beds: 2, occupied: 0, available: 2, status: 'Available', price: 6000 }
    ];

    const roomData = rooms.length > 0 ? rooms : mockRooms;

    return (
        <HostelAdminLayout header="Rooms & Beds Management" currentPage="rooms">
            <Head title="Rooms Management" />
            
            <div className="space-y-6">
                {/* Header Actions */}
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">Room Overview</h3>
                        <p className="text-gray-600">Manage your hostel rooms and bed allocations</p>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-indigo-700 transition-colors"
                    >
                        <PlusIcon className="h-5 w-5" />
                        Add Room
                    </motion.button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Total Rooms</p>
                                <p className="text-2xl font-bold text-gray-900">{roomData.length}</p>
                            </div>
                            <BedIcon className="h-8 w-8 text-indigo-600" />
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Total Beds</p>
                                <p className="text-2xl font-bold text-gray-900">{roomData.reduce((sum, room) => sum + room.beds, 0)}</p>
                            </div>
                            <UserIcon className="h-8 w-8 text-blue-600" />
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Occupied</p>
                                <p className="text-2xl font-bold text-gray-900">{roomData.reduce((sum, room) => sum + room.occupied, 0)}</p>
                            </div>
                            <CheckCircleIcon className="h-8 w-8 text-green-600" />
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Available</p>
                                <p className="text-2xl font-bold text-gray-900">{roomData.reduce((sum, room) => sum + room.available, 0)}</p>
                            </div>
                            <XCircleIcon className="h-8 w-8 text-orange-600" />
                        </div>
                    </div>
                </div>

                {/* Rooms Grid */}
                <div className="bg-white rounded-lg shadow">
                    <div className="p-6 border-b">
                        <h3 className="text-lg font-semibold">All Rooms</h3>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {roomData.map((room, index) => (
                                <motion.div
                                    key={room.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <h4 className="text-lg font-semibold">Room {room.number}</h4>
                                            <p className="text-gray-600 text-sm">{room.type} Room</p>
                                        </div>
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                            room.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                        }`}>
                                            {room.status}
                                        </span>
                                    </div>
                                    
                                    <div className="space-y-2 mb-4">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Total Beds:</span>
                                            <span className="font-semibold">{room.beds}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Occupied:</span>
                                            <span className="font-semibold text-red-600">{room.occupied}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Available:</span>
                                            <span className="font-semibold text-green-600">{room.available}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Price/Month:</span>
                                            <span className="font-semibold">₹{room.price}</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-1">
                                            <EyeIcon className="h-4 w-4" />
                                            View
                                        </button>
                                        <button className="flex-1 bg-gray-600 text-white py-2 px-3 rounded text-sm hover:bg-gray-700 transition-colors flex items-center justify-center gap-1">
                                            <PencilIcon className="h-4 w-4" />
                                            Edit
                                        </button>
                                        <button className="bg-red-600 text-white py-2 px-3 rounded text-sm hover:bg-red-700 transition-colors">
                                            <TrashIcon className="h-4 w-4" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </HostelAdminLayout>
    );
}