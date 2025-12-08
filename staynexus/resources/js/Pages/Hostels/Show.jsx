import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, StarIcon, FireIcon, ShieldCheckIcon, PhoneIcon, EnvelopeIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function Show() {
    const [selectedImage, setSelectedImage] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);

    const hostel = {
        name: "Sunrise Student Residence",
        address: "F-7 Markaz, Islamabad",
        distance: 0.8,
        rating: 4.8,
        reviews_count: 156,
        price: 8500,
        gender: "Co-ed",
        meals_included: true,
        description: "Modern student accommodation with all amenities. Located in the heart of Islamabad, close to major universities and colleges.",
        images: [
            "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop"
        ],
        amenities: ["WiFi", "AC", "Laundry", "Gym", "Security", "Parking"],
        rooms: [
            { type: "Single", price: 8500, available: 3 },
            { type: "Double", price: 6000, available: 5 }
        ],
        contact: { phone: "+92 51 1234567", email: "sunrise@staynexus.com" },
        rules: ["No smoking", "Visitors till 8 PM", "Maintain cleanliness", "Quiet hours 10 PM - 7 AM"]
    };

    return (
        <>
            <Head title={`${hostel.name} - StayNexus`} />
            
            <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
                <Navbar auth={{}} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-6"
                    >
                        <Link href={route('hostels.search')} className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center gap-2">
                            ← Back to Search
                        </Link>
                    </motion.div>

                    {/* Image Gallery */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8 border border-gray-100"
                    >
                        <div className="grid md:grid-cols-2 gap-2 p-2">
                            <div className="relative h-96">
                                <img 
                                    src={hostel.images[selectedImage]} 
                                    alt={hostel.name}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                                <button
                                    onClick={() => setIsFavorite(!isFavorite)}
                                    className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
                                >
                                    <HeartSolidIcon className={`h-7 w-7 ${isFavorite ? 'text-red-500' : 'text-gray-300'}`} />
                                </button>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                {hostel.images.slice(1, 4).map((img, idx) => (
                                    <img 
                                        key={idx}
                                        src={img} 
                                        alt={`View ${idx + 2}`}
                                        onClick={() => setSelectedImage(idx + 1)}
                                        className="w-full h-48 object-cover rounded-xl cursor-pointer hover:opacity-80 transition"
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Header */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h1 className="text-4xl font-black text-gray-900 mb-3">{hostel.name}</h1>
                                        <div className="flex items-center text-gray-600 mb-3">
                                            <MapPinIcon className="h-5 w-5 mr-2" />
                                            <span className="font-medium">{hostel.address}</span>
                                            <span className="ml-4 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold">
                                                {hostel.distance} km away
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-4xl font-black text-emerald-600">₹{hostel.price.toLocaleString()}</div>
                                        <div className="text-gray-600 font-medium">per month</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="flex items-center bg-yellow-50 px-4 py-2 rounded-lg">
                                        <StarIcon className="h-6 w-6 text-yellow-400 fill-current mr-2" />
                                        <span className="font-bold text-gray-900 text-lg">{hostel.rating}</span>
                                    </div>
                                    <span className="text-gray-600 font-medium">({hostel.reviews_count} reviews)</span>
                                    <span className="px-4 py-2 bg-teal-100 text-teal-800 rounded-lg font-bold">{hostel.gender}</span>
                                    {hostel.meals_included && (
                                        <span className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-lg font-bold flex items-center gap-2">
                                            <FireIcon className="h-5 w-5" />
                                            Meals Included
                                        </span>
                                    )}
                                </div>
                            </motion.div>

                            {/* Description */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
                            >
                                <h2 className="text-2xl font-black text-gray-900 mb-4">About This Hostel</h2>
                                <p className="text-gray-600 leading-relaxed">{hostel.description}</p>
                            </motion.div>

                            {/* Amenities */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
                            >
                                <h2 className="text-2xl font-black text-gray-900 mb-6">Amenities</h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {hostel.amenities.map((amenity, idx) => (
                                        <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                            <CheckCircleIcon className="h-6 w-6 text-emerald-600" />
                                            <span className="font-medium text-gray-900">{amenity}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Room Types */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
                            >
                                <h2 className="text-2xl font-black text-gray-900 mb-6">Room Types & Pricing</h2>
                                <div className="space-y-4">
                                    {hostel.rooms.map((room, idx) => (
                                        <div key={idx} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                            <div>
                                                <h3 className="font-bold text-gray-900">{room.type} Room</h3>
                                                <p className="text-gray-600">{room.available} rooms available</p>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-2xl font-black text-emerald-600">₹{room.price.toLocaleString()}</div>
                                                <div className="text-gray-600">per month</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Rules */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
                            >
                                <h2 className="text-2xl font-black text-gray-900 mb-6">Hostel Rules</h2>
                                <div className="space-y-3">
                                    {hostel.rules.map((rule, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <ShieldCheckIcon className="h-5 w-5 text-emerald-600" />
                                            <span className="text-gray-700">{rule}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Contact Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 sticky top-8"
                            >
                                <h3 className="text-2xl font-black text-gray-900 mb-6">Contact Hostel</h3>
                                
                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center gap-3">
                                        <PhoneIcon className="h-6 w-6 text-emerald-600" />
                                        <span className="font-medium text-gray-900">{hostel.contact.phone}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <EnvelopeIcon className="h-6 w-6 text-emerald-600" />
                                        <span className="font-medium text-gray-900">{hostel.contact.email}</span>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <Link href={route('hostels.book-now')} className="block w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition text-center">
                                        Book Now
                                    </Link>
                                    <Link href={route('hostels.schedule-visit')} className="block w-full border-2 border-emerald-600 text-emerald-600 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition text-center">
                                        Schedule Visit
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}

