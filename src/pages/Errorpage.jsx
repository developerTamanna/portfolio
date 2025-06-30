import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 flex items-center justify-center text-white px-6">
      <div className="text-center space-y-6">
        <h1 className="text-8xl font-extrabold animate-pulse tracking-widest">404</h1>
        <p className="text-2xl font-light">Oops! Page Not Found</p>
        <p className="text-gray-400 max-w-md mx-auto">
          The page you're looking for doesn’t exist or was moved. Maybe go back to the homepage?
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow transition-all duration-300"
        >
          <FaHome />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
