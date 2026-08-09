import React from 'react'
import { ArrowRight } from 'lucide-react'



const LeftSection = ({
  imageURl,
  productName,
  productDiscription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className='flex  m-44'>
   <div className='w-1/2 p-3 gap-3'>
   <img  src={imageURl} alt={Image} />
    </div>  
   <div className='w-1/2 p-3 mt-3'>
    <h1 className='text-3xl font-bold m-5'>{productName}</h1>
    <p>{productDiscription}</p>
    <div className='flex  mt-5 text-2xl ' >
    <a href={tryDemo} className='text-blue-500 inline-flex items-center gap-3' >try demo   <ArrowRight size={18} /> </a>
    <a href={learnMore}  className='text-blue-500 pl-5 inline-flex items-center  gap-3' >learn more  <ArrowRight size={18} /> </a>
    </div>
     <div className='flex mt-9  '>
     <a href={googlePlay } > <img src='Images\googlePlayBadge.svg' />  </a>
    <a href={appStore } > <img src='Images/appstoreBadge.svg' className='pl-5' />  </a>
     </div>
     </div>  
    </div>
  )
}

export default LeftSection
