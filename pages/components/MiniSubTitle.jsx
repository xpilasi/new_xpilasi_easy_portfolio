import React from 'react'

const MiniSubTitle = ({miniSubTitle}) => {

    const miniSubTitleStyle = 'text-xl lg:text-2xl md:text-2xl font-light py-1  text-neon-grey mt-10';
    
  return (


    <p className={`${miniSubTitleStyle}`}>{miniSubTitle}</p>
  )
}

export default MiniSubTitle