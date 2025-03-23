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
    <div className="container mx-auto p-6 text-center">
      {/* Welcome Message */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">📚 Welcome to the Online Library</h1>
      <p className="text-lg text-gray-600 mb-8">
        Discover a wide range of books from different categories and start your reading journey today!
      </p>

      {/* Book Categories */}
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Explore Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.path}
            className="block bg-blue-500 text-white font-medium px-4 py-3 rounded-lg shadow-md
                       hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            {category.name}
          </Link>
        ))}
      </div>

      {/* Popular Books Section */}
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Popular Books</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.slice(0, 4).map((book) => (
          <div
            key={book.id}
            className="bg-white shadow-md rounded-lg p-4 transition-all duration-300 transform hover:scale-105"
          >
            <img
              src={book.cover_image}
              alt={book.title}
              className="h-40 w-full object-cover rounded-md mb-3 transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-lg font-bold">{book.title}</h3>
            <p className="text-gray-600">by {book.author}</p>
            <Link
              to={`/book/${book.id}`}
              className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg
                         hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
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
