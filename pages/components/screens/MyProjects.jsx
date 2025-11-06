import React, { useEffect, useState } from 'react'
import gorillaGrabProject from '../../../public/img/projects_logos/app_design/Flying-iPhone-X-Mockups.png';
import justListProject from '../../../public/img/projects_logos/app_design/cozy-justlist-mockup_resized.png';
import activitierProject from '../../../public/img/final_webs/activitier.png';
import Project from '../widgets/Project';
import SectionTitle from '../../../components/widgets/titles/SectionTitle';
import SectionSubTitle from '../../../components/widgets/titles/SectionSubTitle';
import ProjectsDesc from './sublevel/ProjectsDesc';
import serieslabWebDesign from '../../../public/img/final_webs/serieslabportafolio.png';
import { Splide, SplideSlide } from '@splidejs/react-splide';



const MyProjects = ({showProject, setShowProject}) => {

  const [projectVisible, setProjectVisible] = useState(0);

  useEffect(() => {
    setProjectVisible(0);
}, []);
 
  let visibleProject = (projectKey) => {

    setProjectVisible(projectKey);
  }

  const projects = [
    {
      id: 2,
      imageSrc: justListProject,
      projectName: 'Just List',
      designType: 'Mobile App'
    },
    
    {
      id: 3,
      imageSrc: activitierProject,
      projectName: 'Activitier',
      designType: 'Web App'
    },
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
    
    
  ];

  return (

    <section className='min-h-screen flex flex-col justify-center items-center overflow-x-hidden' id='my-projects' >

      <article>
        <ProjectsDesc showProject={showProject} setShowProject={setShowProject} keyProject={projectVisible}></ProjectsDesc>
      
        
        </article>
          <article className='flex flex-col justify-center items-center py-5 w-full overflow-hidden'>


      <SectionTitle titleText='Work gallery'></SectionTitle>
      <SectionSubTitle titleText="These are some of the projects I've been developed since I started my software journey."></SectionSubTitle>

      {/* Modern Carousel */}
      <div className="p-4 md:py-10 md:px-6 w-full max-w-full lg:max-w-7xl">
        <Splide
          options={{
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '2rem',
            padding: 0,
            focus: 0,
            pagination: true,
            arrows: true,
            drag: true,
            autoplay: false,
            interval: 3500,
            pauseOnHover: true,
            pauseOnFocus: true,
            resetProgress: false,
            height: 'auto',
            breakpoints: {
              1280: {
                perPage: 2,
                gap: '1.5rem',
                padding: 0,
              },
              1024: {
                perPage: 2.5,
                perMove: 1,
                gap: '1.5rem',
                padding: 0,
                focus: 0,
              },
              768: {
                perPage: 2.5,
                perMove: 1,
                gap: '1rem',
                padding: 0,
                focus: 0,
                arrows: false,
                drag: 'free',
              },
              640: {
                perPage: 1.2,
                perMove: 1,
                gap: '0.8rem',
                padding: 0,
                focus: 0,
                arrows: false,
                drag: 'free',
              }
            }
          }}
          className="projects-carousel"
        >
          {projects.map((project) => (
            <SplideSlide key={project.id}>
              <Project
                onClick={() => {setShowProject(!showProject); visibleProject(project.id)}}
                imageSrc={project.imageSrc}
                projectName={project.projectName}
                designType={project.designType}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
            

      </article>
     

        
     </section>
  )
}

export default MyProjects