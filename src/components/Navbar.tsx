import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center fixed w-full top-0 z-10">
      {/* Logo / School Name */}

      <div className="flex flex-row">
        <img src="/vb.png" alt="School Logo" className="h-8 rounded-full inline-block mr-2" />
        <h1 className="text-xl font-bold">My School</h1>
      </div>

      {/* Menu */}
      <ul className="flex gap-6">
        <li><Link to="/">Home</Link></li>
        
        <li><Link to="/about">About</Link></li>
         <li><Link to="/contactus">Contact Us</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar