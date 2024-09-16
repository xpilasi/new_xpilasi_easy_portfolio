import React, { useEffect, useState } from 'react'
import gorillaGrabProject from '../../../public/img/projects_logos/app_design/Flying-iPhone-X-Mockups.png';
import justListProject from '../../../public/img/projects_logos/app_design/cozy-justlist-mockup_resized.png';
import Project from '../widgets/Project';
import vintageGroomProject from '../../../public/img/final_webs/vintage-groom-front.png';
import tonerelicsProject from '../../../public/img/projects_logos/web_design/tonerelics2.png';
import xpilasiPortfolioWebDesign from '../../../public/img/projects_logos/web_design/xpilasiPortfolioWebDesign.png'
import xpilasiPortfolioWebDesignL from '../../../public/img/projects_logos/web_design/front-xpilasi-portfolio-2.png';
import blockWebDesign from '../../../public/img/projects_logos/web_design/blockWebDesign.png'
import ejemplo from '../../../public/img/projects_logos/web_design/ejemplo.png'
import SectionTitle from '../widgets/titles/SectionTitle';
import SectionSubTitle from '../widgets/titles/SectionSubTitle';
import ProjectsDesc from './sublevel/ProjectsDesc';



const MyProjects = ({darkMode, showProject, setShowProject}) => {

  let xPilasiPortfolio = '';
  const projectContainerStyle = 'grid-item bg-new-neon rounded-xl px-5 py-10';
  const [projectVisible, setProjectVisible] = useState(0);
  const hoverScale110 = 'transform transition-transform hover:scale-95 cursor-pointer';

  useEffect(() => {
    setProjectVisible(0);
}, []);
  
  darkMode ? xPilasiPortfolio = xpilasiPortfolioWebDesignL : xPilasiPortfolio = xpilasiPortfolioWebDesign ;
 
  let visibleProject = (projectKey) => {

   
    console.log(`current project --> ${projectKey} `);
    setProjectVisible(projectKey);
  }
  return (

    <section className='min-h-screen flex flex-col justify-center items-center   ' id='my-projects' >

      <article>
        <ProjectsDesc showProject={showProject} setShowProject={setShowProject} keyProject={projectVisible}></ProjectsDesc>
      
        
      </article>
      
      <article className='flex flex-col justify-center items-center py-5 '>
      
      <SectionTitle titleText='Work gallery'></SectionTitle>
      <SectionSubTitle titleText="These are some of my personal projects I've been developed since I started my software journey."></SectionSubTitle>

      <div className={`grid grid-cols-1 md:grid md:grid-cols-2 gap-5`}>
       
              <span className={hoverScale110} ><Project 
                                                        onClick={() =>{setShowProject(!showProject); visibleProject(5)}} 
                                                        imageSrc={tonerelicsProject} 
                                                        projectName='Tone Relics' 
                                                        designType='Web Ecommerce'>
                                                      </Project></span>
              <span className={hoverScale110} ><Project 
                                                        onClick={() =>{setShowProject(!showProject); visibleProject(1)}} 
                                                        imageSrc={gorillaGrabProject} 
                                                        projectName='Gorilla Grab' 
                                                        designType='Mobile App'>
                                                      </Project></span>
              <span className={hoverScale110} ><Project 
                                                        onClick={() =>{setShowProject(!showProject); visibleProject(2)}} 
                                                        imageSrc={justListProject} 
                                                        projectName='Just List' 
                                                        designType='Mobile App'>
                                                      </Project></span>
              <span className={hoverScale110} ><Project 
                                                        onClick={() =>{setShowProject(!showProject); visibleProject(3)}} 
                                                        imageSrc={vintageGroomProject} 
                                                        projectName='Vintage Groom' 
                                                        designType='Web Design'>
                                                      </Project></span>
              <span className={hoverScale110} ><Project 
                                                        onClick={() =>{setShowProject(!showProject); visibleProject(4)}} 
                                                        imageSrc={xPilasiPortfolio} 
                                                        projectName='Personal Portfolio' 
                                                        designType='Web Design'>
                                                      </Project></span>
              
              
      </div>
            

      </article>
     

        
     </section>
  )
}

export default MyProjects