import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import { IoMenu, IoClose } from 'react-icons/io5';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const getLinkClass = ({ isActive }) =>
    "relative text-white pb-2 font-medium " +
    (isActive
      ? "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-white after:w-full after:transition-all after:duration-500"
      : "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-500");

  // Navbar links
  const links = (
    <>
      <li><NavLink to="/" className={getLinkClass} onClick={() => setIsOpen(false)}>Home</NavLink></li>
      <li><NavLink to="/products" className={getLinkClass} onClick={() => setIsOpen(false)}>Products</NavLink></li>
      <li><NavLink to="/projects" className={getLinkClass} onClick={() => setIsOpen(false)}>Projects</NavLink></li>
      <li><NavLink to="/company" className={getLinkClass} onClick={() => setIsOpen(false)}>Company</NavLink></li>
      <li><NavLink to="/contact" className={getLinkClass} onClick={() => setIsOpen(false)}>Contact</NavLink></li>
      <li><NavLink to="/training" className={getLinkClass} onClick={() => setIsOpen(false)}>Training</NavLink></li>
    </>
  );

  return (
    <div className="fixed top-0 w-full z-20 bg-transparent px-3 md:px-6 pt-6 md:pt-10">
      <div className="max-w-[1322px] mx-auto flex justify-between items-center">

        <img src={logo} alt="Logo" className="w-[153px] h-[27px] object-cover" />

        <ul className="hidden lg:flex flex-row gap-10 xl:gap-14 text-[15px] font-medium text-white">
          {links}
        </ul>

        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-gray-800 transition"
          >
            {isOpen ? <IoClose className="w-8 h-8 text-white" /> : <IoMenu className="w-8 h-8 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Dropdown */}
      {isOpen && (
        <ul className="flex flex-col gap-4 bg-amber-950 text-white p-5 mt-3 text-[15px] font-medium rounded-lg shadow-lg lg:hidden">
          {links}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
