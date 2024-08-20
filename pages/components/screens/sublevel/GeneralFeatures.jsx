import React from 'react'
import Image  from 'next/image';

const GeneralFeatures = ({generalFeatures}) => {


    
  return (

    <p className='text-white font-interdisplayLight text-sm  lg:pb-12 pb-6 tracking-wider  '>
    {generalFeatures}
</p>
   
  )
}

export default GeneralFeatures