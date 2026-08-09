import React from 'react'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <div className="text-center p-9">
    <h1 className="text-3xl">Zerodha Products</h1>
  
    <h3 className="text-2xl p-3">
      Sleek, modern, and intuitive trading platforms
    </h3>
  
    <div className="flex items-center justify-center gap-2">
      <p className="text-xl">Check out our</p>
  
      <a
        href="https://www.invest.com"
        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800"
      >
        investment offerings
        <ArrowRight size={18} />
      </a>``
    </div>
  </div>
  )
}
export default Hero
