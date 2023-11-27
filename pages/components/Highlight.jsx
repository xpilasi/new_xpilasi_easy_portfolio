import React from 'react'
import SubTitle from './SubTitle'
import Image  from 'next/image';


const Highlight = ({srcImage,subTitle,highlight}) => {
    const highlightTextStyle = ' text-md mt-3 leading-6 md:text-md mb-10 font-extralight ';
    
  return (
     <div className=' text-center px-5 py-1 bg-slate-700 mt-5 bg-opacity-20 rounded '>
    
     <Image className=' mx-auto mt-5'src={srcImage} width={100} ></Image>
     <SubTitle subTitle = {subTitle}/>
     <p className={highlightTextStyle}>{highlight}</p>
            
    </div>
    
   
  )
}

export default Highlight