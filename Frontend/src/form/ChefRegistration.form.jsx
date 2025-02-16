import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Textarea } from "../components/ui/formUI";

const specializations = ["North Indian", "South Indian", "Gujarati", "Punjabi", "Bengali", "Maharashtrian", "Rajasthani", "Kashmiri", "Hyderabadi"];
const paymentOptions = ["UPI", "Cash", "Card", "Net Banking"];
const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const ChefRegistration = () => {
  const { register, handleSubmit } = useForm();
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTimeSlots, setSelectedTimeSlots] = useState({});
  const [profileImage, setProfileImage] = useState(null);
  const [certificates, setCertificates] = useState([]);

  const handleImageUpload = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleCertificatesUpload = (e) => {
    setCertificates(Array.from(e.target.files));
  };

  const handleDaySelection = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleTimeSlotChange = (day, time) => {
    setSelectedTimeSlots((prev) => ({
      ...prev,
      [day]: [...(prev[day] || []), time],
    }));
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("password", data.password);
    formData.append("bio", data.bio);
    formData.append("experience", data.experience);
    formData.append("city", data.city);
    formData.append("profileImage", profileImage);
    formData.append("specialization", JSON.stringify(data.specialization));
    formData.append("serviceableAreas", JSON.stringify(data.serviceableAreas));
    formData.append("paymentMethods", JSON.stringify(data.paymentMethods));
    formData.append("availableSlots", JSON.stringify(selectedTimeSlots));

    certificates.forEach((file, index) => {
      formData.append(`certificates[${index}]`, file);
    });

    console.log("Submitting Form Data:", Object.fromEntries(formData));
    // Make API request to backend here...
  };

  return (
    <div className="w-1/2 mx-auto border border-1 border-gray-400 rounded-2xl shadow shadow-md shadow-gray-400 px-12 my-10">
      <div className="py-7">
        <h2 className="text-2xl font-bold text-center">Chef Registration</h2>
      </div>
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto space-y-4 pb-5">

      <Input placeholder="Full Name" {...register("name", { required: true })} />
      <Input placeholder="Email" type="email" {...register("email", { required: true })} />
      <Input placeholder="Phone Number" {...register("phone", { required: true })} />
      <Input placeholder="Password" type="password" {...register("password", { required: true })} />
      <Input placeholder="City (Where You Live)" {...register("city", { required: true })} />

      <Textarea placeholder="Bio" {...register("bio")} rows={3} />
      <Input placeholder="Experience (years)" type="number" {...register("experience", { required: true })} />
      
      <label className="block text-sm font-medium text-gray-700">Profile Image</label>
      <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg text-center cursor-pointer hover:bg-gray-100">
        <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="profileImageUpload" />
        <label htmlFor="profileImageUpload" className="cursor-pointer">Click to upload profile image</label>
      </div>      

      <label className="block text-sm font-medium text-gray-700">Certifications (PDFs/Images)</label>
      <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg text-center cursor-pointer hover:bg-gray-100">
        <input type="file" accept="image/*,application/pdf" multiple onChange={handleCertificatesUpload} className="hidden" id="certificatesUpload" />
        <label htmlFor="certificatesUpload" className="cursor-pointer">Click to upload certifications</label>
      </div>

      <label className="block text-sm font-medium text-gray-700">Specialization</label>
      <div className="grid grid-cols-3 gap-2">
        {specializations.map((option) => (
          <label key={option} className="flex items-center space-x-2">
            <input type="checkbox" {...register("specialization")} value={option} className="form-checkbox text-rose-500" />
            <span>{option}</span>
          </label>
        ))}
      </div>

      {/* <Input placeholder="Serviceable Areas (comma-separated)" {...register("serviceableAreas")} /> */}

      <label className="block text-sm font-medium text-gray-700">Available Days</label>
      <div className="grid grid-cols-3 gap-2">
        {weekdays.map((day) => (
          <label key={day} className="flex items-center space-x-2">
            <input type="checkbox" checked={selectedDays.includes(day)} onChange={() => handleDaySelection(day)} className="form-checkbox text-rose-500" />
            <span>{day}</span>
          </label>
        ))}
      </div>

      <label className="block text-sm font-medium text-gray-700">Payment Methods</label>
      <div className="grid grid-cols-4 gap-2">
        {paymentOptions.map((option) => (
          <label key={option} className="flex items-center space-x-2">
            <input type="checkbox" {...register("paymentMethods")} value={option} className="form-checkbox text-rose-500" />
            <span>{option}</span>
          </label>
        ))}
      </div>

      <Button type="submit" className="w-full my-5">Register</Button>
    </form>
    </div>
  );
};

export default ChefRegistration;