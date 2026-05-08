import React from "react";

const About: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">

      {/* 🔷 Hero Section (LIGHT instead of dark blue) */}
      <section className="bg-gray-50 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          About Our School
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Building Knowledge, Character, and Future Leaders
        </p>
      </section>

      {/* 🔷 About Content */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/vbs.png"
          alt="School"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to Vidyarthi Bhavan School
          </h2>
          <p className="mb-4 text-gray-600">
            Vidyarthi Bhavan School is committed to providing quality education
            that nurtures young minds and builds strong values. Our institution
            focuses on academic excellence, discipline, and holistic
            development.
          </p>
          <p className="text-gray-600">
            With experienced teachers, modern infrastructure, and a supportive
            environment, we ensure that every student reaches their full
            potential and becomes a responsible citizen.
          </p>
        </div>
      </section>

      {/* 🔷 Vision & Mission */}
      <section className="bg-gray-50 py-12 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
    
    {/* 🔷 Vision */}
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-2xl font-semibold text-blue-600 mb-3">
        Our Vision
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Our vision is to create a dynamic and inclusive learning environment 
        where students are inspired to achieve academic excellence and develop 
        strong moral values. We aim to nurture confident, responsible, and 
        independent individuals who are prepared to face global challenges. 
        We strive to instill a love for lifelong learning, critical thinking, 
        and creativity, enabling students to become future leaders and 
        responsible citizens of society.
      </p>
    </div>

    {/* 🔷 Mission */}
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-2xl font-semibold text-blue-600 mb-3">
        Our Mission
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Our mission is to provide high-quality education through innovative 
        teaching methods and a student-centered approach. We focus on building 
        strong academic foundations while promoting discipline, integrity, 
        and respect. We encourage participation in sports, cultural activities, 
        and skill development programs to ensure overall growth. Our goal is to 
        create a safe and supportive environment where every student can explore 
        their talents and reach their full potential.
      </p>
    </div>

  </div>
</section>

      {/* 🔷 Facilities */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Our Facilities
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Smart Classrooms",
            "Library",
            "Science Labs",
            "Sports Ground",
            "Transport",
            "CCTV Security"
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold text-gray-800">
                {item}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* 🔷 Stats (light instead of dark blue) */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 text-center gap-6">
          <div>
            <h3 className="text-3xl font-bold text-blue-600">500+</h3>
            <p className="text-gray-600">Students</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">25+</h3>
            <p className="text-gray-600">Teachers</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">25+</h3>
            <p className="text-gray-600">Awards</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">20+</h3>
            <p className="text-gray-600">Years</p>
          </div>
        </div>
      </section>

      {/* 🔷 Principal Message */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Message from Principal
        </h2>
        <p className="italic text-lg text-gray-600">
          "Our goal is to empower students with knowledge, skills, and values
          that will guide them throughout their lives."
        </p>
        <p className="mt-4 font-semibold text-gray-800">— Principal</p>
      </section>

      {/* 🔷 CTA (use blue ONLY here) */}
      <section className="bg-gray-50 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Join Our School Today
        </h2>
        <p className="mb-6 text-gray-600">
          Admissions are open for the new academic year.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Apply Now
        </button>
      </section>

    </div>
  );
};

export default About;