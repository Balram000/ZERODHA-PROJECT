import React from 'react'

const Team = () => {
  return (
    <div className='contianer '>
      <div className='row p-5 mb-5 flex' >
        <div className='w-1/2 pl-56'>
          <img src="Images\nithinKamath.jpg" alt="Nithin Kamath" className="rounded-full m-4 h-[250px] w-[250px] " />
          <h1 className='text-3xl font-bold mb-4 ' >Nithin Kamath</h1>
          <p> 
            Founder, CEO
          </p>
        </div>
        <div className='w-1/2'>
          <h2 className='text-3xl font-bold mb-4 '>People</h2>
          <p className='mt-32 pr-36 text-xl'>MNithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
            <br /> <br />
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
            <br /> <br />
            Playing basketball is his zen.<br /></p></div>
      </div>


    </div>
  )
}

export default Team
