import React from 'react';
import useMenuStore from '@/store/menuStore';

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useMenuStore();

  return (
    <div className="fixed  lg:top-14 lg:left-14 z-40 top-10 left-10">
      <button
        onClick={toggleDarkMode}
        className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out
          ${!darkMode ? 'bg-zinc-600' : 'bg-white'}`}
      >
        <div
          className={`w-4 h-4 rounded-full transition-transform duration-300 ease-in-out
            ${!darkMode ? 'bg-white translate-x-6' : 'bg-zinc-600 translate-x-0'}`}
        />
      </button>
    </div>
  );
};

export default DarkModeToggle; 