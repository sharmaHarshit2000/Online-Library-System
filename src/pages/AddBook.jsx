import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [book, setBook] = useState({ title: "", author: "", category: "", cover_image: "" });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ id: Date.now().toString(), ...book, rating: 4.5 }));
    navigate("/books");
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg border border-gray-200 mt-24 mb-16">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6 flex justify-center items-center gap-2">
          📚 Add a New Book
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            name="title"
            placeholder="📌 Book Title"
            value={book.title}
            onChange={handleChange}
            required
            className="bg-gray-50 border border-gray-300 px-4 py-3 rounded-lg focus:ring-4 focus:ring-blue-300 
                      focus:border-blue-500 transition-all duration-300 w-full text-gray-800 placeholder-gray-500"
          />

          <input
            name="author"
            placeholder="✍️ Author Name"
            value={book.author}
            onChange={handleChange}
            required
            className="bg-gray-50 border border-gray-300 px-4 py-3 rounded-lg focus:ring-4 focus:ring-blue-300 
                      focus:border-blue-500 transition-all duration-300 w-full text-gray-800 placeholder-gray-500"
          />

          <input
            name="category"
            placeholder="📂 Category"
            value={book.category}
            onChange={handleChange}
            required
            className="bg-gray-50 border border-gray-300 px-4 py-3 rounded-lg focus:ring-4 focus:ring-blue-300 
                      focus:border-blue-500 transition-all duration-300 w-full text-gray-800 placeholder-gray-500"
          />

          <input
            name="cover_image"
            placeholder="🖼️ Cover Image URL (optional)"
            value={book.cover_image}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 px-4 py-3 rounded-lg focus:ring-4 focus:ring-blue-300 
                      focus:border-blue-500 transition-all duration-300 w-full text-gray-800 placeholder-gray-500"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 
                       shadow-md hover:shadow-lg border border-blue-600"
          >
            ➕ Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
