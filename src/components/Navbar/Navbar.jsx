import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-20 w-auto" />
        </Link>

        <div className="flex space-x-8">
          <Link to="/home" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/alerts" className="text-gray-700 hover:text-blue-600">
            Alerts
          </Link>
          <Link
            to="/notification"
            className="text-gray-700 hover:text-blue-600"
          >
            Notification
          </Link>
          <Link to="/Profile" className="text-gray-700 hover:text-blue-600">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}
