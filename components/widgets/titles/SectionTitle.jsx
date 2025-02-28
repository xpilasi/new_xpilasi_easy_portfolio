import React from 'react'
import useMenuStore from '@/store/menuStore.js';


const SectionTitle = ({titleText}) => {

  const { darkMode } = useMenuStore();
    
  return (
     
    <h2 className={`${darkMode ? 'text-white' : 'text-gray-800'} font-interdisplayLight text-4xl pb-5 font-bold`}>
        {titleText}
    </h2>
    
   
  )
}

export default SectionTitle