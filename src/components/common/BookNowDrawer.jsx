import React, { useState } from "react";
import { useBookDrawer } from "@/store/useBookDrawer";
import CustomSelect from "./CustomSelect";

const services = [
  "Web Development",
  "UI/UX Design",
  "SEO Optimization",
  "Consultation",
];

const states = [
  "Maharashtra",
  "Gujarat",
  "Madhya Pradesh",
  "Karnataka",
  "Delhi",
];

const BookNowDrawer = () => {
  const { isOpen, closeDrawer } = useBookDrawer();

  const [form, setForm] = useState({
    name: "",
    contact: "",
    service: "",
    state: "",
    city: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBook = () => {
    const { name, contact, service, state, city } = form;

    if (!name || !contact || !service || !state || !city) {
      alert("Please fill all fields");
      return;
    }

    console.log("Booking Data:", form);
    closeDrawer();
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeDrawer}
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 z-[998] ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[420px] bg-[#fffaf0] shadow-xl z-[999]
        transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full flex flex-col overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Book Now</h2>
            <button onClick={closeDrawer} className="text-2xl">×</button>
          </div>

          <div className="space-y-4 flex-1">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            {/* Contact */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Contact Number
              </label>
              <input
                name="contact"
                value={form.contact}
                onChange={handleChange}
                placeholder="Enter contact number"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            {/* Service */}
            <CustomSelect
              label="Service"
              name="service"
              value={form.service}
              options={services}
              placeholder="Select service"
              onChange={handleChange}
            />

            {/* State */}
            <CustomSelect
              label="State"
              name="state"
              value={form.state}
              options={states}
              placeholder="Select state"
              onChange={handleChange}
            />

            {/* City */}
            <div>
              <label className="block text-sm font-medium mb-1">
                City
              </label>
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="Enter city"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
          </div>

          <button
            onClick={handleBook}
            className="mt-6 w-full bg-black text-white py-3 rounded-full font-medium hover:bg-black/90"
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default BookNowDrawer;
