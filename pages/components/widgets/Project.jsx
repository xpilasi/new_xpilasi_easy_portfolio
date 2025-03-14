import React from 'react'
import Image  from 'next/image';


const Project = ({
    
    imageSrc,
    designType,
    projectName,
    onClick
}) => {

    let rounded = false;
    let roundedCss = 'rounded-sm';
    let roundedCssCard = 'rounded-b-sm ';


    rounded ? roundedCss = 'rounded-md' : roundedCss = '';
    rounded ? roundedCssCard = 'rounded-b-sm ' : roundedCssCard = '';


    return (

        <div className={`grid-item  ${roundedCss} px-0 overflow-hidden h-auto `} onClick={onClick} >
              <Image className='' src={imageSrc} alt=''  layout='responsive'></Image>
              <div className={ `bg-danny-grey py-3 pl-3 mb-0 ${roundedCssCard}`}>
                <p className=' text-slate-500 font-extralight text-xs'>{designType}</p>
                <p className='text-white font-extralight text-sm'>{projectName}</p>
              </div>
              </div>
    )
} 
export default  Project