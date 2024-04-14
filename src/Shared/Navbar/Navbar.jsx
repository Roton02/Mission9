import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../ContextProvider/ContextProvider";

const Navbar = () => {
  const { Logout, user } = useContext(AuthContext);
  console.log(user);
  return (
    <nav className="navbar  bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              to="/"
              className="btn btn-ghost border-2 border-gray-300 hover:bg-black hover:text-white "
            >
              Home
            </NavLink>
            <NavLink
              to="/profile"
              className="btn btn-ghost border-2 border-gray-300 hover:bg-black hover:text-white"
            >
              Profile
            </NavLink>
            <NavLink
              to="/updateProfile"
              className="btn btn-ghost border-2 border-gray-300 hover:bg-black hover:text-white"
            >
              Update-Profile
            </NavLink>
            {user && (
              <NavLink
                to="/blog"
                className="btn btn-ghost border-2  border-gray-300 hover:bg-black hover:text-white"
              >
                Blogs
              </NavLink>
            )}
          </div>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-xl lg:text-3xl mr-0 font-bold"
        >
          <span className="text-pink-700">RELAINS</span> RELUX
        </Link>
      </div>
      <div className="navbar-center hidden space-x-2  lg:flex">
        <NavLink
          to="/"
          className="btn btn-ghost border-2 border-gray-300 hover:bg-black hover:text-white "
        >
          Home
        </NavLink>
        <NavLink
          to="/profile"
          className="btn btn-ghost border-2 border-gray-300 hover:bg-black hover:text-white"
        >
          Profile
        </NavLink>
        <NavLink
          to="/updateProfile"
          className="btn btn-ghost border-2 border-gray-300 hover:bg-black hover:text-white"
        >
          Update-Profile
        </NavLink>

        {user && (
          <NavLink
            to="/blog"
            className="btn btn-ghost border-2  border-gray-300 hover:bg-black hover:text-white"
          >
            Blogs
          </NavLink>
        )}
      </div>
      <div className="navbar-end ">
        {user ? (
          <div className="flex items-center justify-center ">
            
            <div className="flex items-center justify-center">
              <div className="pointer group relative mb-4 h-8">
                {/* Hover button */}

                <div className="relative group ">
                  <img
                    className="size-[50px] bg-slate-500 object-cover rounded-full"
                    src={
                      user.photoURL ||
                      "https://source.unsplash.com/300x300/?profile"
                    }
                    alt="avatar navigate ui"
                  />
                  <span className="size-4 bg-green-500 absolute rounded-full bottom-2 right-0 border-[3px] border-white"></span>
                  <span className="size-4 bg-green-500 absolute rounded-full bottom-2 right-0 animate-ping"></span>
                </div>
                {/* Hover Text */}
                <div className="absolute -left-[90px] top-0 flex cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-left-[120px] group-hover:opacity-100">
                  <p className="h-fit rounded-md bg-[#0EA5E9] px-3 py-2 text-white shadow-[0px_0px_10px_0px_#0EA5E9]">
                    {" "}
                    {user.displayName || "name not found"}{" "}
                  </p>
                  <span className="absolute -right-2 top-[50%] h-0 w-0 -translate-y-1/2 rotate-45 border-b-[20px] border-r-[20px] border-b-transparent border-r-[#0EA5E9] shadow-[0px_0px_10px_0px_#0EA5E9]"></span>
                </div>
              </div>
            </div>

            {/* </div> */}
            <button
              onClick={Logout}
              className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-pink-700 text-pink-700 hover:text-white"
            >
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-pink-700 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-pink-700 transition duration-300 group-hover:text-white ease">
                Logout
              </span>
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#ad1199] text-[#ad1199] hover:text-white"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#ad1199] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-[#ad1199] transition duration-300 group-hover:text-white ease">
              Login
            </span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
