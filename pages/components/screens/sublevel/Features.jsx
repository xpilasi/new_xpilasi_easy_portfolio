import React from 'react'
import Image  from 'next/image';

const Features = ({year,framework,language,backend}) => {


    
  return (

    <div className='grid grid-cols-4'>
      <div className='text-zinc-500 font-interDisplayLight text-[14px]'>Year</div>
      
      
      <div className='text-zinc-500 font-interDisplayLight text-[14px]'>Framework</div>
      
      <div className='text-zinc-500 font-interDisplayLight text-[14px]'>Language</div>
      <div className='text-zinc-500 font-interDisplayLight text-[14px]'>Backend</div>
      
      
      
      
      <div className='text-white font-interdisplayLight text-sm pb-12 tracking-wider'>{year}</div>
      <div className='text-white font-interdisplayLight text-sm pb-12 tracking-wider'>{framework}</div>
      <div className='text-white font-interdisplayLight text-sm pb-12 tracking-wider'>{language}</div>
      <div className='text-white font-interdisplayLight text-sm pb-12 tracking-wider'>{backend}</div>
      
    </div>
   
   
  )
}

export default Features