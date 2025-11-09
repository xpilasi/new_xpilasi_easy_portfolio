import React, { useEffect, useState } from 'react';
import Road from '../../widgets/Road';
import RoadmapTitle from '../../../../components/widgets/titles/RoadmapTitle';
import RoadmapSubTitle from '../../../../components/widgets/titles/RoadmapSubTitle';
import RoadmapTopTitle from '../../../../components/widgets/titles/RoadmapTopTitle';
import CloseRoadMap from '../../widgets/menu/CloseRoadMap';
import Image from 'next/image';
import ExampleImg from '../../../../public/img/final_webs/barber.png';
import GeneralFeatures from './GeneralFeatures';
import Features from './Features';
import ButtonGreenWhite from '../../../../components/widgets/buttons/ButtonGreenWhite';
import gorillaGrabProject from '../../../../public/img/projects_logos/app_design/gorilla_mockup_main_2.png';
import justlistAppDesign from '../../../../public/img/projects_logos/web_design/justlist_mockup_3png.png';
import vintageGroomDesign from '../../../../public/img/final_webs/vintage-groom.png';
import xpPortfolio from '../../../../public/img/final_webs/templatePortfolio-xp.png';
import Bullet from '../../widgets/Bullet';
import goodRootsScreens from '../../../../public/img/projects/good-roots.png';
import { Wendy_One } from 'next/font/google';
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai';
import CustomSwiper from '../../widgets/CustomSwiper';
import { Suspense } from 'react';
import serieslabWeb from '../../../../public/img/final_webs/serieslabportafolio.png'
import activitierWeb from '@/public/img/projects/activitier-inside.png'

