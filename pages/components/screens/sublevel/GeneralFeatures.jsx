import React from 'react'
import Image  from 'next/image';

const GeneralFeatures = ({generalFeatures}) => {

  return (

    <p className='text-gray-700 dark:text-gray-300 font-light text-sm md:text-base leading-relaxed lg:pb-12 pb-2'>
    {generalFeatures}
</p>

  )
}

export default GeneralFeatures