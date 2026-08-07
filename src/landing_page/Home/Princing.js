import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Princing = () => {
  return (
    <div className='container m-20 flex '>
      
        <div className='w-1/3 m-20'>
        <h1 className='mb-3 text-3xl font-bold'> Unbeatable princing</h1>
        <p> we pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden char </p>
        <Link
          to="/Princing"
          className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 mt-6"
        >
          See princing
          <ArrowRight size={18} />
          </Link>
        </div>
        <div className='w-1/12'>
        </div>
        <div className='w-1/2 flex space-x-3  '>
         <div  className='border   text-center p-4 '>
          <h1 className='text-9xl text-yellow-400 '> 0</h1>
          <p> Fees equilty delivery and direct mutual fund </p>
         </div>
         <div className='border text-center p-4'>
          <h1 className='text-9xl text-yellow-400 '> 10</h1>
          <p> Fees equilty delivery and direct mutual fund </p>
         </div>
        </div>
      </div>
      
    
  )
}

export default Princing
