import React from 'react'

const Column = (header,content) => {
  return (
    <div className='flex flex-col'>
        
        <div className='text-zinc-500 font-interDisplayLight'>{/* HEADER */}
            {header}
        </div>

        <div className='text-white font-interdisplayLight  pb-12 tracking-wider'>{/* CONTENT */}
            {content}
        </div>

    </div>
  )
}

export default Column