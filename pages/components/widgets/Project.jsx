import React from 'react'
import Image  from 'next/image';


const Project = ({
    
    imageSrc,
    designType,
    projectName
}) => {

    return (

        <div className='grid-item  rounded-md px-0 overflow-hidden h-auto '>
              <Image className='' src={imageSrc}   layout='responsive'></Image>
              <div className=' bg-new-neon rounded-b-md py-3 pl-3 mb-0'>
                <p className=' text-slate-500 font-extralight text-xs'>{designType}</p>
                <p className='text-white font-extralight text-sm'>{projectName}</p>
              </div>
              </div>
    )
} 
export default  Project