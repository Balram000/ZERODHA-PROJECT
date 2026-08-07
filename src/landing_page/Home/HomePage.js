import React from 'react'
import Hero from './Hero'
import Awards from './Awards.js'
import Stats from './Stats'
import Princing from './Princing'
import Education from './Education'
import OpenAccount from '../OpenAccount/OpenAccount'
import  Footer  from '../Footer.js'
import Navbar from '../Navbar.js'
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Awards />
      <Stats />
      <Princing/>
      <Education/>
      <OpenAccount/>
      <Footer/>
    </div>
  )
}

export default HomePage
