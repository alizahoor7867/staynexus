import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { 
    StarIcon,
    EyeIcon,
    TrashIcon,
    ChatBubbleLeftRightIcon,
    UserIcon,
    CalendarDaysIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarSolid } from '@heroicons/react/24/solid';
import HostelAdminLayout from '../../Layouts/HostelAdminLayout';

export default function Reviews({ reviews = [] }) {
    const mockReviews = [
        {
            id: 1,
            student: 'Ahmed Khan',
            room: '102',
            rating: 5,
            comment: 'Excellent hostel with great facilities. The staff is very helpful and the rooms are clean and comfortable.',
            date: '2024-01-20',
            replied: false
        },
        {
            id: 2,
            student: 'Sara Ali',
            room: '103',
            rating: 4,
            comment: 'Good hostel overall. The location is convenient and the amenities are decent. Could improve the Wi-Fi speed.',
            date: '2024-01-18',
            replied: true,
            reply: 'Thank you for your feedback! We are working on improving our Wi-Fi infrastructure.'
        },
        {
            id: 3,
            student: 'Hassan Sheikh',
            room: '201',
            rating: 3,
            comment: 'Average experience. The room was okay but the common areas need better maintenance.',
            date: '2024-01-15',
            replied: false
        },
        {
            id: 4,
            student: 'Fatima Malik',
            room: '104',
            rating: 5,
            comment: 'Amazing place to stay! Very clean, safe, and the staff is incredibly friendly. Highly recommended!',
            date: '2024-01-12',
            replied: true,
            reply: 'Thank you so much for your kind words! We appreciate your feedback.'
        },
        {
            id: 5,
            student: 'Ali Raza',
            room: '105',
            rating: 2,
            comment: 'Not satisfied with the service. The room was not clean when I arrived and there were issues with the plumbing.',
            date: '2024-01-10',
            replied: false
        }
    ];

    const reviewData = reviews.length > 0 ? reviews : mockReviews;

    const averageRating = reviewData.reduce((sum, review) => sum + review.rating, 0) / reviewData.length;

    const getRatingDistribution = () => {
        const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
        reviewData.forEach(review => {
            distribution[review.rating]++;
        });
        return distribution;
    };

    const ratingDistribution = getRatingDistribution();

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            index < rating ? (
                <StarSolid key={index} className="h-5 w-5 text-yellow-400" />
            ) : (
                <StarIcon key={index} className="h-5 w-5 text-gray-300" />
            )
        ));
    };

    return (
        <HostelAdminLayout header="Reviews & Feedback" currentPage="reviews">
            <Head title="Reviews Management" />
            
            <div className="space-y-6">
                {/* Rating Overview */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-gray-900 mb-2">
                                {averageRating.toFixed(1)}
                            </div>
                            <div className="flex justify-center mb-2">
                                {renderStars(Math.round(averageRating))}
                            </div>
                            <p className="text-gray-600">Average Rating</p>
                            <p className="text-sm text-gray-500">{reviewData.length} reviews</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-lg font-semibold mb-4">Rating Distribution</h3>
                        <div className="space-y-2">
                            {[5, 4, 3, 2, 1].map(rating => (
                                <div key={rating} className="flex items-center gap-2">
                                    <span className="text-sm w-8">{rating}★</span>
                                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                                        <div 
                                            className="bg-yellow-400 h-2 rounded-full"
                                            style={{ width: `${(ratingDistribution[rating] / reviewData.length) * 100}%` }}
                                        ></div>
                                    </div>
                                    <span className="text-sm text-gray-600 w-8">{ratingDistribution[rating]}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">Total Reviews</span>
                                <span className="text-2xl font-bold">{reviewData.length}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">Replied</span>
                                <span className="text-lg font-semibold text-green-600">
                                    {reviewData.filter(r => r.replied).length}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">Pending Reply</span>
                                <span className="text-lg font-semibold text-orange-600">
                                    {reviewData.filter(r => !r.replied).length}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reviews List */}
                <div className="bg-white rounded-lg shadow">
                    <div className="p-6 border-b">
                        <h3 className="text-lg font-semibold">All Reviews</h3>
                    </div>
                    <div className="p-6">
                        <div className="space-y-6">
                            {reviewData.map((review, index) => (
                                <motion.div
                                    key={review.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                                                <UserIcon className="h-6 w-6 text-indigo-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-lg">{review.student}</h4>
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <span>Room {review.room}</span>
                                                    <span>•</span>
                                                    <CalendarDaysIcon className="h-4 w-4" />
                                                    <span>{review.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {renderStars(review.rating)}
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                                    </div>

                                    {review.replied && review.reply && (
                                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                                            <div className="flex items-center gap-2 mb-2">
                                                <ChatBubbleLeftRightIcon className="h-5 w-5 text-indigo-600" />
                                                <span className="font-semibold text-indigo-600">Your Reply:</span>
                                            </div>
                                            <p className="text-gray-700">{review.reply}</p>
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            {review.replied ? (
                                                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                                                    Replied
                                                </span>
                                            ) : (
                                                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold">
                                                    Pending Reply
                                                </span>
                                            )}
                                        </div>
                                        
                                        <div className="flex gap-2">
                                            <button className="bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition-colors flex items-center gap-1">
                                                <EyeIcon className="h-4 w-4" />
                                                View Details
                                            </button>
                                            {!review.replied && (
                                                <button className="bg-indigo-600 text-white px-3 py-2 rounded text-sm hover:bg-indigo-700 transition-colors flex items-center gap-1">
                                                    <ChatBubbleLeftRightIcon className="h-4 w-4" />
                                                    Reply
                                                </button>
                                            )}
                                            <button className="bg-red-600 text-white px-3 py-2 rounded text-sm hover:bg-red-700 transition-colors">
                                                <TrashIcon className="h-4 w-4" />
                                            </button>
                                        </div>
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