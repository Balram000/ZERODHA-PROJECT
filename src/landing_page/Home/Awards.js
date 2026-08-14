import React from 'react'

const Awards = () => {
  return (
    <div className=' p-6 flex '>
      <div className='w-1/2'>
        <img src='Images/largestBroker.svg'  alt='largestBroker'/>
      </div>
      <div className='w-1/2 '>
        <h1 className='font-bold text-5xl p-4'>
          Largest stock broker in  India
        </h1>
        <p> That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.s</p>
       <div className=' flex '>
       <div className='w-1/2 p-5'>
        <ui>
          <li>
            Future nad optons
          </li>
          <li>
             Comadodity denrivate 
          </li>
          <li>
            Currency derivative
          </li>
        </ui>
        </div>
        <div className='w-1/2 p-5'>
        <ui>
          <li>
            stock & IPO
          </li>
          <li>
             Direct mutual fund
          </li>
          <li>
            Bonds and 
          </li>
        </ui>
        </div>
       </div>
       <img src='Images\pressLogos.png' alt='pressLogo' className='mt-7 '/>
      </div>
    </div>
  )
}

export default Awards
