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
    <section className='min-h-screen flex flex-col justify-center items-center ' id='my-skills' >
      
      <div className=''>
      <MiniSubTitle miniSubTitle = {"I'm a really enthousiastic person and also a fast learner. I've worked with several tecnologies for different purposes."}/>
      
      </div>
        
      <article className='mt-10 flex flex-col lg:items-start items-center  w-full text-white'>
      <div className='w-80 '>
      <motion.div
          className='flex flex-col items-center bg-neon-pink rounded-xl w-full h-44'
          id='languajes'
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariantsLeft}
        >
          <p className='flex justify-center items-center   px-10 pt-5 '><FaCode className = ' text-7xl '/> </p>
          <p className='flex justify-center  items-center  px-10 text-3xl pb-5'>LANGUAJES</p>
      </motion.div>
      </div>
        
      </article> 
      
      <article className='mt-5 flex flex-col lg:items-end items-center  w-full text-white'>
      <div className='w-80 '>
      <motion.div
          className='flex flex-col items-center bg-neon-blueberry rounded-xl w-full h-44 '
          id='frameworks'
          custom={0.25}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariantsLeft}
        >
          <p className='flex justify-center items-center px-32  text-3xl pt-5'><IoCube className = 'text-8xl'/></p>
          <p className='flex justify-center items-center    text-3xl pb-5'>FRAMEWORKS</p>
      </motion.div>
      </div>
      
      </article> 

      <article className='mt-5 flex flex-col lg:items-start items-center  w-full text-white'>
        <div className='w-80'>
        <motion.div
          className='flex flex-col items-center bg-dark-neon-fade rounded-xl w-full h-44'
          id='databases'
          custom={0.5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariantsLeft}
        >
          <p className='flex justify-center items-center px-36  text-3xl pt-8 pb-1'><FaDatabase className = 'text-7xl'/></p>
          <p className='flex justify-center items-center  text-3xl pb-5'>DATABASES</p>
      </motion.div>
        </div>
      
      </article>
          
        
        
      
            

     
     

        
     </section>
  )
}

export default MySkills;