import React from 'react'
import Image  from 'next/image';

const SubTitle = ({srcSubtitle}) => {

    const subTitleStyle = 
                  `text-3xl lg:text-4xl md:text-4xl font-bold py-1 font-exo  
                   text-neon-water mt-10 text-left pl-10 bg-neon-blueberry leading-tight`;
    
  return (

    <Image src={srcSubtitle}/>
   
  )
}

export default SubTitle