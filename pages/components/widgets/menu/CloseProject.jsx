import React, { useEffect, useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';


const CloseProject = ({ darkMode, setDarkMode,showProject, setShowProject }) => {


    return (
     
      <div className={`fixed top-14 right-14 z-40`}>
      <div 
          className="flex flex-col items-center justify-center w-8 h-8 cursor-pointer "
          
      >
          <IoCloseSharp 
            onClick={() => setShowProject(!showProject)} 
            className='text-white text-4xl hover:rotate-90 transition ease-in-out'>

            </IoCloseSharp>
         
      </div>
    </div>
      
        
    );
};

export default CloseProject;