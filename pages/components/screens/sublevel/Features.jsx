import React from 'react'
import Image  from 'next/image';
import Column from '../../widgets/columns/Column';

const Features = ({year,framework,language,backend}) => {


    
  return (

    <div className='py-5 lg:py-0 text-xs lg:text-sm w-full flex justify-between'>
      
      <Column header='Year' content={year}/>
      <Column header='Framework' content={framework}/>
      <Column header='Language' content={language}/>
      <Column header='Backend' content={backend}/>
      
      {/* <div className='text-zinc-500 font-interDisplayLight '>Year</div>
      <div className='text-zinc-500 font-interDisplayLight '>Framework</div>
      <div className='text-zinc-500 font-interDisplayLight '>Language</div>
      <div className='text-zinc-500 font-interDisplayLight '>Backend</div>
      
      <div className='text-white font-interdisplayLight  pb-12 tracking-wider'>{year}</div>
      <div className='text-white font-interdisplayLight  pb-12 tracking-wider'>{framework}</div>
      <div className='text-white font-interdisplayLight  pb-12 tracking-wider'>{language}</div>
      <div className='text-white font-interdisplayLight  pb-12 tracking-wider'>{backend}</div> */}
      
    </div>
   
   
  )
}

export default Features