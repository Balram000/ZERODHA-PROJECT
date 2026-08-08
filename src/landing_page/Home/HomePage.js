import React from 'react'
import Hero from './Hero'
import Awards from './Awards.js'
import Stats from './Stats'
import Princing from './Princing'
import Education from './Education'
import OpenAccount from '../OpenAccount/OpenAccount'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Awards />
      <Stats />
      <Princing/>
      <Education/>
      <OpenAccount/>
      
    </div>
  )
}

export default HomePage
