import { Link } from "react-router-dom";
import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi"; // Icons for mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
<nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-700 to-indigo-600 text-white py-4 shadow-lg z-50 mb-16">
<div className="container mx-auto flex justify-between items-center px-6">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-wide flex items-center gap-2 
                     transition-transform duration-300 hover:scale-110 hover:text-yellow-300"
        >
          📚 <span className="hidden sm:inline">Online Library</span>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="text-white text-3xl sm:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiOutlineMenu />}
        </button>

        {/* Navigation Links - Desktop */}
        <div className="hidden sm:flex space-x-6 text-lg font-medium items-center">
          <Link 
            to="/" 
            className="nav-link px-3 py-2 rounded-lg transition-all duration-300 
                       hover:bg-blue-500 hover:text-yellow-300"
          >
            Home
          </Link>
          <Link 
            to="/books" 
            className="nav-link px-3 py-2 rounded-lg transition-all duration-300 
                       hover:bg-blue-500 hover:text-yellow-300"
          >
            Browse Books
          </Link>
          <Link 
            to="/add-book" 
            className="nav-button transition-all duration-300 transform hover:scale-105 
                       bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg shadow-md hover:bg-yellow-500"
          >
            + Add Book
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-indigo-700 text-center py-3 space-y-4">
          <Link 
            to="/" 
            className="block px-3 py-2 transition-all duration-300 hover:bg-blue-500 hover:text-yellow-300"
          >
            Home
          </Link>
          <Link 
            to="/books" 
            className="block px-3 py-2 transition-all duration-300 hover:bg-blue-500 hover:text-yellow-300"
          >
            Browse Books
          </Link>
          <Link 
            to="/add-book" 
            className="block mx-auto w-40 bg-yellow-400 text-gray-900 py-2 rounded-lg 
                       shadow-md hover:bg-yellow-500 transition-transform duration-300 transform hover:scale-105"
          >
            + Add Book
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
