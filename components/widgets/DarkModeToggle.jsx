import React from 'react';
import useMenuStore from '@/store/menuStore';

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useMenuStore();

  return (
    <div className="fixed top-6 left-4 md:left-10 z-40">
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