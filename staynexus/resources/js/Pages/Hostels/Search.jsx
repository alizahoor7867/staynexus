import { Head, Link, router } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, MapPinIcon, StarIcon, AdjustmentsHorizontalIcon, HeartIcon, FireIcon, MapIcon, ListBulletIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import Navbar from '@/Components/Navbar';
import HostelMap from '@/Components/HostelMap';

export default function Search({ hostels = [], filters = {}, location = '' }) {
    const [searchTerm, setSearchTerm] = useState(location || filters.search || '');
    const [priceRange, setPriceRange] = useState(filters.price || '');
    const [gender, setGender] = useState(filters.gender || '');
    const [favorites, setFavorites] = useState([]);
    const [filteredHostels, setFilteredHostels] = useState([]);
    const [viewMode, setViewMode] = useState('list');

    const toggleFavorite = (id) => {
        setFavorites(prev => 
            prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
        );
    };

    // Sample data for Islamabad hostels
    const sampleHostels = [
        {
            id: 1,
            name: "Sunrise Student Residence",
            address: "F-7 Markaz, Islamabad",
            distance: 0.8,
            rating: 4.8,
            reviews_count: 156,
            price: 8500,
            gender: "Co-ed",
            meals_included: true,
            image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=300&fit=crop",
            amenities: ["WiFi", "AC", "Laundry", "Gym"],
            lat: 33.7077,
            lng: 73.0470
        },
        {
            id: 2,
            name: "Elite Girls Hostel",
            address: "G-9/4, Near NUST, Islamabad",
            distance: 1.2,
            rating: 4.9,
            reviews_count: 203,
            price: 9500,
            gender: "Female",
            meals_included: true,
            image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop",
            amenities: ["WiFi", "AC", "Security", "Mess"],
            lat: 33.6518,
            lng: 73.0977
        },
        {
            id: 3,
            name: "Campus View Boys PG",
            address: "I-8 Markaz, Islamabad",
            distance: 2.1,
            rating: 4.6,
            reviews_count: 89,
            price: 7000,
            gender: "Male",
            meals_included: false,
            image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
            amenities: ["WiFi", "Parking", "Kitchen"],
            lat: 33.6651,
            lng: 73.0869
        },
        {
            id: 4,
            name: "Modern Living Hostel",
            address: "Blue Area, Near Jinnah Avenue, Islamabad",
            distance: 1.5,
            rating: 4.7,
            reviews_count: 134,
            price: 10500,
            gender: "Co-ed",
            meals_included: true,
            image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop",
            amenities: ["WiFi", "AC", "Gym", "Study Room"],
            lat: 33.7181,
            lng: 73.0776
        }
    ];

    const displayHostels = hostels.length > 0 ? hostels : sampleHostels;

    useEffect(() => {
        let results = displayHostels;
        
        if (searchTerm) {
            results = results.filter(hostel => 
                hostel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                hostel.address.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        
        if (priceRange) {
            const [min, max] = priceRange.split('-').map(p => parseInt(p.replace('+', '')));
            results = results.filter(hostel => {
                if (max) return hostel.price >= min && hostel.price <= max;
                return hostel.price >= min;
            });
        }
        
        if (gender && gender !== 'all') {
            results = results.filter(hostel => 
                hostel.gender.toLowerCase() === gender.toLowerCase()
            );
        }
        
        setFilteredHostels(results);
    }, [searchTerm, priceRange, gender, displayHostels]);

    const handleSearch = (e) => {
        e.preventDefault();
        router.get(route('hostels.search'), { location: searchTerm }, { preserveState: true });
    };

    return (
        <>
            <Head title="Search Hostels - StayNexus" />
            
            <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
                <Navbar auth={{}} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-8">
                    {/* Search Header */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100"
                    >
                        <form onSubmit={handleSearch} className="flex gap-4">
                            <div className="flex-1 flex items-center px-6 bg-gray-50 rounded-lg">
                                <MapPinIcon className="h-6 w-6 text-emerald-500 mr-3" />
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Search by location, hostel name, or college..."
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
                        </form>
                    </motion.div>

                    <div className="grid lg:grid-cols-4 gap-6">
                        {/* Filters Sidebar */}
                        <div className="lg:col-span-1">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-white rounded-2xl shadow-xl p-6 sticky top-32 border border-gray-100"
                            >
                                <div className="flex items-center mb-6">
                                    <AdjustmentsHorizontalIcon className="h-6 w-6 mr-2 text-emerald-600" />
                                    <h3 className="font-bold text-lg text-gray-900">Filters</h3>
                                </div>
                                
                                {/* Price Range */}
                                <div className="mb-6">
                                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                                        Price Range
                                    </label>
                                    <select
                                        value={priceRange}
                                        onChange={(e) => setPriceRange(e.target.value)}
                                        className="w-full border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                                    >
                                        <option value="">All Prices</option>
                                        <option value="0-5000">Under ₹5,000</option>
                                        <option value="5000-10000">₹5,000 - ₹10,000</option>
                                        <option value="10000-15000">₹10,000 - ₹15,000</option>
                                        <option value="15000+">Above ₹15,000</option>
                                    </select>
                                </div>

                                {/* Gender */}
                                <div className="mb-6">
                                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                                        Gender Preference
                                    </label>
                                    <div className="space-y-2">
                                        {['All', 'Male', 'Female', 'Co-ed'].map((option) => (
                                            <label key={option} className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    value={option.toLowerCase()}
                                                    checked={gender === option.toLowerCase() || (option === 'All' && !gender)}
                                                    onChange={(e) => setGender(e.target.value)}
                                                    className="text-emerald-600 focus:ring-emerald-500"
                                                />
                                                <span className="ml-2 text-gray-700">{option}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Amenities */}
                                <div className="mb-6">
                                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                                        Amenities
                                    </label>
                                    <div className="space-y-2">
                                        {['WiFi', 'AC', 'Meals', 'Laundry', 'Gym', 'Parking'].map((amenity) => (
                                            <label key={amenity} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="rounded text-emerald-600 focus:ring-emerald-500"
                                                />
                                                <span className="ml-2 text-gray-700">{amenity}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Distance */}
                                <div className="mb-6">
                                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                                        Distance from Campus
                                    </label>
                                    <select className="w-full border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500">
                                        <option>Any Distance</option>
                                        <option>Within 1 km</option>
                                        <option>Within 2 km</option>
                                        <option>Within 5 km</option>
                                    </select>
                                </div>

                                <motion.button 
                                    whileHover={{ scale: 1.02 }} 
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:shadow-xl transition-all font-bold"
                                >
                                    Apply Filters
                                </motion.button>
                                <button className="w-full mt-2 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all font-semibold">
                                    Clear All
                                </button>
                            </motion.div>
                        </div>

                        {/* Results */}
                        <div className="lg:col-span-3">
                            {/* Results Header */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex justify-between items-center mb-6"
                            >
                                <div>
                                    <h2 className="text-3xl font-black text-gray-900">
                                        {filteredHostels.length} Hostels Found
                                    </h2>
                                    <p className="text-gray-600 font-medium">
                                        {searchTerm ? `Near "${searchTerm}"` : 'Islamabad, Pakistan'}
                                    </p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <div className="flex bg-gray-100 rounded-lg p-1">
                                        <button
                                            onClick={() => setViewMode('list')}
                                            className={`px-4 py-2 rounded-lg font-semibold transition-all ${viewMode === 'list' ? 'bg-white text-emerald-600 shadow' : 'text-gray-600'}`}
                                        >
                                            <ListBulletIcon className="h-5 w-5" />
                                        </button>
                                        <button
                                            onClick={() => setViewMode('map')}
                                            className={`px-4 py-2 rounded-lg font-semibold transition-all ${viewMode === 'map' ? 'bg-white text-emerald-600 shadow' : 'text-gray-600'}`}
                                        >
                                            <MapIcon className="h-5 w-5" />
                                        </button>
                                    </div>
                                    <select className="border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 font-medium">
                                        <option>Sort by: Recommended</option>
                                        <option>Price: Low to High</option>
                                        <option>Price: High to Low</option>
                                        <option>Distance: Nearest</option>
                                        <option>Rating: Highest</option>
                                    </select>
                                </div>
                            </motion.div>

                            {/* Map View */}
                            {viewMode === 'map' && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-6"
                                >
                                    <HostelMap hostels={filteredHostels} center={[33.6844, 73.0479]} />
                                </motion.div>
                            )}

                            {/* Hostel Cards */}
                            <div className="space-y-6">
                                {filteredHostels.length > 0 ? filteredHostels.map((hostel, index) => (
                                    <motion.div 
                                        key={hostel.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ y: -4 }}
                                        className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden border border-gray-100"
                                    >
                                        <div className="flex">
                                            <div className="w-80 h-64 relative">
                                                <img 
                                                    src={hostel.image} 
                                                    alt={hostel.name}
                                                    className="w-full h-full object-cover"
                                                />
                                                <motion.button 
                                                    onClick={() => toggleFavorite(hostel.id)}
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transition"
                                                >
                                                    {favorites.includes(hostel.id) ? (
                                                        <HeartSolidIcon className="h-6 w-6 text-red-500" />
                                                    ) : (
                                                        <HeartIcon className="h-6 w-6 text-gray-600" />
                                                    )}
                                                </motion.button>
                                            </div>
                                            
                                            <div className="flex-1 p-6">
                                                <div className="flex justify-between items-start mb-3">
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                                            {hostel.name}
                                                        </h3>
                                                        <div className="flex items-center text-gray-600 mb-2">
                                                            <MapPinIcon className="h-4 w-4 mr-1" />
                                                            <span className="text-sm">{hostel.address}</span>
                                                            <span className="ml-4 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">
                                                                {hostel.distance} km away
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="text-3xl font-black text-emerald-600">
                                                            ₹{hostel.price.toLocaleString()}
                                                        </div>
                                                        <div className="text-sm text-gray-600">per month</div>
                                                    </div>
                                                </div>

                                                <div className="flex items-center mb-4">
                                                    <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-lg mr-3">
                                                        <StarIcon className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                                                        <span className="font-bold text-gray-900">{hostel.rating}</span>
                                                    </div>
                                                    <span className="text-gray-600 text-sm">
                                                        ({hostel.reviews_count} reviews)
                                                    </span>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    <span className="px-3 py-1 bg-teal-100 text-teal-800 text-xs rounded-full font-bold">
                                                        {hostel.gender}
                                                    </span>
                                                    {hostel.meals_included && (
                                                        <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs rounded-full font-bold flex items-center">
                                                            <FireIcon className="h-3 w-3 mr-1" />
                                                            Meals Included
                                                        </span>
                                                    )}
                                                    {hostel.amenities.map((amenity, idx) => (
                                                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-semibold">
                                                            {amenity}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="flex gap-3">
                                                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                                                        <Link
                                                            href={route('hostels.show', hostel.id)}
                                                            className="block py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:shadow-xl transition-all font-bold text-center"
                                                        >
                                                            View Details
                                                        </Link>
                                                    </motion.div>
                                                    <motion.button 
                                                        whileHover={{ scale: 1.02 }} 
                                                        whileTap={{ scale: 0.98 }}
                                                        className="px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-xl hover:bg-emerald-50 transition-all font-bold"
                                                    >
                                                        Contact
                                                    </motion.button>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )) : (
                                    <motion.div 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="bg-white rounded-2xl shadow-xl p-12 text-center border border-gray-100"
                                    >
                                        <MapPinIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">No Hostels Found</h3>
                                        <p className="text-gray-600">Try adjusting your search or filters</p>
                                    </motion.div>
                                )}
                            </div>

                            {/* Pagination */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-8 flex justify-center"
                            >
                                <div className="flex gap-2">
                                    <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-all font-semibold">
                                        Previous
                                    </motion.button>
                                    <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-bold">1</motion.button>
                                    <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-all font-semibold">2</motion.button>
                                    <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-all font-semibold">3</motion.button>
                                    <motion.button whileHover={{ scale: 1.05 }} className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-all font-semibold">
                                        Next
                                    </motion.button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
