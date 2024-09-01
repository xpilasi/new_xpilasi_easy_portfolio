import React from 'react'

const Column = (header,content) => {
  return (
    <div className='flex flex-col'>
        
        <div className=''>{/* HEADER */}
            {header}
        </div>

        <div className=''>{/* CONTENT */}
            {content}
        </div>

    </div>
  )
}

export default Column