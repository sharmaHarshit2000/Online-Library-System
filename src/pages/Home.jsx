import { Link } from "react-router-dom";
import { books } from "../utils/mockData";

const categories = [
  { name: "Fiction", path: "/books/fiction" },
  { name: "Non-Fiction", path: "/books/non-fiction" },
  { name: "Sci-Fi", path: "/books/sci-fi" },
  { name: "Mystery", path: "/books/mystery" },
  { name: "Fantasy", path: "/books/fantasy" },
  { name: "History", path: "/books/history" },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 pt-20">

      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 drop-shadow-lg">
          📚 Welcome to the Online Library
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Discover thousands of books from various categories and start your reading journey today! 📖✨
        </p>
        <Link
          to="/books"
          className="bg-blue-600 text-white text-lg px-6 py-3 rounded-full shadow-lg 
                     hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          Browse All Books
        </Link>
      </div>

      {/* Explore Categories */}
      <h2 className="text-3xl font-semibold text-gray-800 mt-12 mb-6 text-center">Explore Categories</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.path}
            className="px-6 py-3 text-lg font-medium rounded-full shadow-md transition-all duration-300
                     bg-gradient-to-r from-blue-500 to-blue-400 text-white hover:from-blue-600 hover:to-blue-500 
                     transform hover:scale-105"
          >
            {category.name}
          </Link>
        ))}
      </div>

      {/* Popular Books Section */}
      <h2 className="text-3xl font-semibold text-gray-800 mt-12 mb-6 text-center">Popular Books</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {books.slice(0, 4).map((book) => (
          <div
            key={book.id}
            className="relative bg-white shadow-xl rounded-lg overflow-hidden p-5 transition-all duration-300 
                     transform hover:scale-105 hover:shadow-2xl flex flex-col items-center"
          >
            {/* Book Cover */}
            <div className="w-full h-52 overflow-hidden rounded-md">
              <img
                src={book.cover_image || "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"}
                alt={book.title}
                className="w-full h-full object-cover rounded-md transition-transform duration-300 hover:scale-110"
              />
            </div>

            {/* Book Info */}
            <div className="text-center mt-4">
              <h3 className="text-xl font-bold text-gray-900">{book.title}</h3>
              <p className="text-gray-600">by {book.author}</p>
            </div>

            {/* View Details Button */}
            <Link
              to={`/book/${book.id}`}
              className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg 
                         hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
