import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("⚠️ Please fill all fields before submitting!");
      return;
    }

    console.log("Form Submitted ✅", formData);
    alert("🎉 Thank you for your feedback!");
    setFormData({ name: "", email: "", message: "" });
  };

  // Handle clear
  const handleClear = () => {
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex justify-center items-center  px-3 m-35">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
        {/* Heading */}
        <h1 className="text-xl font-bold text-gray-800 text-center mb-1">
          💬 Contact Us
        </h1>
        <p className="text-sm text-gray-500 text-center mb-5">
          Give your <span className="text-blue-600 font-medium">feedback</span> &{" "}
          <span className="text-purple-600 font-medium">suggestions</span>
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition"
              placeholder="Enter your email"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 text-sm h-20 resize-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none transition"
              placeholder="Type your message..."
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-between pt-2">
            <button
              type="button"
              onClick={handleClear}
              className="px-4 py-1.5 border text-sm rounded-lg bg-gray-100 text-gray-700 cursor-pointer hover:bg-gray-200 transition"
            >
              Clear
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 text-sm rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow cursor-pointer hover:opacity-90 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