const ProjectsDesc = ({showProject, setShowProject, keyProject}) => {

    const [isVisible, setIsVisible] = useState(showProject);
    const [imageLoaded, setImageLoaded] = useState(false);
    const designDesc = 'Project and structure previously designed in Figma';
    const tailwindDesc = 'General structure made with Tailwind CSS';
    const cssDesc = 'Specific components made with CSS';
    

    const projects = 

    [
      {
        projectKey: 1,
        code: 'mobile',
        name : 'GorillaGrab',
        type: 'Mobile App',
        description: 'Create a user to start tracking your climbing trainings:  create independent Trainings with independent exercises within. Compare your historic records, compare your current record with your last records so you can easily understand how your level is evolving. Control your total training hours within specific time periods. ',
        year: 2023,
        designDesc: designDesc,
        cssLibrary: '-',
        css: '-',
        framework: `Flutter`,
        language: 'Dart',
        backend:'Firebase',
        imgSrc:gorillaGrabProject,
        imgSwiper: [gorillaGrabProject,gorillaGrabProject],
        url:'https://drive.google.com/file/d/1-xzam17uKIzBzUH3HmMW_7knXPtk9siO/view?usp=sharing',
        repositoryUrl:'https://github.com/xpilasi/gorilla_grab',

      },
      {
        projectKey: 2,
        code: 'mobile',
        name : 'JustList',
        type: 'Mobile App',
        description: "With this super easy and light App you can create budget lists and manage them by adding and editing the items. You can save the purchase and reuse each list in the future." ,
        year: 2023,
        designDesc: designDesc,
        cssLibrary: '-',
        css: '-',
        framework: `Flutter`,
        language: 'Dart',
        backend:'Hive',
        imgSrc:justlistAppDesign,
        imgSwiper: [justlistAppDesign,gorillaGrabProject],
        url:'https://drive.google.com/file/d/1MPDDd4N0kqO78msDHO_YvBIWH4EzHi-A/view?usp=drive_link',
        repositoryUrl:'https://github.com/xpilasi/just_list_app'
      },
      {
        projectKey: 3,
        code: 'web',
        name : 'Activitier',
        type: 'Web App',
        description: 'Automate bookings, increase revenue, and enhance guest experiences with our comprehensive activity management platform designed specifically for hotels.',
        year: 2025,
        designDesc: designDesc,
        cssLibrary: 'Design made with Tailwind CSS ',
        css: '-',
        framework: `Vue 3`,
        language: 'Javascript',
        backend:'Supabase',
        imgSrc:activitierWeb,
        imgSwiper: [activitierWeb,activitierWeb],
        url:'https://absmanager.netlify.app',
        repositoryUrl:'https://github.com/xpilasi/'
      },
      {
        projectKey: 4,
        code: 'web',
        name : 'Serieslab',
        type: 'Web Design',
        description: 'SeriesLab is a web application developed as the final project for our Frontend Development certification at LaSalle. The goal is to provide a complete experience for users to search, review, and explore TV series.',
        year: 2024,
        designDesc: designDesc,
        cssLibrary: 'General structure made with Tailwind CSS',
        css: '-',
        framework: `Vue.js`,
        language: 'Javascript',
        backend:'Firebase/Firestore',
        imgSrc:serieslabWeb,
        imgSwiper: [gorillaGrabProject,gorillaGrabProject],
        url:'https://theserieslab.netlify.app',
        repositoryUrl:'https://github.com/xpilasi/serieslab'
      },
      {
        projectKey: 5,
        code: 'web',
        name : 'Good Roots',
        type: 'Web Design',
        description: 'Modern, fully responsive Single-Page Application crafted for the restaurant chain Good Roots, seamlessly integrating tailored menu management and an inviting UX.',
        year: 2025,
        designDesc: designDesc,
        cssLibrary: 'General structure made with Tailwind CSS',
        css: '-',
        framework: `Vue.js`,
        language: 'Javascript',
        backend:' - ',
        imgSrc:goodRootsScreens,
        imgSwiper: [],
        url:'https://the-good-roots.netlify.app',
        repositoryUrl:'https://github.com/xpilasi/good-roots'
      },
    ]

  

  let currentProject = (keyProject) =>{

    let visibleProject = '';
    for (let project of projects){
      
      if(keyProject == project.projectKey){
         visibleProject = project ;
        
        
      }
    }
    return visibleProject;
    
    }
    

  useEffect(() => {
    setIsVisible(showProject);
    setImageLoaded(false); // Reset image loaded state when project changes
}, [showProject, keyProject]);

    const topDesc = currentProject(keyProject).type;
    const titleDesc = currentProject(keyProject).name;
    const generalFeatures = currentProject(keyProject).description ;
    const year = currentProject(keyProject).year ;
    const framework = currentProject(keyProject).framework ;
    const language = currentProject(keyProject).language ;
    const backend = currentProject(keyProject).backend ;
    const imgSrc = currentProject(keyProject).imgSrc;
    const testBullet = currentProject(keyProject).designDesc;
    const projectCode = currentProject(keyProject).code;
    const urlProject = currentProject(keyProject).url;
    const urlRepository = currentProject(keyProject).repositoryUrl;
    const bullets = [
      currentProject(keyProject).designDesc,
      currentProject(keyProject).cssLibrary,
      currentProject(keyProject).css,
    ]
    const imgArray = currentProject(keyProject).imgSwiper;

    const test = ()=>{console.log(imgArray.length);
    }
    // console.log('imgArray:', imgArray)
    
    

      
    return (
      

    <section
    id='projectDesc'
    className={
        `${isVisible ? 'fixed min-h-screen w-full left-0 top-0 px-4 md:px-6 lg:px-10 py-8 overflow-y-auto z-50 opacity-100 pointer-events-auto dark:bg-gradient-to-r dark:from-gray-800 dark:to-black bg-gradient-to-r from-white to-gray-100 flex flex-col' : 'hidden'}`
        }
    >
      <div className='max-w-6xl mx-auto w-full'>
        <CloseRoadMap showRoadMap={showProject } setShowRoadMap={setShowProject} ></CloseRoadMap>
        <div className='mt-12 md:mt-16'>
          <RoadmapTopTitle titleText={topDesc}></RoadmapTopTitle>
          <RoadmapTitle titleText={titleDesc}></RoadmapTitle>
        </div>

      </div>


      <div className='max-w-6xl mx-auto w-full md:grid md:grid-cols-7 md:gap-10 grid grid-cols-1 mt-6'>
            <div className='md:col-span-4 w-full flex justify-center items-center relative' onClick={test}>
                {/* Skeleton loader with pulse effect */}
                {!imageLoaded && (
                  <div className="w-full aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                )}

                {/* Image */}
                <div className={`${imageLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'} transition-opacity duration-300`}>
                  <Image
                    src={imgSrc}
                    alt={titleDesc}
                    onClick={test}
                    priority={true}
                    onLoad={() => setImageLoaded(true)}
                  />
                </div>
            </div>

            <div className='md:col-span-3 flex flex-col justify-between xl:justify-start'>


              <div>
              <h3 className='text-gray-600 dark:text-gray-400 font-light text-sm md:text-base pb-2 pt-5 md:pt-0'>General features</h3>
              <GeneralFeatures generalFeatures={generalFeatures}></GeneralFeatures>
              <Bullet bulletsArray={bullets}></Bullet>
              <Features year={year} framework={framework} language={language} backend={backend}></Features>
              </div>


              <div className='grid grid-cols-2 md:grid-cols-1 gap-4 mt-6'>
                <ButtonGreenWhite buttonName={`${projectCode == 'mobile' ? 'APK' : 'Website'}`} url={urlProject}></ButtonGreenWhite>
                <ButtonGreenWhite buttonName='Repository' url={urlRepository}></ButtonGreenWhite>
              </div>


            </div>

      </div>
        
       
     
        

    </section>

    )

    

};

export default ProjectsDesc;
