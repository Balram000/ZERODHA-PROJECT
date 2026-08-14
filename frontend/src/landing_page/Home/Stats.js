import React from 'react'
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


const Stats = () => {
  return (
    <div className='Container flex p-4'>
      <div className='m-20 w-1/3 p-8'>

        <h1 className="text-4xl font-bold  mt-23 "> Trust with always </h1>

        <h2 className='text-2xl font-bold mt-9'> Customer first Always </h2>
        <p className='mb-5' > That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India..</p>

        <h2 className='text-2xl font-bold'> No spam or gimmicks </h2>
        <p className='mb-5'> No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies...</p>

        <h2 className='text-2xl font-bold'> The Zerodha Universe </h2>
        <p className='mb-5'>  Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs..</p>

        <h2 className='text-2xl font-bold'> Do Better  with Money </h2>
        <p className='mb-5'> With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money..</p>

      </div>

      <div className='w-2/3 p-4'>
        <img src='Images/ecosystem.png' alt='ecosystem '  className='h-[660px] w-[800px]'/>

        <div className="flex gap-10 mt-6 font-bold text-2xl ml-28">
          <Link
            to="/products"
            className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 "
          >
            Explore our products
            <ArrowRight size={18} />
          </Link>

          <Link
            to="/kite"
            className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800"
          >
            Try Kite demo
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
      <div>


      </div>
    </div>
  )
}

export default Stats
