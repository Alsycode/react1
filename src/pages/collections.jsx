import React, { useEffect, useState } from 'react';
import { products } from "../assets/frontend_assets/assets";
import ProductItem from '../components/productItem';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

const Collections = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const [showSearch, setShowSearch] = useState(true);
  const [search, setSearch] = useState("");

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory(prev => 
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
    console.log(category)
  };

  useEffect(() => {
    setProductsData(products);
    setFilterProducts(products);
  }, []);

  const applyFilter = () => {
    let productsCopy = products.slice();
    
    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  };

  const sortProducts = () => {
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className='flex flex-col min-h-screen'>
      {/* Search Bar */}
      <div className='w-full border-t border-b text-gray-50 text-center bg-gray-100 py-3'>
        <div className='inline-flex border border-gray-400 items-center justify-center px-3 py-2 mx-3 my-3 rounded-full w-[90%] sm:w-3/4 md:w-1/2'>
          <input 
            type='text' 
            placeholder='Search' 
            className='flex-1 bg-inherit outline-none text-sm sm:text-base text-gray-500' 
            value={search} 
            onChange={(e) => setSearch(e.target.value)}
          />
          <IoSearch className="w-4 sm:w-5 text-black" />
        </div>
      </div>

      {/* Main Content */}
      <div className='flex flex-col md:flex-row md:gap-6 lg:gap-10 border-t text-gray-500 pt-6 px-4 sm:px-6 md:px-10'>
        {/* Filter Section */}
        <div className='w-full md:w-60'>
          <div 
            className='my-2 text-gray-600 flex items-center justify-between cursor-pointer gap-2 text-lg sm:text-xl md:text-2xl'
            onClick={() => setShowFilters(!showFilters)}
          >
            <p>FILTERS</p>
            <MdOutlineKeyboardArrowDown 
              className={`h-5 w-5 md:hidden text-black ${showFilters ? "rotate-180" : ""}`}
            />
          </div>

          {/* Category Filters */}
          <div className={`border border-gray-300 pl-4 sm:pl-5 py-3 mt-4 md:mt-6 ${showFilters ? "block" : "hidden"} md:block`}>
            <p className='mb-3 text-sm sm:text-base font-medium'>CATEGORIES</p>
            <div className='text-sm sm:text-base flex flex-col gap-2 font-light'>
              <label className='flex gap-2 items-center'>
                <input 
                  type="checkbox" 
                  className='w-3 sm:w-4' 
                  value="Men" 
                  onChange={toggleCategory}
                />
                Men
              </label>
              <label className='flex gap-2 items-center'>
                <input 
                  type="checkbox" 
                  className='w-3 sm:w-4' 
                  value="Women" 
                  onChange={toggleCategory}
                />
                Women
              </label>
              <label className='flex gap-2 items-center'>
                <input 
                  type="checkbox" 
                  className='w-3 sm:w-4' 
                  value="Kids" 
                  onChange={toggleCategory}
                />
                Kids
              </label>
            </div>
          </div>

          {/* Subcategory Filters */}
          {/* <div className={`border border-gray-300 pl-4 sm:pl-5 py-3 mt-4 ${showFilters ? "block" : "hidden"} md:block`}>
            <p className='mb-3 text-sm sm:text-base font-medium'>TYPE</p>
            <div className='text-sm sm:text-base flex flex-col gap-2 font-light'>
              <label className='flex gap-2 items-center'>
                <input 
                  type="checkbox" 
                  className='w-3 sm:w-4' 
                  value="Topwear" 
                  onChange={toggleSubCategory}
                />
                Topwear
              </label>
              <label className='flex gap-2 items-center'>
                <input 
                  type="checkbox" 
                  className='w-3 sm:w-4' 
                  value="Bottomwear" 
                  onChange={toggleSubCategory}
                />
                Bottomwear
              </label>
              <label className='flex gap-2 items-center'>
                <input 
                  type="checkbox" 
                  className='w-3 sm:w-4' 
                  value="Winterwear" 
                  onChange={toggleSubCategory}
                />
                Winterwear
              </label>
            </div>
          </div> */}
        </div>

        {/* Product Section */}
        <div className='flex-1 mt-6 md:mt-0'>
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center text-base sm:text-lg md:text-2xl mb-4'>
            <h1>ALL COLLECTIONS</h1>
            <select 
              className='border-2 text-gray-500 text-sm sm:text-base px-2 py-1 mt-2 sm:mt-0 rounded' 
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="relevant">Sort by: Relevance</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6'>
            {filterProducts.map((item, index) => (
              <ProductItem 
                key={index} 
                id={item.id} 
                price={item.price} 
                name={item.name} 
                image={item.image} 
                category={item.category} 
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;