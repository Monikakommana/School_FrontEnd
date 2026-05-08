import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      {/* 🔷 Hero Section */}
      <section className="bg-blue-100 text-center py-16">
        <h1 className="text-4xl font-bold text-blue-700">
          Welcome to Vidyarthi Bhavan School
        </h1>
        <p className="mt-4 text-gray-700 text-lg">
          Empowering Students with Knowledge, Discipline & Values
        </p>

        <Link to="/school-details" className="inline-block mt-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Explore More
          </button>
        </Link>
      </section>

      {/* 🔷 About Section */}
<section className="py-12 px-6 text-center">
  <h2 className="text-2xl font-bold mb-4">About Our School</h2>
  <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
    Vidyarthi Bhavan School is dedicated to delivering quality education with a strong foundation of values and discipline. 
    Our institution focuses on the overall development of students, including academics, sports, and extracurricular activities. 
    We believe in creating a safe and supportive learning environment where every student feels encouraged to grow. 
    Our experienced and passionate teachers guide students to achieve their highest potential. 
    We follow modern teaching methods along with traditional values to ensure balanced education. 
    The school is equipped with well-maintained classrooms, labs, and library facilities. 
    We encourage creativity, innovation, and critical thinking among students. 
    Regular activities and competitions help students build confidence and leadership skills. 
    Our aim is to prepare students to face real-world challenges with knowledge and integrity. 
    We strive to shape responsible citizens and future leaders of tomorrow.
  </p>
</section>

      {/* 🔷 Features Section */}
      <section className="bg-gray-100 py-12 px-6">
  <h2 className="text-2xl font-bold text-center mb-8">
    Our Facilities
  </h2>

  <div className="grid md:grid-cols-3 gap-6">
    
    {/* Library */}
    <div className="bg-white p-6 rounded shadow text-center">
      <div className="text-4xl">📚</div>
      <h3 className="font-bold text-lg mt-2">Library</h3>
      <p className="text-gray-600 mt-2">
        Well-equipped library with thousands of books.
      </p>
    </div>

    {/* Labs */}
    <div className="bg-white p-6 rounded shadow text-center">
      <div className="text-4xl">🧪</div>
      <h3 className="font-bold text-lg mt-2">Labs</h3>
      <p className="text-gray-600 mt-2">
        Advanced science and computer laboratories.
      </p>
    </div>

    {/* Sports */}
    <div className="bg-white p-6 rounded shadow text-center">
      <div className="text-4xl">⚽</div>
      <h3 className="font-bold text-lg mt-2">Sports</h3>
      <p className="text-gray-600 mt-2">
        Indoor and outdoor sports facilities.
      </p>
    </div>

    {/* Dance */}
    <div className="bg-white p-6 rounded shadow text-center">
      <div className="text-4xl">💃</div>
      <h3 className="font-bold text-lg mt-2">Dance</h3>
      <p className="text-gray-600 mt-2">
        Professional dance training and cultural programs.
      </p>
    </div>

    {/* Music */}
    <div className="bg-white p-6 rounded shadow text-center">
      <div className="text-4xl">🎵</div>
      <h3 className="font-bold text-lg mt-2">Music</h3>
      <p className="text-gray-600 mt-2">
        Vocal and instrumental music classes.
      </p>
    </div>

    {/* Events */}
    <div className="bg-white p-6 rounded shadow text-center">
      <div className="text-4xl">🎉</div>
      <h3 className="font-bold text-lg mt-2">Events</h3>
      <p className="text-gray-600 mt-2">
        Annual day, cultural events, and celebrations.
      </p>
    </div>

  </div>
</section>

      {/* 🔷 Call To Action */}
      <section className="text-center py-12">
        <h2 className="text-2xl font-bold">
          Join Our School Today
        </h2>
        <Link to="/apply" className="mt-4 inline-block">
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
            Apply Now
          </button>
        </Link>
      </section>
    </div>
  )
}

export default Home