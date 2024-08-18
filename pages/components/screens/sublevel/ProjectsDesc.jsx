import React, { useEffect, useState } from 'react';
import Road from '../../widgets/Road';
import RoadmapTitle from '../../widgets/titles/RoadmapTitle';
import RoadmapSubTitle from '../../widgets/titles/RoadmapSubTitle';
import RoadmapTopTitle from '../../widgets/titles/RoadmapTopTitle';
import CloseRoadMap from '../../widgets/menu/CloseRoadMap';


const ProjectsDesc = ({showProject, setShowProject, projectName, projectDescription}) => {

    const [isVisible, setIsVisible] = useState(showProject);
    

  useEffect(() => {
    setIsVisible(showProject);
}, [showProject]);

    const topDesc = 'xpilasi.com';
    const titleDesc = projectName;
    const subtitleDesc = projectDescription;

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
        <Road year={'2011'} yearDesc={yearDesc1}></Road>
        <Road year={'2016'} yearDesc={yearDesc2}></Road>
        <Road year={'2021'} yearDesc={yearDesc3}></Road>
        <Road year={'2023'} yearDesc={yearDesc4}></Road>
        <Road year={'2024'} yearDesc={yearDesc5}></Road>

        </div>
        

    </section>

    )

    

};

export default ProjectsDesc;
