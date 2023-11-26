import React from 'react'
import SubTitle from './SubTitle'
import Image  from 'next/image';


const Highlight = ({srcImage,subTitle,highlight}) => {
    const highlightTextStyle = ' text-lg py-5 leading-6 md:text-xl mb-10 font-extralight';
    
  return (
    <div className=' text-center  p-5 '>
        
     <Image className=' mx-auto w-200'src={srcImage} width={200} ></Image>
     <SubTitle subTitle = {subTitle}/>
     <p className={highlightTextStyle}>{highlight}</p>
            
    </div>
    
   
  )
}

export default Highlight