import React from "react";

const Contactus: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">

      {/* 🔷 Hero Section */}
      <section className="bg-gray-50 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Contact Us
        </h1>
        <p className="mt-4 text-gray-600">
          We would love to hear from you. Get in touch with us!
        </p>
      </section>

      {/* 🔷 Contact Info + Form */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">

        {/* 🔷 Contact Details */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>

          <div className="space-y-4 text-gray-600">
            <p><strong>📍 Address:</strong> Vidyarthi Bhavan School Narasannapeta, Srikakulam ,  India</p>
            <p><strong>📞 Phone:</strong> +91 00000000000</p>
            <p><strong>📧 Email:</strong> info@school.com</p>
            <p><strong>🕒 Timings:</strong> Mon - Sat: 9:00 AM - 5:00 PM</p>
          </div>

          {/* 🔷 Map (iframe) */}
          <div className="mt-6 rounded-xl overflow-hidden shadow">
  <iframe
    title="school-location"
    src="https://www.google.com/maps?q=Vidyarthi+Bhavan+EM+School,+Narasannapeta&output=embed"
    className="w-full h-64 border-0"
    loading="lazy"
  ></iframe>
</div>
        </div>

        {/* 🔷 Contact Form */}
        <div className="bg-gray-50 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Send Message
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </section>

    </div>
  );
};

export default Contactus;