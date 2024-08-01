import React from 'react'
import Image  from 'next/image';


const Project = ({
    imageSrc,
    designType,
    projectName
}) => {

    

    return (

        <div className='grid-item bg-new-neon  rounded-xl px-0 '>
              <Image className='' src={imageSrc}   layout='responsive'></Image>
              <div className=' bg-neon-grey rounded-b-xl py-3 pl-3'>
                <p className=' text-slate-500 font-extralight'>{designType}</p>
                <p className='text-white font-extralight'>{projectName}</p>
              </div>
              </div>
    )
} 
export default  Project