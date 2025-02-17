import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "../components/ui/formUI";

const CustomerRegistration = () => {
  const { register, handleSubmit } = useForm();
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("password", data.password);
    formData.append("streetAddress", data.streetAddress);
    formData.append("city", data.city);
    formData.append("state", data.state);
    formData.append("zip", data.zip);
    formData.append("profileImage", profileImage);
    formData.append("agreeTerms", data.agreeTerms);
    formData.append("agreeNotifications", data.agreeNotifications);

    console.log("Submitting Form Data:", Object.fromEntries(formData));
    // Make API request to backend here...
  };

  return (
    <div className="w-1/2 mx-auto border border-1 border-gray-400 rounded-2xl shadow shadow-md shadow-gray-400 px-12 my-10">
      <div className="py-7">
        <h2 className="text-2xl font-bold text-center">Customer Registration</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto space-y-4 pb-5">
        <Input placeholder="Full Name" {...register("name", { required: true })} />
        <Input placeholder="Email" type="email" {...register("email", { required: true })} />
        <Input placeholder="Phone Number" {...register("phone", { required: true })} />
        <Input placeholder="Password" type="password" {...register("password", { required: true })} />
        <Input placeholder="Street Address" {...register("streetAddress", { required: true })} />
        <Input placeholder="City" {...register("city", { required: true })} />
        <Input placeholder="State/Province" {...register("state", { required: true })} />
        <Input placeholder="Zip/Postal Code" {...register("zip", { required: true })} />
        
        <label className="block text-sm font-medium text-gray-700">Profile Image</label>
        <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg text-center cursor-pointer hover:bg-gray-100">
          <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="profileImageUpload" />
          <label htmlFor="profileImageUpload" className="cursor-pointer">Click to upload profile image</label>
        </div>

        <label className="flex items-center space-x-2">
          <input type="checkbox" {...register("agreeTerms", { required: true })} className="form-checkbox text-rose-500" />
          <span>I agree to the Terms & Conditions</span>
        </label>

        <label className="flex items-center space-x-2">
          <input type="checkbox" {...register("agreeNotifications")} className="form-checkbox text-rose-500" />
          <span>I agree to receive notifications & offers</span>
        </label>

        <Button type="submit" className="w-full my-5">Register</Button>
      </form>
    </div>
  );
};

export default CustomerRegistration;