import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import BookCard from "../components/BookCard";

const categories = ["All", "Fiction", "Non-Fiction", "Sci-Fi", "Mystery", "Fantasy", "History"];

const BrowseBooks = () => {
  const { category } = useParams();
  const books = useSelector((state) => state.books);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  //Filter books by search + category
  const filteredBooks = books.filter(
    (book) =>
      (category ? book.category.toLowerCase() === category.toLowerCase() : true) &&
      (book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6 pt-20"> 
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">📚 Browse Books</h1>
         {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => navigate(cat === "All" ? "/books" : `/books/${cat.toLowerCase()}`)}
              className={`px-5 py-2 text-lg font-medium rounded-full transition-all duration-300 
                ${category === cat.toLowerCase()
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-blue-600 border border-blue-500 hover:bg-blue-500 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="🔍 Search by title or author..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-5 py-3 text-lg shadow-sm 
                      focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
          ) : (
            <p className="text-xl font-semibold text-red-600 text-center col-span-full bg-red-100 py-4 rounded-lg shadow-md">
              ❌📚  No books found {category ? `in "${category.toUpperCase()}" category` : "matching your search"}.
            </p>

          )}
        </div>
      </div>
    </div>
  );
};

export default BrowseBooks;
