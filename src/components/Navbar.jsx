import React, { useState } from "react";
import { BiSolidWatchAlt } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { IoPersonSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-gray-400 py-3 px-6 md:px-12 flex justify-between items-center">

      {/* LOGO */}
      <a href="#!" className="flex gap-1 items-center text-white text-2xl font-semibold">
        <BiSolidWatchAlt className="w-[30px] h-[30px]" />
        Mohid
      </a>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex gap-7 text-xl items-center">
        {["Home", "Brands", "Recent Products", "Contact", "About"].map((item) => (
          <li key={item} className="hover:text-white transition-[.5s] cursor-pointer">
            {item}
          </li>
        ))}
      </ul>

      {/* DESKTOP ICONS */}
      <ul className="hidden md:flex gap-7 items-center text-xl cursor-pointer">
        <CiSearch className="hover:text-white transition-[.5s]" />
        <IoPersonSharp className="hover:text-white transition-[.5s]" />
        <FaShoppingCart className="hover:text-white transition-[.5s]" />
      </ul>

      {/* MOBILE MENU BUTTON */}
      <button className="md:hidden text-white text-3xl" onClick={() => setOpen(!open)}>
        {open ? <HiX /> : <HiMenu />}
      </button>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="absolute top-[70px] left-0 w-full bg-black text-gray-300 py-6 px-6 md:hidden shadow-xl animate-fadeIn">
          
          {/* LINKS */}
          <ul className="flex flex-col gap-5 text-lg">
            {["Home", "Brands", "Recent Products", "Contact", "About"].map((item) => (
              <li key={item} className="hover:text-white transition-[.5s] cursor-pointer">
                {item}
              </li>
            ))}
          </ul>

          {/* ICONS */}
          <div className="flex gap-6 text-2xl mt-6">
            <CiSearch className="hover:text-white transition-[.5s]" />
            <IoPersonSharp className="hover:text-white transition-[.5s]" />
            <FaShoppingCart className="hover:text-white transition-[.5s]" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
