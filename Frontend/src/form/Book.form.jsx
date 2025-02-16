import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "../components/ui/formUI";
import { Input } from "../components/ui/formUI";
import { Select, SelectItem } from "../components/ui/formUI";
import { Textarea } from "../components/ui/formUI";

export default function BookChefForm() {
  const { register, handleSubmit, control, watch } = useForm();
  const [availableSlots, setAvailableSlots] = useState([]);
  const selectedDate = watch("date");

  useEffect(() => {
    if (selectedDate) {
      // Fetch available slots based on the selected date
      fetch(`/api/getSlots?date=${selectedDate}`)
        .then((res) => res.json())
        .then((data) => setAvailableSlots(data.slots));
    }
  }, [selectedDate]);

  const onSubmit = (data) => {
    console.log("Booking Data:", data);
    // Handle booking submission (API call)
  };

  return (
    <div className="">
        <h2 className="text-3xl text-rose-600 font-bold text-center py-10">Book a Chef</h2>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-1/2 py-10 px-10 mx-auto p-4 border border-rose-400 rounded-lg shadow-lg shadow-rose-400">
      {/* Meal Selection */}
      <div>
        <label className="block text-sm font-medium">Meal Type</label>
        <Select {...register("mealType")}>
          <SelectItem value="morning">Morning</SelectItem>
          <SelectItem value="evening">Evening</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </Select>
      </div>

      {/* Number of People */}
      <div>
        <label className="block text-sm font-medium">Number of People</label>
        <Input type="number" {...register("numPeople", { required: true })} min="1" />
      </div>

      {/* Date Selection */}
      <div>
        <label className="block text-sm font-medium">Select Date</label>
        <Input type="date" {...register("date", { required: true })} />
      </div>

      {/* Time Slot Selection */}
      <div>
        <label className="block text-sm font-medium">Available Time Slots</label>
        <Controller
          name="timeSlot"
          control={control}
          render={({ field }) => (
            <Select {...field}>
              {availableSlots.length ? (
                availableSlots.map((slot) => <SelectItem key={slot} value={slot}>{slot}</SelectItem>)
              ) : (
                <SelectItem disabled>No Slots Available</SelectItem>
              )}
            </Select>
          )}
        />
      </div>

      {/* Estimated Cooking Time */}
      <div>
        <label className="block text-sm font-medium">Estimated Cooking Time (hours)</label>
        <Input type="number" {...register("cookingTime", { required: true })} min="1" step="0.5" />
      </div>

      {/* Special Instructions */}
      <div>
        <label className="block text-sm font-medium">Special Instructions</label>
        <Textarea {...register("instructions")} placeholder="Any preferences or dietary restrictions?" />
      </div>

      {/* Pricing & Payment */}
      <div>
        <label className="block text-sm font-medium">Total Price</label>
        <Input type="text" {...register("price")} readOnly value="$50 (Example)" />
      </div>

      {/* Confirm Booking Button */}
      <div className="py-3">
      <Button type="submit" className="w-full">Confirm Booking</Button>
      </div>
    </form>
    </div>
  );
}
