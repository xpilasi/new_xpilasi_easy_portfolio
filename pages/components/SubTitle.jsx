import React from 'react'

const SubTitle = ({subTitle}) => {

    const subTitleStyle = 'text-3xl lg:text-4xl md:text-4xl font-bold py-1 font-bogartRegular text-neon-water mt-10';
    
  return (


    <h1 className={`${subTitleStyle}`}>{subTitle}</h1>
  )
}

export default SubTitle