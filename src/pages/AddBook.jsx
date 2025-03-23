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
    if (!book.title || !book.author || !book.category) return alert("All fields are required!");
    dispatch(addBook({ id: Date.now().toString(), ...book, rating: 4.5 }));
    navigate("/books");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Form Container */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Add New Book</h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            name="author"
            placeholder="Author"
            onChange={handleChange}
            className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            name="category"
            placeholder="Category"
            onChange={handleChange}
            className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            name="cover_image"
            placeholder="Cover Image URL"
            onChange={handleChange}
            className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
