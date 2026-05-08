import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Settings from "./pages/Settings"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from "./pages/About"
import Contactus from "./pages/Contactus"
import SchoolDetails from "./pages/SchoolDetails"
import Apply from "./pages/Apply"


function App() {
  return (
    <>
      <Navbar/>

      <div className="min-h-screen p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/school-details" element={<SchoolDetails />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </div>

      <Footer />
    </>
  )
}

export default App