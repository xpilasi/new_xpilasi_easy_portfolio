import React from 'react'

const Title = ({title}) => {
    const gradientText = 'bg-gradient-to-r from-neon-orange  via-neon-blueberry to-neon-water inline-block text-transparent bg-clip-text ';
    const titleStyle = `text-3xl  lg:text-6xl md:text-4xl  py-1 font-bogartRegular ${gradientText} mt-0`;
    
  return (


    <h1 className={`${titleStyle}`}>{title}</h1>
  )
}

export default Title