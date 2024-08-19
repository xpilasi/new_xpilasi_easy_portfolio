import React, { useEffect, useState } from 'react';
import Road from '../../widgets/Road';
import RoadmapTitle from '../../widgets/titles/RoadmapTitle';
import RoadmapSubTitle from '../../widgets/titles/RoadmapSubTitle';
import RoadmapTopTitle from '../../widgets/titles/RoadmapTopTitle';
import CloseRoadMap from '../../widgets/menu/CloseRoadMap';


const ProjectsDesc = ({showProject, setShowProject, keyProject}) => {

    const [isVisible, setIsVisible] = useState(showProject);

    const projects = 

    [
      {
        projectKey: 1,
        name : 'GorillaGrab',
        type: 'Mobile App',
        description: 'this is the gorilla desc',
        year: 2023,
        framework: `Flutter`,
        language: 'Dart'
      },
      {
        projectKey: 2,
        name : 'JustList',
        type: 'Mobile App',
        description: 'this is the JustList desc',
        year: 2023,
        framework: `Flutter`,
        language: 'Dart'
      },
      {
        projectKey: 3,
        name : 'Vintage Groom',
        type: 'Web Design',
        description: 'this is the Vintage Groom desc',
        year: 2024,
        framework: `Vue`,
        language: 'Javascript'
      },
      {
        projectKey: 4,
        name : 'xPilasi Porfolio',
        type: 'Web Design',
        description: 'this is the xPilasi Portafolio desc',
        year: 2024,
        framework: `React`,
        language: 'Javascript'
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

    const topDesc = 'xpilasi.com';
    const titleDesc = currentProject(keyProject).name;
    const subtitleDesc = currentProject(keyProject).description ;

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
        <RoadmapSubTitle titleText={subtitleDesc}></RoadmapSubTitle>
        <div className='flex flex-col lg:grid lg: grid-cols-2 gap-x-28'>
       

        </div>
        

    </section>

    )

    

};

export default ProjectsDesc;
