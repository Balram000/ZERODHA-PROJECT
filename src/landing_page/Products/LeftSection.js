import React from "react";
import { ArrowRight } from "lucide-react";

const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="flex items-center justify-between my-20 mx-40 gap-10">

      
      <div className="w-1/2">
        <img
          src={imageURL}
          alt={productName}
          className="w-full"
        />
      </div>

    
      <div className="w-1/2 pl-16">

        <h1 className="text-3xl font-semibold mb-5">
          {productName}
        </h1>

        <p className="text-gray-600 leading-7">
          {productDescription}
        </p>

    
        <div className="flex gap-8 mt-6">

          {tryDemo && (
            <a
              href="#"
              className="text-blue-500 inline-flex items-center gap-2"
            >
              {tryDemo}
              <ArrowRight size={18} />
            </a>
          )}

          {learnMore && (
            <a
              href="#"
              className="text-blue-500 inline-flex items-center gap-2"
            >
              {learnMore}
              <ArrowRight size={18} />
            </a>
          )}

        </div>

        <div className='flex mt-9  '>
          <a href={googlePlay} > <img src='Images\googlePlayBadge.svg' />  </a>
          <a href={appStore} > <img src='Images/appstoreBadge.svg' className='pl-5' />  </a>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;

