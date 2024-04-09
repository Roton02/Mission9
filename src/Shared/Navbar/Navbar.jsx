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
            {
            user && <NavLink
            to="/blog"
            className="btn btn-ghost border-2  border-gray-300 hover:bg-black hover:text-white"
          >
            Blogs
          </NavLink>
          }
          </div>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-xl lg:text-3xl mr-0 font-bold"
        >
          RELAINS-LANDS
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
        
          {
            user && <NavLink
            to="/blog"
            className="btn btn-ghost border-2  border-gray-300 hover:bg-black hover:text-white"
          >
            Blogs
          </NavLink>
          }
       
      </div>
      <div className="navbar-end ">
        {user ? (
           <div className="flex items-center ">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
           <div className="w-10 rounded-full tooltip tooltip-open tooltip-top" data-tip="hello">
             <img  alt="" src={user.photoURL} />
           </div>
           
         </div>
          <button
            onClick={Logout}
            className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#ad1199] text-[#ad1199] hover:text-white"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#ad1199] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-[#ad1199] transition duration-300 group-hover:text-white ease">
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
