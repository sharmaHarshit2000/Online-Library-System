import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books);
  const book = books.find((book) => book.id === id);

  if (!book)
    return <h2 className="text-xl text-red-500 font-semibold text-center mt-6">Book not found</h2>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Card Container */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">{book.title}</h1>

        {/* Book Cover */}
        <img
          src={book.cover_image}
          alt={book.title}
          className="w-60 h-80 object-cover rounded-md mx-auto mb-4"
        />

        {/* Book Details */}
        <div className="text-gray-700 space-y-3">
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Description:</strong> {book.description}</p>
          <p><strong>Publish Date:</strong> {book.publishDate}</p>
          <p><strong>Pages:</strong> {book.pages}</p>
          <p><strong>Rating:</strong> {book.rating} ⭐</p>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 w-full"
        >
          Back to Browse
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
