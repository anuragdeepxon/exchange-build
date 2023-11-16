// components/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white text-xs">
      <div className="mx-auto px-2 flex justify-between items-center">
        <div className="flex">
          {/* Assuming you have the proper routing setup for these links */}
          <Link href="/" className="hover:text-gray-300 font-bold px-4 py-2">
            Home
          </Link>
          <Link href="#" className="hover:text-gray-300 font-bold px-4 py-2">
            In-Play
          </Link>
          <Link href="#" className="hover:text-gray-300 font-bold px-4 py-2">
            Multi Markets
          </Link>
          <Link href="#" className="hover:text-gray-300 font-bold px-4 py-2">
            Cricket
          </Link>
          <Link href="#" className="hover:text-gray-300 font-bold px-4 py-2">
            Soccer
          </Link>
          <Link href="#" className="hover:text-gray-300 font-bold px-4 py-2">
            Tennis
          </Link>
          <Link href="#" className="hover:text-gray-300 font-bold px-4 py-2">
            E-Soccer
          </Link>
          <Link href="#" className="hover:text-gray-300 font-bold px-4 py-2">
            World Cup Winner
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-gray-400">
            Time Zone: <span className="font-bold text-white">GMT+5:30</span>
          </div>

          <button className="text-white font-bold">One Click Bet</button>

          <button className="text-white font-bold">
            Setting
            <span>⚙️</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
