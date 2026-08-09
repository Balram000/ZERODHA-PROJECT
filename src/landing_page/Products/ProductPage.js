import React from 'react'
import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'




const ProductPage = () => {
  return (

    <>
      <Hero />
      <LeftSection imageURl='Images/kite.png' productName='Kite' productDiscription='Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.' />
      <RightSection />
      <Universe />
    </>
  )
}

export default ProductPage
