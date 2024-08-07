import React from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoCloseSharp } from 'react-icons/io5';
import MenuTop from './MenuTop';

const MenuBurger = ({ darkMode, setDarkMode, showMenu, setShowMenu }) => {
    return (
        <div>
            {showMenu ? (
              <div className=' '>
                  <div className='bg-zinc-900  flex flex-col top-5 right-14 fixed z-50 '>
                    <div className='flex justify-end items-end mt-5 mr-5 '>
                      <IoCloseSharp
                            onClick={() => setShowMenu(!showMenu)}
                            className='cursor-pointer text-white text-4xl lg:text-4xl'
                        />
                    </div>
                    <div className='flex justify-end'>
                    <MenuTop showMenu={showMenu} darkMode={darkMode} setDarkMode={setDarkMode} />
                    </div>
                    
                  </div>

              </div>
                
            ) : (
              
                <div className='  flex flex-col top-5 right-14 fixed'>
                  <div className='flex justify-end items-end mt-5 mr-5'>
                    <HiMenuAlt3
                        onClick={() => setShowMenu(!showMenu)}
                        className='cursor-pointer text-white text-4xl lg:text-4xl'
                    />
                  </div>
                    <MenuTop showMenu={showMenu} darkMode={darkMode} setDarkMode={setDarkMode} />
                </div>
              

                
            )}
        </div>
    );
};

export default MenuBurger;