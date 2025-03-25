import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaArrowLeft } from "react-icons/fa"; // Importing an icon

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books);
  const book = books.find((book) => book.id === id);

  if (!book)
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h2 className="text-3xl font-bold text-gray-800 bg-red-100 px-6 py-3 rounded-lg shadow-md">
          ❌ Book Not Found
        </h2>
        <p className="text-lg text-gray-600 mt-3">The book you’re looking for doesn’t exist.</p>
        <Link
          to="/books"
          className="mt-4 px-6 py-2 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-md
                     hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          Browse Books
        </Link>
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6 pt-20">
      {/* Book Card */}
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-2xl">

        {/* Title */}
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">{book.title}</h1>

        {/* Book Image */}
        <div className="flex justify-center mb-6">
          <img
            src={book.cover_image || "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"} 
            alt={book.title}
            className="w-60 h-80 object-cover rounded-md shadow-md border border-gray-300"
          />
        </div>

        {/* Book Details */}
        <div className="text-gray-700 space-y-3 text-lg">
          <p><strong className="text-blue-600">Author:</strong> {book.author}</p>
          <p><strong className="text-blue-600">Description:</strong> {book.description}</p>
          <p><strong className="text-blue-600">Publish Date:</strong> {book.publishDate}</p>
          <p><strong className="text-blue-600">Pages:</strong> {book.pages}</p>
          <p className="text-yellow-500 text-lg font-semibold">⭐ {book.rating}</p>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mt-6 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-lg transition duration-300 w-full shadow-md"
        >
          <FaArrowLeft /> Back to Browse
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
