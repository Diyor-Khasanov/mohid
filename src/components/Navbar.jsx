import React from 'react'
import { BiSolidWatchAlt } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { IoPersonSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='flex justify-around text-xl font-normal bg-black text-gray-400 py-3'>
      <a href="#!" className='flex gap-0.5 items-center text-white'>
        <BiSolidWatchAlt className='w-[30px] h-[30px]'/>
        Mohid
      </a>

      <ul className='flex gap-7 cursor-pointer items-center'>
        <li className=' hover:text-white transition-[.5s]'>Home</li>
        <li className=' hover:text-white transition-[.5s]'>Brands</li>
        <li className=' hover:text-white transition-[.5s]'>Recent Products</li>
        <li className=' hover:text-white transition-[.5s]'>Contact</li>
        <li className=' hover:text-white transition-[.5s]'>About</li>
      </ul>

      <ul className='flex gap-7 cursor-pointer items-center'>
        <CiSearch className=' hover:text-white transition-[.5s]'/>
        <IoPersonSharp  className=' hover:text-white transition-[.5s]'/>
        <FaShoppingCart className=' hover:text-white transition-[.5s]'/>
      </ul>

    </div>
  )
}

export default Navbar