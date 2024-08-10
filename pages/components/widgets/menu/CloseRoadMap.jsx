import React, { useEffect, useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoCloseSharp } from 'react-icons/io5';
import MenuTop from './MenuTop';

const CloseRoadMap = ({ darkMode, setDarkMode,showRoadMap, setShowRoadMap }) => {




    return (
     
      <div className={`fixed top-14 right-14 z-40`}>
      <div 
          className="flex flex-col items-center justify-center w-8 h-8 cursor-pointer "
          
      >
          <IoCloseSharp onClick={() => setShowRoadMap(!showRoadMap)} className='text-white tex-3xl'></IoCloseSharp>
         
      </div>
    </div>
      
        
    );
};

export default CloseRoadMap;