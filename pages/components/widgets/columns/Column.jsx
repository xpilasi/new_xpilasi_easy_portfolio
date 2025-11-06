import React from 'react'

const Column = ({header,content}) => {
  return (
    <div className='flex flex-col'>

        <div className='text-gray-600 dark:text-gray-400 font-light text-xs md:text-sm mb-2'>{/* HEADER */}
            {header}
        </div>

        <div className='text-gray-900 dark:text-white font-semibold text-sm md:text-base pb-8'>{/* CONTENT */}
            {content}
        </div>

    </div>
  )
}

export default Column