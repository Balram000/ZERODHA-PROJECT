import React from 'react'
import Brokerage from './Brokerage'
import OpenAccount from '../OpenAccount/OpenAccount.js'
import Hero from './Hero.js'
const PricingPage = () => {
  return (
    <div>
      <Hero />
      <OpenAccount />
      <Brokerage />
    </div>
  )
}

export default PricingPage
