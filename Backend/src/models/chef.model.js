import mongoose from "mongoose";

const chefSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Hashed password
  profileImage: { type: String, default: "" },
  bio: { type: String, default: "" },

  specialization: [{ type: String, required: true }], // Example: ["North Indian", "Gujarati"]
  experience: { type: Number, required: true },
  certifications: [{ type: String }], // Culinary certificates

  availability: { type: Boolean, default: true },
  availableSlots: [
    {
      date: { type: Date, required: true },
      timeSlots: [{ type: String, required: true }], // Example: ["10:00 AM - 12:00 PM"]
    },
  ],

  rating: { type: Number, default: 0 },
  reviews: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      comment: { type: String },
      rating: { type: Number, min: 1, max: 5 },
      date: { type: Date, default: Date.now },
    },
  ],

  city: { type: String, required: true },
  serviceableAreas: [{ type: String, required: true }], // Areas chef can work in

  // basePrice: { type: Number, required: true }, // ₹ Minimum charge per booking
  // pricingPerPerson: { type: Number, required: true }, // ₹ Per person charge
  paymentMethods: [{ type: String, enum: ["UPI", "Cash", "Card", "Net Banking"] }],

  isVerified: { type: Boolean, default: false },
  // status: { type: String, enum: ["Active", "Pending", "Suspended"], default: "Pending" },
}, { timestamps: true });

const Chef = mongoose.model("Chef", chefSchema);
export default Chef;