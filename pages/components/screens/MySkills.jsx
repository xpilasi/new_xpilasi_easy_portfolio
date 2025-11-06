import React from 'react'
import Image  from 'next/image';
import db from '../../../public/img/icons/dbSVG.svg';
import languajes from '../../../public/img/icons/languajesSVG.svg';
import frameworks from '../../../public/img/icons/frameworksSVG.svg';
import Title from '../widgets/Title';
import MiniSubTitle from '../widgets/MiniSubTitle';
import { motion } from 'framer-motion';
import Svg from '../widgets/Svg';
import { FaDatabase } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { IoCube } from "react-icons/io5";




const MySkills = ({darkMode}) => {

  let textColor = 'text-white';

  
  
  const containerVariantsLeft = {
    hidden: { opacity: 0, x: '-100%' },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: custom }
    })
  };

  const containerVariantsRight = {
    hidden: { opacity: 0, x: '100%' },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: custom }
    })
  };
  const projectContainerStyle = 'grid-item bg-new-neon rounded-lg px-5 py-10';

  return (
    <section className='min-h-screen grid lg:grid-cols-2 gap-5 justify-center items-center  ' id='my-skills' >


      <div className=''>
      <MiniSubTitle miniSubTitle = {"I'm a really enthousiastic person and also a fast learner. I've worked with several tecnologies for different purposes."}/>
      </div>


      <div className=' '>
      
        
      <article className=' flex flex-col lg:items-start items-center  w-full text-white'>
      <div className='w-80 '>
      <motion.div
          className='group flex flex-col items-center bg-gradient-to-br from-indigo-500 to-purple-500 dark:from-indigo-600 dark:to-purple-600 rounded-2xl w-full h-36 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer backdrop-blur-sm'
          id='languajes'
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariantsLeft}
        >
          <p className='flex justify-center items-center px-10 pt-5 transform group-hover:scale-110 transition-transform duration-300 text-white'><FaCode className = 'text-6xl'/></p>
          <p className='flex justify-center items-center px-10 text-3xl pb-5 font-semibold tracking-wide text-white'>LANGUAJES</p>
      </motion.div>
      </div>

      </article> 
      
      <article className='mt-10 flex flex-col lg:items-end items-center  w-full text-white'>
      <div className='w-80'>
      <motion.div
          className='group flex flex-col items-center bg-gradient-to-br from-purple-500 to-indigo-400 dark:from-purple-600 dark:to-indigo-500 rounded-2xl w-full h-36 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer backdrop-blur-sm'
          id='frameworks'
          custom={0.25}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariantsLeft}
        >
          <p className='flex justify-center items-center px-32 text-3xl pt-5 transform group-hover:scale-110 transition-transform duration-300 text-white'><IoCube className = 'text-6xl'/></p>
          <p className='flex justify-center items-center text-3xl pb-5 font-semibold tracking-wide text-white'>FRAMEWORKS</p>
      </motion.div>
      </div>

      </article> 

      <article className='mt-10 flex flex-col lg:items-start items-center  w-full text-white'>
        <div className='w-80 l'>
        <motion.div
          className='group flex flex-col items-center bg-gradient-to-br from-indigo-400 to-purple-400 dark:from-indigo-500 dark:to-purple-500 rounded-2xl w-full h-36 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer backdrop-blur-sm'
          id='databases'
          custom={0.5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariantsLeft}
        >
          <p className='flex justify-center items-center px-36 text-3xl pt-8 pb-1 transform group-hover:scale-110 transition-transform duration-300 text-white'><FaDatabase className = 'text-5xl'/></p>
          <p className='flex justify-center items-center text-3xl pb-5 font-semibold tracking-wide text-white'>DATABASES</p>
      </motion.div>
        </div>

      </article>
      </div>
      
          
        
        
      
            

     
     

        
     </section>
  )
}

export default MySkills;