import { Link } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import Logo from "./Logo";

const Navbar = () => {
  const { user, logout } = useUser();

  return (
    <div className="mx-auto max-w-screen-xl px-6 lg:px-8 relative">
      <div className="relative flex h-16 space-x-10 w-full">
        <div className="flex justify-start">
          <a className="flex flex-shrink-0 items-center" href="/">
            <Logo />
          </a>
        </div>
        <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8 flex-1 justify-end justify-self-end ">
          {user ? (
            <>
              <Link
                to="/dashboard/gallery"
                className="text-gray-700 hover:text-lime-700 text-sm font-medium"
              >
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="text-white bg-gray-800 hover:bg-gray-900 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm "
                href="/register"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <a
                className="text-gray-700 hover:text-lime-700 text-sm font-medium"
                href="/login"
              >
                Login
              </a>
              <a
                className="text-white bg-gray-800 hover:bg-gray-900 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm "
                href="/register"
              >
                Sign up
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
