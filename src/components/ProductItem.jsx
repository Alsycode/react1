import React, { useContext } from 'react'
// import { ShopContext } from '../context/ShopContext'
import { Link } from "react-router-dom";
const ProductItem = ({id, image, name, price,category,rating}) => {
  const currency = "Rs.";
  const addToCart = (name) => {
    console.log(`${name} added to cart`)
  }
  return (
    <div className="text-gray-700 cursor-pointer">
<div className='overflow-hidden '>
<img src={image[0]} className='hover:scale-110 transition ease-in-out' alt='productImage'/>
<p className='text-sm font-medium border mt-5  py-1 px-4 bg-gray-300 '>{category}'s Clothing</p>
<p className='pt-3 pb-1 text-sm'>{name}</p>
<p className='text-sm pt-3 font-medium'>{currency} {price}/-</p>

<p className='text-sm pt-3 font-medium'>Rating:{rating}</p>
<div className='flex justify-center items-center mt-3'>
<button className='text-white w-full bg-black rounded-md px-4 py-2' onClick={()=>addToCart(name)}>Add to cart </button>
</div>

</div>
    </div>
  )
}

export default ProductItem