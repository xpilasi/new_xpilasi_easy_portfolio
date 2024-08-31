import React from 'react'
import Image  from 'next/image';

const GeneralFeatures = ({generalFeatures}) => {


    
  return (

    <p className='text-white font-interdisplayLight text-xs lg:text-sm  lg:pb-12 pb-2 tracking-wider  '>
    {generalFeatures}
</p>
   
  )
}

export default GeneralFeatures