import React, { useEffect, useState } from 'react';
// Try absolute paths to verify the issue
import MenuBurger from '../MenuBurger';
import Menu from '../MenuTop';
import Footer from '../Footer';
import DarkModeToggle from '../widgets/DarkModeToggle';
import useMenuStore from '../../store/menuStore';

const MainLayout = ({ children }) => {
  const [isClient, setIsClient] = useState(false);
  const { showMenu, darkMode } = useMenuStore();
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Let's try rendering just one component at a time
  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen dark:bg-gradient-to-r dark:from-gray-800 dark:to-black bg-gradient-to-r from-white to-gray-100 text-gray-800 dark:text-white px-4 md:px-10">
        {isClient && (
          <>
            <DarkModeToggle />
            <MenuBurger />
            <Menu />
          </>
        )}
        <main className="pb-20">
          {children}
        </main>
        {isClient && <Footer />}
      </div>
    </div>
  );
};

export default MainLayout;