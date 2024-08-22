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
import gorillaGrabProject from '../../../../public/img/projects_logos/app_design/gorilla.png';
import justlistAppDesign from '../../../../public/img/projects_logos/app_design/justlistAppDesign.png';




const ProjectsDesc = ({showProject, setShowProject, keyProject}) => {

    const [isVisible, setIsVisible] = useState(showProject);

    const projects = 

    [
      {
        projectKey: 1,
        name : 'GorillaGrab',
        type: 'Mobile App',
        description: 'Create a user to start tracking your climbing trainings:  create independent Trainings with independent exercises within. Compare your historic records, compare your current record with your last records so you can easily understand how your level is evolving. Control your total training hours within specific time periods.',
        year: 2023,
        framework: `Flutter`,
        language: 'Dart',
        backend:'Firebase',
        imgSrc:gorillaGrabProject
      },
      {
        projectKey: 2,
        name : 'JustList',
        type: 'Mobile App',
        description: 'this is the JustList desc',
        year: 2023,
        framework: `Flutter`,
        language: 'Dart',
        backend:'Hive',
        imgSrc:justlistAppDesign
      },
      {
        projectKey: 3,
        name : 'Vintage Groom',
        type: 'Web Design',
        description: 'this is the Vintage Groom desc',
        year: 2024,
        framework: `Vue 3`,
        language: 'Javascript',
        backend:'-',
        imgSrc:gorillaGrabProject
      },
      {
        projectKey: 4,
        name : 'xPilasi Porfolio',
        type: 'Web Design',
        description: 'I officially created this portflio website on 2023 and I completely renovated it on 2024. I changed the color palette and added brand new components to simplify the updates and most of all to have a clean and cool experience.',
        year: 2024,
        framework: `Next.Js / React`,
        language: 'Javascript',
        backend:' - ',
        imgSrc:gorillaGrabProject
      },
    //   {
    //     projectKey: 5,
    //     name : 'Vintage Groom',
    //     type: 'Web Design',
    //     description: 'this is the Vintage GRoom desc',
    //     year: 2024,
    //     framework: `Vue`,
    //     language: 'Javascript'
    //   },
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

    return (

    <section 
    id='projectDesc' 
    className={
        `min-h-screen bg-black w-full fixed left-0 top-0 px-5 transition-all duration-300 ease-in-out 
            ${isVisible ? 'z-50 opacity-100 pointer-events-auto' : 'opacity-0 z-30 pointer-events-none'}`
        }
    >
        <CloseRoadMap showRoadMap={showProject } setShowRoadMap={setShowProject} ></CloseRoadMap>
        <RoadmapTopTitle titleText={topDesc}></RoadmapTopTitle>
        <RoadmapTitle titleText={titleDesc}></RoadmapTitle> 

        <article className='lg:grid lg:grid-cols-7 lg:gap-10 gap-5 grid grid-cols-1 mt-3 '>
            <div className='bg-red-400 lg:col-span-4'>
                <Image src={imgSrc}></Image>
                    
                

            </div>
            <div className='lg:col-span-3 '>
                <h3 className='text-zinc-500 font-interDisplayLight text-[14px] pb-2'>General features</h3>
            <GeneralFeatures generalFeatures={generalFeatures}></GeneralFeatures>
            <Features year={year} framework={framework} language={language} backend={backend}></Features>
            
            <div className='mb-5 grid grid-cols-2 lg:grid-cols-1  gap-4'>
            <ButtonGreenWhite buttonName='Download APK'></ButtonGreenWhite>
            <ButtonGreenWhite buttonName='Check Repository'></ButtonGreenWhite>
            </div>
            

                    
                

            </div>

        </article>
        
        <div className='flex flex-col lg:grid lg: grid-cols-2 gap-x-28'>
       

        </div>
        <div className='flex flex-col lg:grid lg: grid-cols-2 gap-x-28'>
       

        </div>
        

    </section>

    )

    

};

export default ProjectsDesc;
