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

    </div>
   
   
  )
}

export default Features