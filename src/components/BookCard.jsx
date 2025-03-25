import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  if (!book || !book.id) {
    return <div className="text-red-500 text-lg font-bold">Invalid Book Data</div>;
  }

  return (
    <div className="relative bg-gradient-to-br from-white to-gray-100 shadow-lg rounded-xl overflow-hidden p-6 flex flex-col items-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-gray-200">

      {/* Book Cover Image */}
      <div className="w-44 h-60 rounded-lg overflow-hidden shadow-lg border border-gray-300">
        <img
          src={book.cover_image || "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"}
          alt={book.title || "Book Cover"}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Book Title */}
      <h3 className="mt-4 text-2xl font-bold text-gray-900 text-center">{book.title || "Untitled"}</h3>

      {/* Author */}
      <p className="text-gray-700 text-lg text-center mt-1 italic">
        <span className="font-semibold">Author:</span> {book.author || "Unknown"}
      </p>

      {/* Star Rating */}
      {book.rating ? (
        <p className="text-yellow-500 font-semibold mt-2 flex items-center gap-1">
          ⭐ {book.rating} / 5
        </p>
      ) : (
        <p className="text-gray-500 mt-2">No rating available</p>
      )}

      {/* View Details Button */}
      <Link
        to={`/book/${book.id}`}
        className="mt-5 bg-blue-600 text-white px-6 py-3 text-lg font-medium rounded-full shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:translate-y-[-2px]"
      >
        View Details
      </Link>
    </div>
  );
};

export default BookCard;
