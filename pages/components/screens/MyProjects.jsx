import React, { useEffect, useState } from 'react'
import gorillaGrabProject from '../../../public/img/projects_logos/app_design/Flying-iPhone-X-Mockups.png';
import justListProject from '../../../public/img/projects_logos/app_design/cozy-justlist-mockup_resized.png';
import activitierProject from '../../../public/img/final_webs/activitier.png';
import goodRootsWeb from '../../../public/img/final_webs/good-roots.png';
import Project from '../widgets/Project';
import SectionHeader from '../../../components/widgets/SectionHeader';
import ProjectsDesc from './sublevel/ProjectsDesc';
import serieslabWebDesign from '../../../public/img/final_webs/serieslabportafolio.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import rockVibesWeb from '@/public/img/final_webs/rockvibes.png'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const MyProjects = ({showProject, setShowProject}) => {

  const [projectVisible, setProjectVisible] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    setProjectVisible(0);
}, []);

  let visibleProject = (projectKey) => {

    setProjectVisible(projectKey);
  }

  const projects = [
    
    
    {
      id: 3,
      imageSrc: activitierProject,
      projectName: 'Activitier',
      designType: 'Web App'
    },
    {
      id: 6,
      imageSrc: rockVibesWeb,
      projectName: 'Rock Vibes',
      designType: 'Web Design'
    },
    {
      id: 5,
      imageSrc: goodRootsWeb,
      projectName: 'Good Roots',
      designType: 'Web Design'
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
    
    {
      id: 2,
      imageSrc: justListProject,
      projectName: 'Just List',
      designType: 'Mobile App'
    },
    
    
  ];

  return (

    <section className='min-h-screen flex flex-col justify-center items-center overflow-x-hidden' id='my-projects' >

      <article>
        <ProjectsDesc showProject={showProject} setShowProject={setShowProject} keyProject={projectVisible}></ProjectsDesc>
      
        
        </article>
          <article className='flex flex-col justify-center items-center py-5 w-full overflow-hidden'>

      <SectionHeader
        title="Work gallery"
        subtitle="A selection of projects I’ve built so far."
      />

      {/* Modern Carousel */}
      <div className="py-4 md:py-10 w-full max-w-full lg:max-w-7xl px-4">
        <Swiper
          modules={[Pagination, Navigation]}
          grabCursor={true}
          centeredSlides={false}
          slidesPerView={4}
          spaceBetween={24}
          loop={false}
          initialSlide={0}
          watchSlidesProgress={true}
          pagination={{
            clickable: true,
            dynamicBullets: false,
          }}
          navigation={false}
          onSliderMove={() => setIsDragging(true)}
          onTouchEnd={() => setTimeout(() => setIsDragging(false), 50)}
          onSliderFirstMove={() => setIsDragging(true)}
          breakpoints={{
            320: {
              slidesPerView: 1.1,
              spaceBetween: 12,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          className="projects-swiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <Project
                onClick={() => {
                  if (!isDragging) {
                    setShowProject(!showProject);
                    visibleProject(project.id);
                  }
                }}
                imageSrc={project.imageSrc}
                projectName={project.projectName}
                designType={project.designType}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
            

      </article>
     

        
     </section>
  )
}

export default MyProjects