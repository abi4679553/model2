import React from 'react'
import { Link } from "react-router-dom";
import { Navigate ,useNavigate} from "react-router-dom";

const Header = () => {
    const Navigate = useNavigate()
  return (
   
    <div className='flex  justify-between  px-10 bg-blue-500  items-center text-xl text-white'>
      <div>
        <p className=' p-5 text-2xl'>Hello !!</p>
      </div>
      <div className=' gap-20 flex  '>
        <Link to="/Home">Home</Link>
        <p  onClick={()=>Navigate('/About')}>About</p>
        <a href='/Contact' onClick={()=>Navigate('/Cantact')}>Contact</a>
      </div>

    </div>
  )
}

export default Header