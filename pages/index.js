
import { Inter } from 'next/font/google'
import { useState } from 'react';
import MyStory from './components/screens/MyStory';
import MyProjects from './components/screens/MyProjects';
import IntroXp from './components/screens/IntroXp';
import favicon from '../public/img/icons/favicon_xp.png';
import ContactForm from './components/screens/ContactForm';
import Footer from './components/screens/Footer';
import ScrollButton from './components/widgets/ScrollButton';
import Presentation from './components/screens/Presentation';
import MySkills from './components/screens/MySkills';
import MenuBurger from './components/widgets/menu/MenuBurger';
import Menu from './components/widgets/menu/MenuTop';
import Roadmap from './components/screens/sublevel/Roadmap';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [darkMode, setDarkMode] =  useState(true);
  const [showMenu, setShowMenu] =  useState(true);
  const [showRoadMap, setShowRoadMap] =  useState(false);
  const [showProject, setShowProject] =  useState(false);
  
  const blueberryMain = "bg-white font-exo  bg-fixed px-10 md:px-20 lg:px-40 dark:bg-gradient-to-b dark:from-black dark:to-dark-neon-fade dark:text-white";
  const blackMain = "bg-almost-white font-interDisplayLight  text-zinc-800 bg-fixed px-10 md:px-20 lg:px-40 dark:bg-black dark:text-white";
 

  return (
    <div className={darkMode ? 'dark' : ''}>

      
        <title>Xavier Pilasi Portfolio</title>
        
        <meta name='description' content='"Generated by me'></meta>
        <link rel='icon' href='../public/img/icons/favicon_xp.png' />
        
      

    <main className={blackMain}
>     
     <Roadmap showRoadMap={showRoadMap} setShowRoadMap={setShowRoadMap}></Roadmap>
     
     <MenuBurger darkMode = {darkMode} showMenu = {showMenu} setShowMenu = {setShowMenu}></MenuBurger>
     <Menu darkMode = {darkMode} showMenu = {!showMenu} setShowMenu = {setShowMenu} ></Menu>
     <IntroXp darkMode = {darkMode} setDarkMode = {setDarkMode} showMenu = {showMenu} ></IntroXp>
     <Presentation darkMode={darkMode} showRoadMap={showRoadMap} setShowRoadMap={setShowRoadMap}/>
     <MyProjects darkMode={darkMode} showProject={showProject} setShowProject={setShowProject} />
     <ContactForm darkMode={darkMode}/>
     <Footer/>
     <ScrollButton />

     
     </main>

    </div>
    
  )
}
