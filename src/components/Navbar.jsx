import React from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import { IoBagHandleSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div id='navvvv' className='flex px-4 sm:px-6 md:px-10 bg-gray-300 justify-between items-center py-3 sm:py-4 md:py-5 w-full'>
      <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800'>GenFitz</h2>
      
 
      <ul className='hidden md:flex flex-row items-center gap-6'>
        <li className='text-2xl flex flex-col items-center gap-1 text-gray-700 hover:text-gray-900 cursor-pointer'>
          OUR COLLECTIONS
        </li>
      
      </ul>

      {/* Cart Icon - Hidden on small screens */}
      <div className='relative hidden md:block'>
        <IoBagHandleSharp className='text-3xl cursor-pointer' />
        <p className='text-[10px] right-[-5px] bottom-[-5px] absolute  w-5 text-center text-white rounded-full aspect-square leading-5'>
          2
        </p>
      </div>
    </div>
  );
};

export default Navbar;