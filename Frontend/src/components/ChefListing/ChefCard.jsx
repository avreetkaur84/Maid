import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const ChefCard = ({ chef, onViewProfile }) => {
    return (
        <div className="bg-white shadow-lg rounded-xl p-4 transition-all duration-300 hover:shadow-xl">
            {/* Chef Image */}
            <div className="relative w-full h-48 overflow-hidden rounded-lg">
                <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-full object-cover object-top aspect-[3/4] rounded-lg"
                />

                <span className="absolute top-2 left-2 bg-rose-600 text-white text-xs px-3 py-1 rounded-full">
                    {chef.specialization}
                </span>
            </div>

            {/* Chef Details */}
            <div className="mt-3">
                <h3 className="text-lg font-semibold text-gray-800">{chef.name}</h3>
                <p className="text-gray-600 text-sm">{chef.experience} years experience</p>

                {/* Ratings */}
                <div className="flex items-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className={i < chef.rating ? "text-yellow-500" : "text-gray-300"} />
                    ))}
                    <span className="text-sm text-gray-500 ml-1">({chef.reviews} reviews)</span>
                </div>

                {/* Availability */}
                <p className="text-sm text-green-600 mt-1">{chef.availability ? "Available for booking" : "Currently unavailable"}</p>
            </div>

            {/* Buttons */}
            <div className="mt-4 flex justify-between">
                <button onClick={() => onViewProfile(chef.id)} className="text-rose-600 font-semibold">
                    View Profile
                </button>
                <Link to="/bookChefForm">
                <button className="bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition-all">
                    Book Now
                </button>
                </Link>
            </div>
        </div>
    );
};

export default ChefCard;