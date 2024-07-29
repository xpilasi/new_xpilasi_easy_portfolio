import React from 'react'
import Image  from 'next/image';
import gorillaWeb from '../../../public/img/projects_logos/gorillaGrabLogoSVG.svg'
import justList from '../../../public/img/projects_logos/justListLogoSVGFinal.svg'
import barberWeb from '../../../public/img/projects_logos/vintageGroomLogoSVG.svg'
import Title from '../widgets/Title';
import MiniSubTitle from '../widgets/MiniSubTitle';
import { motion } from 'framer-motion';



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
      
      <div className='pb-10'>
      <MiniSubTitle miniSubTitle = {"I'm a really enthousiastic person and also a fast learner. I've worked with several tecnologies for different purposes."}/>
      </div>
        
        
           
      

      <article className='flex flex-col lg:items-start items-center  w-full text-white'>
      <motion.div
          className='grid lg:grid-cols-2 bg-neon-pink  rounded-xl'
          id='languajes'
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariantsLeft}
        >
          <p className='flex justify-center items-center   px-10 h-40 text-3xl'>LANGUAJES</p>
          <p className='flex justify-center  items-center  px-10 h-40'>This is a text description: my skills</p>
      </motion.div>
        
      </article> 
      
      <article className='mt-20 flex flex-col lg:items-end items-center  w-full text-white'>
      <motion.div
          className='grid lg:grid-cols-2 bg-neon-blueberry rounded-xl'
          id='frameworks'
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariantsLeft}
        >
          <p className='flex justify-center items-center   px-10 h-40 text-3xl'>FRAMEWORKS</p>
          <p className='flex justify-center items-center   px-10 h-40'>This is a text description: my skills</p>
      </motion.div>
      </article> 

      <article className='mt-20 flex flex-col lg:items-start items-center w-full text-white'>
      <motion.div
          className='grid lg:grid-cols-2 bg-dark-neon-fade rounded-xl'
          id='databases'
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariantsLeft}
        >
          <p className='flex justify-center items-center  px-10 h-40 text-3xl'>DATABASES</p>
          <p className='flex justify-center items-center px-10 h-40'>This is a text description: my skills</p>
      </motion.div>
      </article>
          
        
        
      
            

     
     

        
     </section>
  )
}

export default MySkills