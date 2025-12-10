import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold">ShiVaM</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-900 px-6 py-4 space-y-4 text-lg text-center">
          <a
            href="#home"
            className="block hover:text-blue-400"
            onClick={() => setOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block hover:text-blue-400"
            onClick={() => setOpen(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className="block hover:text-blue-400"
            onClick={() => setOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block hover:text-blue-400"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
