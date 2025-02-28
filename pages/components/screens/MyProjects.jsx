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
import SectionTitle from '../../../components/widgets/titles/SectionTitle';
import SectionSubTitle from '../../../components/widgets/titles/SectionSubTitle';
import ProjectsDesc from './sublevel/ProjectsDesc';
import serieslabWebDesign from '../../../public/img/final_webs/serieslabportafolio.png'
import useMenuStore from '@/store/menuStore.js';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';



const MyProjects = ({showProject, setShowProject}) => {

  const { darkMode } = useMenuStore();

  let xPilasiPortfolio = '';
  const projectContainerStyle = 'grid-item bg-new-neon rounded-xl px-5 py-10';
  const [projectVisible, setProjectVisible] = useState(0);
  const hoverScale110 = 'transform transition-transform hover:scale-95 cursor-pointer';

  useEffect(() => {
    setProjectVisible(0);
}, []);
  
  darkMode ? xPilasiPortfolio = xpilasiPortfolioWebDesignL : xPilasiPortfolio = xpilasiPortfolioWebDesign ;
 
  let visibleProject = (projectKey) => {

    setProjectVisible(projectKey);
  }

  const projects = [
    {
      id: 4,
      imageSrc: serieslabWebDesign,
      projectName: 'Serieslab',
      designType: 'Web App'
    },
    {
      id: 1,
      imageSrc: gorillaGrabProject,
      projectName: 'Gorilla Grab',
      designType: 'Mobile App'
    },
    {
      id: 2,
      imageSrc: justListProject,
      projectName: 'Just List',
      designType: 'Mobile App'
    },
    {
      id: 3,
      imageSrc: vintageGroomProject,
      projectName: 'Vintage Groom',
      designType: 'Web Design'
    }
  ];

  return (

    <section className='h-screen flex flex-col justify-center items-center   ' id='my-projects' >

      <article>
        <ProjectsDesc showProject={showProject} setShowProject={setShowProject} keyProject={projectVisible}></ProjectsDesc>
      
        
        </article>
          <article className='flex flex-col justify-center items-center py-5'>
        
      
      <SectionTitle titleText='Work gallery'></SectionTitle>
      <SectionSubTitle titleText="These are some of the projects I've been developed since I started my software journey."></SectionSubTitle>

      {/* Mobile Slider */}
      <div className="md:hidden w-full  ">
        <Splide
          options={{
            perPage: 1,
            gap: '1rem',
            arrows: true,
            pagination: false,
            drag: true,
            type: 'loop'
          }}
        >
          {projects.map((project) => (
            <SplideSlide key={project.id}>
              <span className={hoverScale110}>
                <Project
                  onClick={() => {setShowProject(!showProject); visibleProject(project.id)}}
                  imageSrc={project.imageSrc}
                  projectName={project.projectName}
                  designType={project.designType}
                />
              </span>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-2 gap-5 md:w-2/3 lg:w-1/2">
        {projects.map((project) => (
          <span key={project.id} className={hoverScale110}>
            <Project
              onClick={() => {setShowProject(!showProject); visibleProject(project.id)}}
              imageSrc={project.imageSrc}
              projectName={project.projectName}
              designType={project.designType}
            />
          </span>
        ))}
      </div>
            

      </article>
     

        
     </section>
  )
}

export default MyProjects