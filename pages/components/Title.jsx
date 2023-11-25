import React from 'react'

const Title = ({title}) => {

    const titleStyle = 'text-5xl  lg:text-6xl md:text-4xl  py-1 font-bogartRegular text-neon-pink mt-10';
  return (


    <h1 className={`${titleStyle}`}>{title}</h1>
  )
}

export default Title