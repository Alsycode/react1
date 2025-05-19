import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import { useLocation } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
const Searchbar = () => {

const [search,setSearch] = useState();
const [visible, setVisible] = useState(false);
const location = useLocation();
useEffect(()=>{
    if(location.pathname.includes("collection")){
        setVisible(true);
    }
    else{setVisible(false)}
},[location])
  return  (
    <div className='border-t border-b text-gray-50 text-center bg-gray-100 my-2'>
<div className='inline-flex border border-gray-400 items-center justify-center px-5 py-2 mx-3  my-3 rounded-full w-3/4 sm:w-1/2'>
<input type='text' placeholder='Search' className='flex-1 background-inherit outline-none text-sm text-gray-500' value={search} onChange={(e)=>setSearch(e.target.value)}/>
{/* <img className='w-4' src={assets.search_icon} alt='search-icon'/> */}

</div>
{/* <img src={assets.cross_icon} className='inline w-3 cursor-pointer' onClick={()=>setShowSearch(false)}/> */}
    </div>
  )
}

export default Searchbar