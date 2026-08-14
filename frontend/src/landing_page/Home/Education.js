import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Education = () => {
  return (
    <div className='Container flex p-8 m-20  '>


    <div className=' w-1/2 flex'>
      <img src='Images/education.svg'  alt='education '/>
      </div>
    <div className='m-6 w-1/2 '>

      <h1 className="text-4xl font-bold   ">Free and open market education</h1>

  
      <p className='mb-5 m-8' > Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>

      <Link
          to="/Princing"
          className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 mt-6"
        >
          Varsity 
          <ArrowRight size={18} />
          </Link>
    
      <p className='mb-5 p-8'> TradingQ&A, the most active trading and investment community in India for all your market related queries..</p>

      <Link
          to="/Princing"
          className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 mt-6"
        >
        TradingQ&A 
          <ArrowRight size={18} />
          </Link>

   
    </div>
    <div>


    </div>
  </div>
  )
}

export default Education
