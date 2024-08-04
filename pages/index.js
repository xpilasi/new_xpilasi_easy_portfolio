
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
import MenuTop from './components/widgets/MenuTop';
import MySkills from './components/screens/MySkills';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [darkMode, setDarkMode] = useState(true);
  
  const blueberryMain = "bg-white font-exo  bg-fixed px-10 md:px-20 lg:px-40 dark:bg-gradient-to-b dark:from-black dark:to-dark-neon-fade dark:text-white";
  const blackMain = "bg-almost-white font-interDisplayLight  text-dark-neon bg-fixed px-10 md:px-20 lg:px-40 dark:bg-black dark:text-white";
  

  return (
    <div className={darkMode ? 'dark' : ''}>

      
        <title>Xavier Pilasi Portfolio</title>
        
        <meta name='description' content='"Generated by me'></meta>
        <link rel='icon' href='../public/img/icons/favicon_xp.png' />
        
      

    <main className={blackMain}
>
     <MenuTop
     
     darkMode = {darkMode}
     setDarkMode = {setDarkMode}
     ></MenuTop>
     <IntroXp
     
     darkMode = {darkMode}
     setDarkMode = {setDarkMode}
     ></IntroXp>
     <Presentation darkMode={darkMode}/>

     {/* <MyStory darkMode = {darkMode}/>
     <MySkills darkMode = {darkMode}/> */}
     <MyProjects darkMode={darkMode}/>
     <ContactForm darkMode={darkMode}/>
     <Footer/>
     <ScrollButton />

     
     </main>

    </div>
    
  )
}
