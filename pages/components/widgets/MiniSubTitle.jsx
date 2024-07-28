import React from 'react'

const MiniSubTitle = ({miniSubTitle}) => {

    const miniSubTitleStyle = ' text-xl md:text-xl font-light py-1  text-neon-grey';
    
  return (


    <p className={`${miniSubTitleStyle}`}>{miniSubTitle}</p>
  )
}

export default MiniSubTitle