"use client";

import { useState } from "react";

export default function Volunteers() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    skills: "",
    reason: "",
  });

  const WHATSAPP_NUMBER = "2348031234567";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const messageTemplate = `*🆕 NEW VOLUNTEER REGISTRATION*
----------------------------------
*👤 Full Name:* ${formData.fullName}
*📧 Email Address:* ${formData.email}
*📞 Phone Number:* ${formData.phone}
*📍 Current Location:* ${formData.location}
*🛠️ Core Skills:* ${formData.skills}
*📝 Motivation:* ${formData.reason}
----------------------------------
_Sent via FLIPE Web Portal_`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageTemplate)}`,
      "_blank",
    );
  };

  return (
    <div className="w-full min-h-screen bg-[#F4FDF9] py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#046A55] mb-4">
            Join Our Volunteer Network
          </h1>
          <div className="h-1 w-20 bg-[#00E63A] mx-auto mb-4 rounded"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Become a core driver of social transformation, national
            reorientation, and empowerment across communities.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#046A55] focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johndoe@example.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#046A55] focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g., +234 803 123 4567"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#046A55] focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  City / State / Country
                </label>
                <input
                  type="text"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g., Ilorin, Kwara State"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#046A55] focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Core Skills / Specialization
              </label>
              <input
                type="text"
                name="skills"
                required
                value={formData.skills}
                onChange={handleChange}
                placeholder="e.g., Web Development, Content Writing, Public Speaking, Teaching"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#046A55] focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Why do you want to join FLIPE?
              </label>
              <textarea
                name="reason"
                required
                rows="4"
                value={formData.reason}
                onChange={handleChange}
                placeholder="Briefly share your passion and what you hope to achieve with us..."
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#046A55] focus:border-transparent outline-none transition resize-none"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#046A55] text-white font-bold py-4 px-6 rounded-lg shadow-md hover:bg-[#00E63A] hover:text-[#046A55] transition-all duration-300"
              >
                Submit & Secure Registration via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
