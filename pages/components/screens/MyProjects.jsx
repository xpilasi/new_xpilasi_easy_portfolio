import React from 'react'
import Image  from 'next/image';
import gorillaWeb from '../../../public/img/projects_logos/app_design/gorillaGrapAppDesign.png'
import justList from '../../../public/img/projects_logos/app_design/justlistAppDesign.png'
import barberWeb from '../../../public/img/projects_logos/vintageGroomLogoSVG.svg'
import db from '../../../public/img/icons/dbSVG.svg';
import Title from '../widgets/Title';
import MiniSubTitle from '../widgets/MiniSubTitle';
import Project from '../widgets/Project';
import vintageGroomWebDesign from '../../../public/img/projects_logos/web_design/vintageGroomWebDesign.png'
import xpilasiPortfolioWebDesign from '../../../public/img/projects_logos/web_design/xpilasiPortfolioWebDesign.png'
import xpilasiPortfolioWebDesignL from '../../../public/img/projects_logos/web_design/xpilasiPortfolioWebDesignLight.png'
import blockWebDesign from '../../../public/img/projects_logos/web_design/blockWebDesign.png'
import ejemplo from '../../../public/img/projects_logos/web_design/ejemplo.png'
import SectionTitle from '../widgets/titles/SectionTitle';
import SectionSubTitle from '../widgets/titles/SectionSubTitle';




const MyProjects = ({darkMode, showProject, setShowProject}) => {

  const projectContainerStyle = 'grid-item bg-new-neon rounded-xl px-5 py-10';
  let xPilasiPortfolio = '';
  
  darkMode ? xPilasiPortfolio = xpilasiPortfolioWebDesignL : xPilasiPortfolio = xpilasiPortfolioWebDesign ;
  const hoverScale110 = 'transform transition-transform hover:scale-105';
  
  return (
    <section className='min-h-screen flex flex-col justify-center items-center ' id='my-projects' >
      
      <article className='flex flex-col justify-center items-center py-5 '>
      
      <SectionTitle titleText='Work gallery'></SectionTitle>
      <SectionSubTitle titleText="These are some of my personal projects I've been developed since I started my software journey."></SectionSubTitle>

      <div className='grid grid-cols-1 md:grid md:grid-cols-3 gap-5 '>
              <a className={hoverScale110} href=""><Project  imageSrc={gorillaWeb} projectName='Gorilla Grab' designType='Mobile App'></Project></a>
              <a className={hoverScale110} href=""><Project imageSrc={justList} projectName='Just List' designType='Mobile App'></Project></a>
              <a className={hoverScale110} href=""><Project imageSrc={vintageGroomWebDesign} projectName='Vintage Groom' designType='Web design'></Project></a>
              <a className={hoverScale110} href=""><Project imageSrc={xPilasiPortfolio} projectName='Personal Portfolio' designType='Web design'></Project></a>
              <a className={hoverScale110} href=""><Project imageSrc={blockWebDesign} projectName='Block Disctrict' designType='Web design'></Project></a>
              <a className={hoverScale110} href=""><Project imageSrc={ejemplo} projectName='Block Disctrict' designType='Web design'></Project></a>
      </div>
            

      </article>
     

        
     </section>
  )
}

export default MyProjects