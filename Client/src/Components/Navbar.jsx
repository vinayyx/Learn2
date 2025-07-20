import React from 'react'
import Payment from '../Payment'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

  const navigate = useNavigate()

  const handlecilck = () => { 

    navigate("/courselink")


  }

  
   
  

  return (
    <div className='flex justify-between items-center py-5'>

      <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold  text-gray-200 leading-snug" >Learnytix</h1>

      <div>

        <button className=" px-7 py-3 rounded-xl bg-gray-200 text-blue-900 font-semibold text-sm sm:text-base md:text-lg hover:bg-blue-100 transition-all duration-300 shadow-lg hover:scale-105" onClick={handlecilck} > Enrolled now  </button>

      </div>
      
      
    </div>
  )
}

export default Navbar
