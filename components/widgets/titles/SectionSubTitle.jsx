import React from 'react'
import useMenuStore from '@/store/menuStore.js';

const SectionSubTitle = ({titleText}) => {

  const { darkMode } = useMenuStore();
    
  return (
     
    <h2 className={`${darkMode ? 'text-emerald-400' : 'text-dark-neon-fade'} font-interdisplayLight text-md pb-12 tracking-wider `}>
        {titleText}
    </h2>
    
   
  )
}

export default SectionSubTitle