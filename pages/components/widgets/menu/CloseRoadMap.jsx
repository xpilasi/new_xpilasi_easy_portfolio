import React, { useEffect, useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoCloseSharp } from 'react-icons/io5';
import MenuTop from '../../../../components/MenuTop';

const CloseRoadMap = ({ darkMode, setDarkMode,showRoadMap, setShowRoadMap }) => {




    return (

      <div className='fixed top-6 right-6 md:top-8 md:right-8 z-50'>
        <button
          onClick={() => setShowRoadMap(!showRoadMap)}
          className='flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 dark:from-indigo-600 dark:to-purple-600 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer'
        >
          <IoCloseSharp
            className='text-white text-2xl transition-transform duration-300 hover:rotate-90'
          />
        </button>
      </div>

    );
};

export default CloseRoadMap;