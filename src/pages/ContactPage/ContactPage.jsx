import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import React, { useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
const ContactPage = () => {

const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    // Add your submit logic here
  };

  const breadcrumb = [
    { label: 'Home', link: '/' },
    { label: 'Contact Us' }
  ];
  return (
    <>
<PageHeader title="Contact Us" breadcrumb={[{ label: 'Home', link: '/' }, { label: 'Contact Us' }]} />
    <div className=" flex items-center justify-center bg-gray-50 py-5">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-white shadow-xl rounded-xl p-8 w-full max-w-3xl"
      >
        <h2 className="text-center text-xl md:text-2xl font-bold text-blue-900 mb-6">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="flex flex-col gap-6 justify-center">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-red-600 text-xl" />
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-gray-500 text-sm">info@yourcompany.com</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-red-600 text-xl" />
              <div>
                <div className="font-semibold">Phone</div>
                <div className="text-gray-500 text-sm">+1 234 567 890</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-600 text-xl" />
              <div>
                <div className="font-semibold">Address</div>
                <div className="text-gray-500 text-sm">123 Main St, New York, NY</div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Subject"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                rows={4}
                placeholder="Your Message"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-2 rounded transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
    </>
  );
}


export default ContactPage