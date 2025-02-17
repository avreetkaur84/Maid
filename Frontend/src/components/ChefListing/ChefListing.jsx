import { useState } from "react";
import ChefCard from "./ChefCard";
import { Input } from "../../components/ui/formUI";
import { Select, SelectItem } from "../../components/ui/formUI";

import chef1 from "../../assets/chef/chef7.jpeg"
import chef2 from "../../assets/chef/chef5.jpg"
import chef3 from "../../assets/chef/chef3.webp"
import chef4 from "../../assets/chef/chef4.jpeg"
import chef5 from "../../assets/chef/chef5.jpg"

export const chefs = [
    { id: 1, name: "Chef Rahul", specialization: "North Indian", experience: 8, rating: 5, reviews: 120, image: chef1, availability: true },
    { id: 2, name: "Chef Meera", specialization: "South Indian", experience: 6, rating: 4.7, reviews: 95, image: chef2, availability: true },
    { id: 3, name: "Chef Vikram", specialization: "Punjabi", experience: 10, rating: 5, reviews: 150, image: chef3, availability: true },
    { id: 4, name: "Chef Ananya", specialization: "Bengali", experience: 7, rating: 4.5, reviews: 110, image: chef4, availability: false },
    { id: 5, name: "Chef Ramesh", specialization: "Gujarati", experience: 9, rating: 4.8, reviews: 130, image: chef5, availability: true },
    { id: 6, name: "Chef Kavita", specialization: "Maharashtrian", experience: 5, rating: 4.3, reviews: 85, image: chef1, availability: true },
    { id: 7, name: "Chef Suresh", specialization: "Rajasthani", experience: 12, rating: 5, reviews: 180, image: chef3, availability: false },
    { id: 8, name: "Chef Priya", specialization: "Kashmiri", experience: 6, rating: 4.6, reviews: 90, image: chef4, availability: true },
    { id: 9, name: "Chef Tarun", specialization: "South Indian Tiffins", experience: 4, rating: 4.2, reviews: 70, image: chef2, availability: true },
    { id: 10, name: "Chef Pooja", specialization: "Hyderabadi", experience: 8, rating: 4.7, reviews: 115, image: chef1, availability: true },
];



const ChefListing = () => {
    const [search, setSearch] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [experience, setExperience] = useState("");

    // Filter Logic
    const filteredChefs = chefs.filter(
        (chef) =>
            chef.name.toLowerCase().includes(search.toLowerCase()) &&
            (cuisine ? chef.specialization === cuisine : true) &&
            (experience ? chef.experience >= parseInt(experience) : true)
    );

    return (
        <div className="max-w-7xl mx-auto p-6">
            {/* Filter Section */}
            <div className="flex gap-4 mb-6 py-5">
                <Input placeholder="Search chefs..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full sm:w-1/3" />

                <Select value={cuisine} onChange={(e) => setCuisine(e.target.value)} className="w-full sm:w-1/3">
                    <SelectItem value="">All Cuisines</SelectItem>
                    <SelectItem value="North Indian">North Indian</SelectItem>
                    <SelectItem value="South Indian">South Indian</SelectItem>
                    <SelectItem value="Punjabi">Punjabi</SelectItem>
                    <SelectItem value="Bengali">Bengali</SelectItem>
                    <SelectItem value="Gujarati">Gujarati</SelectItem>
                    <SelectItem value="Maharashtrian">Maharashtrian</SelectItem>
                    <SelectItem value="Rajasthani">Rajasthani</SelectItem>
                    <SelectItem value="Kashmiri">Kashmiri</SelectItem>
                    <SelectItem value="Hyderabadi">Hyderabadi</SelectItem>
                </Select>

                <Select value={experience} onChange={(e) => setExperience(e.target.value)} className="w-full sm:w-1/3">
                    <SelectItem value="">All Experience Levels</SelectItem>
                    <SelectItem value="5">5+ Years</SelectItem>
                    <SelectItem value="10">10+ Years</SelectItem>
                </Select>
            </div>

            {/* Chef Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredChefs.length > 0 ? (
                    filteredChefs.map((chef) => <ChefCard key={chef.id} chef={chef} onViewProfile={(id) => console.log("Viewing profile:", id)} />)
                ) : (
                    <p className="text-gray-600 text-center col-span-full">No chefs found.</p>
                )}
            </div>
        </div>
    );
};

export default ChefListing;
