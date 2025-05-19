import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Collections from './pages/collections'
import { Route, Routes } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
function App() {
  const [count, setCount] = useState(0)
const [showFilters, setShowFilters] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");
    const [search,setSearch] = useState("");
    const [visible, setVisible] = useState(false);
  return (
    <>
      <div className='w-screen'>
<Navbar/>

 <Routes>
  <Route path='/' element={<Collections/>}/>
  </Routes> 

      </div>
        
    </>
  )
}

export default App
