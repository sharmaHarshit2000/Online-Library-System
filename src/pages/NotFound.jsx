import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      {/* 404 Page Content Box */}
      <div className="bg-white shadow-lg rounded-2xl p-10 w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%]">
        {/* 404 Error */}
        <h1 className="text-7xl font-bold text-blue-700 mb-4 drop-shadow-lg">404</h1>

        {/* Message */}
        <p className="text-xl font-medium text-gray-700 mb-6 leading-relaxed">
          <span className="text-blue-600 font-semibold">Oops!</span> The page you're looking for <br /> 
          <span className="text-red-500 font-bold">doesn't exist.</span>
        </p>

        {/* Illustration */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
          alt="Not Found"
          className="w-40 h-40 mx-auto mb-6"
        />

        {/* Back Button */}
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-3 text-lg font-semibold rounded-lg 
                     hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
