
import { Inter } from 'next/font/google'
import { useState } from 'react';
import MyStory from './components/MyStory';
import MyProjects from './components/MyProjects';
import IntroXp from './components/IntroXp';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ScrollButton from './components/ScrollButton';





const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [darkMode, setDarkMode] = useState(true);
  
  const blueberryMain = "bg-white  font-titillumWebRegular bg-fixed px-10 md:px-20 lg:px-40 dark:bg-gradient-to-b dark:from-black dark:to-dark-neon-fade dark:text-white";
  const blackMain = "bg-almost-white font-exo bg-fixed px-10 md:px-20 lg:px-40 dark:bg-neon-grey dark:text-white";
  

  return (
    <div className={darkMode ? 'dark' : ''}>

      
        <title>Xavier Pilasi Portfolio</title>
        
        <meta name='description' content='"Generated by me'></meta>
        <link rel='icon' href='../public/favicon.icon' />
      

    <main className={blackMain}
>
     <IntroXp
     darkMode = {darkMode}
     setDarkMode = {setDarkMode}
     ></IntroXp>

     <MyStory/>
     <MyProjects/>
     <ContactForm darkMode={darkMode}/>
     <Footer/>
     <ScrollButton />

     
     </main>

    </div>
    
  )
}
