import React from 'react'

const TextHighlited = ({text}) => {

    const gradientText = 'bg-gradient-to-r from-neon-orange  via-neon-blueberry to-neon-water   inline-block text-transparent bg-clip-text ';

  return (
    <span className={gradientText}>{text}</span>
  )
}

export default TextHighlited