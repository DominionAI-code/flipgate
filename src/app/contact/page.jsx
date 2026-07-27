"use client";

import { useState } from "react";

export default function Contact() {
  const [contactForm, setContactForm] = useState({ name: "", message: "" });
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const WHATSAPP_NUMBER = "2348031234567";

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const messageTemplate = `*📥 NEW WEBSITE INQUIRY*
----------------------------------
*👤 Sender Name:* ${contactForm.name}
*💬 Message Body:* ${contactForm.message}
----------------------------------
_Sent via FLIPGATE Web Portal_`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageTemplate)}`,
      "_blank",
    );
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const messageTemplate = `*🔔 NEW NEWSLETTER SUBSCRIPTION*
----------------------------------
*📧 Email Address:* ${newsletterEmail}
Please add this address to the FLIPGATE weekly update broadcast lists.
----------------------------------
_Sent via FLIPGATE Web Portal_`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageTemplate)}`,
      "_blank",
    );
  };

  return (
    <div className="w-full min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-[#F4FDF9] p-8 rounded-2xl border border-gray-100">
          <h2 className="text-2xl font-bold text-[#046A55] mb-2">
            Send an Enquiry
          </h2>
          <p className="text-gray-600 mb-6 text-sm">
            Have a question or a partnership proposal? Shoot us a message.
          </p>

          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                value={contactForm.name}
                onChange={(e) =>
                  setContactForm({ ...contactForm, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#046A55]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Message
              </label>
              <textarea
                required
                rows="4"
                value={contactForm.message}
                onChange={(e) =>
                  setContactForm({ ...contactForm, message: e.target.value })
                }
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#046A55] resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#046A55] text-white font-bold py-3 rounded-lg hover:bg-[#00E63A] hover:text-[#046A55] transition"
            >
              Send Message via WhatsApp
            </button>
          </form>
        </div>

        <div className="flex flex-col justify-between space-y-8">
          <div>
            <h2 className="text-3xl font-extrabold text-[#1F2937] mb-4">
              Let's Connect
            </h2>
            <p className="text-gray-600 leading-relaxed">
              FLIPGATE LTD is expanding its horizons to build robust digital
              infrastructures. Get in touch to learn more about our upcoming
              initiatives, structural updates, and strategic systems.
            </p>
          </div>

          <div className="bg-[#046A55] text-white p-8 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold text-[#00E63A] mb-2">
              Subscribe to News & Insights
            </h3>
            <p className="text-white/80 text-sm mb-6">
              Stay informed on national reorientation campaigns and success
              milestones.
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-grow px-4 py-3 text-[#1F2937] bg-white rounded-lg outline-none"
              />
              <button
                type="submit"
                className="bg-[#00E63A] text-[#046A55] font-bold px-6 py-3 rounded-lg hover:bg-white transition whitespace-nowrap"
              >
                Join List
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
