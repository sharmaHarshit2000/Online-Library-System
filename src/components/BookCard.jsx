import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-4 flex flex-col items-center transition-transform transform hover:scale-105">
      <img 
        src={book.cover_image} 
        alt={book.title} 
        className="w-full h-56 object-cover rounded-md"
      />
      <h3 className="mt-4 text-lg font-semibold text-gray-800 text-center">{book.title}</h3>
      <p className="text-gray-600 text-center">Author: <span className="font-medium">{book.author}</span></p>
      <p className="text-yellow-500 font-medium text-center">Rating: {book.rating} ⭐</p>
      <Link 
        to={`/book/${book.id}`} 
        className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default BookCard;
