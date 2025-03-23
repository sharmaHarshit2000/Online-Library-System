import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-wide flex items-center gap-2
                     transition-transform duration-300 hover:scale-105"
        >
          📚 <span className="hidden sm:inline">Online Library</span>
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6 text-lg font-medium flex items-center">
          <Link
            to="/"
            className="hover:text-gray-200 transition-all duration-300 hover:scale-105"
          >
            Home
          </Link>
          <Link
            to="/books"
            className="hover:text-gray-200 transition-all duration-300 hover:scale-105"
          >
            Browse Books
          </Link>

          {/* Add Book Button */}
          <Link
            to="/add-book"
            className="bg-white text-blue-600 px-5 py-2 rounded-lg font-semibold
                       shadow-md transition-all duration-300 hover:bg-gray-200 hover:scale-105"
          >
            + Add Book
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
