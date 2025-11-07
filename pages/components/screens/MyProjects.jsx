import React, { useEffect, useState } from 'react'
import gorillaGrabProject from '../../../public/img/projects_logos/app_design/Flying-iPhone-X-Mockups.png';
import justListProject from '../../../public/img/projects_logos/app_design/cozy-justlist-mockup_resized.png';
import activitierProject from '../../../public/img/final_webs/activitier.png';
import Project from '../widgets/Project';
import SectionTitle from '../../../components/widgets/titles/SectionTitle';
import SectionSubTitle from '../../../components/widgets/titles/SectionSubTitle';
import ProjectsDesc from './sublevel/ProjectsDesc';
import serieslabWebDesign from '../../../public/img/final_webs/serieslabportafolio.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';



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


      <SectionTitle titleText='Work gallery'></SectionTitle>
      <SectionSubTitle titleText="These are some of the projects I've been developed since I started my software journey."></SectionSubTitle>

      {/* Modern Carousel */}
      <div className="py-4 md:py-10 w-full max-w-full lg:max-w-7xl">
        <Swiper
          modules={[Pagination, Navigation, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={32}
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
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.1,
              spaceBetween: 12,
              centeredSlides: false,
              coverflowEffect: {
                depth: 0,
                modifier: 1,
              },
            },
            640: {
              slidesPerView: 1.1,
              spaceBetween: 12,
              centeredSlides: false,
              coverflowEffect: {
                depth: 0,
                modifier: 1,
              },
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 16,
              coverflowEffect: {
                depth: 50,
                modifier: 1,
              },
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 24,
              coverflowEffect: {
                depth: 80,
                modifier: 1,
              },
            },
            1280: {
              slidesPerView: 2,
              spaceBetween: 24,
              coverflowEffect: {
                depth: 100,
                modifier: 1,
              },
            },
            1536: {
              slidesPerView: 3,
              spaceBetween: 32,
              coverflowEffect: {
                depth: 100,
                modifier: 1,
              },
            }
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