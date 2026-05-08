import React from "react"
import { Link } from "react-router-dom"

const SchoolDetails: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">More About Vidyarthi Bhavan School</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          Vidyarthi Bhavan School is a welcoming community where learning, values,
          and character development come together. Discover the programs, facilities,
          and opportunities that help every student become confident, creative,
          and prepared for the future.
        </p>
        <Link to="/" className="inline-block mt-8 text-blue-700 font-medium hover:underline">
          ← Back to Home
        </Link>
      </section>

      <section className="grid gap-10 md:grid-cols-2 mb-16">
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">Academic Excellence</h2>
          <p className="text-gray-600 leading-relaxed">
            Our curriculum blends rigorous academics with practical learning. Students
            benefit from small class sizes, well-structured lesson plans, and a focus on
            critical thinking, creativity, and problem solving.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">Experienced Faculty</h2>
          <p className="text-gray-600 leading-relaxed">
            Our teachers are passionate professionals who provide personalized support,
            mentorship, and encouragement. They help each child grow academically,
            emotionally, and socially.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Campus and Facilities</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Library", description: "A rich collection of books and digital resources for all grades." },
            { title: "Science Labs", description: "Modern labs that support hands-on experiments and discovery." },
            { title: "Sports Grounds", description: "Spaces for games, athletics, and physical fitness activities." },
            { title: "ICT Labs", description: "Computer labs with updated technology for digital learning." },
            { title: "Arts & Culture", description: "Programs that nurture music, dance, drama, and creativity." },
            { title: "Safety", description: "A secure campus with CCTV, trained staff, and disciplined routines." }
          ].map((item, index) => (
            <div key={index} className="bg-blue-50 rounded-3xl p-6 shadow-inner">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-600 text-white rounded-3xl p-10">
        <h2 className="text-3xl font-semibold mb-4">Student Life</h2>
        <p className="max-w-3xl leading-relaxed">
          Students enjoy a balanced mix of academics, sports, cultural activities, and
          leadership opportunities. We support clubs, competitions, field trips, and
          values-based events that build confidence, teamwork, and discipline.
        </p>
      </section>
    </div>
  )
}

export default SchoolDetails
