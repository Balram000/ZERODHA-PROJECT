import React from 'react'

const Hero = () => {
  return (
    <div className="container text-center flex flex-col gap-5">

    <img src="Images/homeHero.png" alt="hero"/>
  <div   >
    <h1 className="text-5xl font-bold p-4">
      Invest in everything
    </h1>
  
    <p>
      Online platform to invest in apps you can use
    </p>
  
  </div>
   <span>
     <button className="bg-blue-500 text-white px-5 py-3 rounded-3xl btn btn-primary fs-5 mb-5">
      Get Started
    </button>
    </span>
  
  </div>
  )
}

export default Hero
