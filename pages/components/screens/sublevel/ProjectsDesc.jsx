import React, { useEffect, useState } from 'react';
import Road from '../../widgets/Road';
import RoadmapTitle from '../../widgets/titles/RoadmapTitle';
import RoadmapSubTitle from '../../widgets/titles/RoadmapSubTitle';
import RoadmapTopTitle from '../../widgets/titles/RoadmapTopTitle';
import CloseRoadMap from '../../widgets/menu/CloseRoadMap';
import Image from 'next/image';
import ExampleImg from '../../../../public/img/final_webs/barber.png';
import GeneralFeatures from './GeneralFeatures';
import Features from './Features';
import ButtonGreenWhite from '../../widgets/buttons/ButtonGreenWhite';
import gorillaGrabProject from '../../../../public/img/projects_logos/app_design/gorilla_mockup_main_2.png';
import justlistAppDesign from '../../../../public/img/projects_logos/web_design/justlist_mockup_3png.png';
import vintageGroomDesign from '../../../../public/img/final_webs/vintage-groom.png';
import xpPortfolio from '../../../../public/img/final_webs/templatePortfolio-xp.png';
import Bullet from '../../widgets/Bullet';
import tonerelicsProject from '../../../../public/img/projects_logos/web_design/tonerelics2.png';
import { Wendy_One } from 'next/font/google';
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai';
import CustomSwiper from '../../widgets/CustomSwiper';
import { Suspense } from 'react';


const ProjectsDesc = ({showProject, setShowProject, keyProject}) => {

    const [isVisible, setIsVisible] = useState(showProject);
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
        url:'https://xpilasi.com',
        repositoryUrl:'https://github.com/xpilasi/just_list_app'
      },
      {
        projectKey: 3,
        code: 'web',
        name : 'Vintage Groom',
        type: 'Web Design',
        description: 'Vintage Groom is my first official Vue 3 project, made with basic components and a minimal design. The idea is that the user can find all the relevant information to book an appointment.',
        year: 2024,
        designDesc: designDesc,
        cssLibrary: 'Design made with Tailwind CSS ',
        css: '-',
        framework: `Vue 3`,
        language: 'Javascript',
        backend:'-',
        imgSrc:vintageGroomDesign,
        imgSwiper: [justlistAppDesign,gorillaGrabProject],
        url:'https://vintagegroom.netlify.app',
        repositoryUrl:'https://github.com/xpilasi/barbershop'
      },
      {
        projectKey: 4,
        code: 'web',
        name : 'xPilasi Porfolio',
        type: 'Web Design',
        description: 'I officially created this portfolio website on 2023 and I completely renovated it on 2024. I changed the color palette and added brand new components to simplify the updates and most of all to have a clean and cool experience.',
        year: 2024,
        designDesc: designDesc,
        cssLibrary: 'General structure made with Tailwind CSS',
        css: 'Specific components made with CSS',
        framework: `Next.Js / React`,
        language: 'Javascript',
        backend:'-',
        imgSrc:xpPortfolio,
        imgSwiper: [gorillaGrabProject,gorillaGrabProject],
        url:'https://xpilasi.com',
        repositoryUrl:'https://github.com/xpilasi/new_xpilasi_easy_portfolio'
      },
      {
        projectKey: 5,
        code: 'web',
        name : 'Tone Relics',
        type: 'Ecommerce',
        description: 'Tone Relics is a modern Ecommerce specialized in boutique Guitar/Bass instruments and accesories. All the Front-End is coded to achieve a clean and easy shopping experience.',
        year: 2024,
        designDesc: designDesc,
        cssLibrary: 'General structure made with Tailwind CSS',
        css: '-',
        framework: `Next.Js / React`,
        language: 'Typescript',
        backend:' Wix Headless ',
        imgSrc:tonerelicsProject,
        imgSwiper: [tonerelicsProject,gorillaGrabProject,justlistAppDesign],
        url:'https://tonerelics.netlify.app',
        repositoryUrl:'https://github.com/xpilasi/guitar-boutique'
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
}, [showProject]);

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
        `min-h-screen bg-black w-full fixed left-0 top-0 px-5 transition-all duration-300 ease-in-out flex flex-col 
            ${isVisible ? 'z-50 opacity-100 pointer-events-auto' : 'opacity-0 z-30 pointer-events-none'}`
        }
    >
      <div className=' '>
        <CloseRoadMap showRoadMap={showProject } setShowRoadMap={setShowProject} ></CloseRoadMap>
        <RoadmapTopTitle titleText={topDesc}></RoadmapTopTitle>
        <RoadmapTitle titleText={titleDesc}></RoadmapTitle>

      </div>
         

      <div className='md:grid md:grid-cols-7 md:gap-10 grid grid-cols-1 mt-3     '>
            <div className='md:col-span-4   w-full flex justify-center items-center  ' onClick={test}>
                {/* <CustomSwiper photoMap={imgArray} /> */}
                <Suspense fallback='LOADING...'>
                  <Image src={imgSrc} alt='' onClick={test} priority={true}></Image>
                </Suspense>
            </div>

            <div className='md:col-span-3 flex flex-col justify-between xl:justify-start p '>

              
              <div>
              <h3 className='text-zinc-500 font-interDisplayLight text-[14px] pb-2 pt-5 md:pt-0'>General features</h3>
              <GeneralFeatures generalFeatures={generalFeatures}></GeneralFeatures>
              <Bullet bulletsArray={bullets}></Bullet>
              <Features year={year} framework={framework} language={language} backend={backend}></Features>
              </div>
             
              
              <div className=' grid grid-cols-2 md:grid-cols-1  gap-4'>
                <ButtonGreenWhite buttonName={`${projectCode == 'mobile' ? 'APK' : 'Website'}`} url={urlProject}></ButtonGreenWhite>
                <ButtonGreenWhite buttonName='Repository' url={urlRepository}></ButtonGreenWhite>
              </div>
            

            </div>

      </div>
        
       
     
        

    </section>

    )

    

};

export default ProjectsDesc;
