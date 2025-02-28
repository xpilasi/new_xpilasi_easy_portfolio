import React, { useEffect, useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoCloseSharp } from 'react-icons/io5';
import MenuTop from '../../../../components/MenuTop';

const CloseRoadMap = ({ darkMode, setDarkMode,showRoadMap, setShowRoadMap }) => {




    return (
     
      <div className={`fixed lg:top-14 top-5 lg:right-14 right-5 z-40`}>
      <div 
          className="flex flex-col items-center justify-center w-8 h-8 cursor-pointer "
          
      >
          <IoCloseSharp 
            onClick={() => setShowRoadMap(!showRoadMap)} 
            className='text-white text-4xl hover:rotate-90 transition ease-in-out'>

            </IoCloseSharp>
         
      </div>
    </div>
      
        
    );
};

export default CloseRoadMap;