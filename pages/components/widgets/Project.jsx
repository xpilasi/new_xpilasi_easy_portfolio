import React from 'react'
import Image  from 'next/image';


const Project = ({

    imageSrc,
    designType,
    projectName,
    onClick
}) => {

    return (

        <div className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer h-full bg-white dark:bg-slate-900`} onClick={onClick} >
              <div className="relative overflow-hidden">
                <Image className='transform group-hover:scale-110 transition-transform duration-700' src={imageSrc} alt=''  layout='responsive'></Image>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="bg-white dark:bg-slate-900 py-4 px-4">
                <p className='text-indigo-600 dark:text-indigo-400 font-medium text-xs uppercase tracking-wider mb-1'>{designType}</p>
                <p className='text-gray-900 dark:text-white font-semibold text-base group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors duration-300'>{projectName}</p>
              </div>
              <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-indigo-500/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 dark:text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              </div>
    )
} 
export default  Project