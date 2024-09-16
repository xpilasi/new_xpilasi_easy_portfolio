import React, { useEffect, useState } from 'react';
import Road from '../../widgets/Road';
import RoadmapTitle from '../../widgets/titles/RoadmapTitle';
import RoadmapSubTitle from '../../widgets/titles/RoadmapSubTitle';
import RoadmapTopTitle from '../../widgets/titles/RoadmapTopTitle';
import CloseRoadMap from '../../widgets/menu/CloseRoadMap';


const Roadmap = ({showRoadMap, setShowRoadMap}) => {

    const [isVisible, setIsVisible] = useState(showRoadMap);
    

  useEffect(() => {
    setIsVisible(showRoadMap);
}, [showRoadMap]);

    const topDesc = 'xpilasi.com';
    const titleDesc = 'Roadmap';
    const subtitleDesc = 'In 2021, I embarked on a transformation into software development through courses, certifications, and daily practice.';

    const yearDesc1 = (
        <>
          I obtained a <span className='text-neon-green'>Bachelor Business Administration</span> degree from Diego Portales University in Santiago, Chile. In the early months of the following year, I started working as a category analyst at the multinational company Walmart.
        </>
      );
    const yearDesc2 = (
        <>
          After gaining several years of experience in <span className='text-neon-green'>Team leadership</span>,  negotiation, and project launches, I assumed the role of <span className='text-neon-green'>Business Development Manager</span> at a renowned company in Latin America. 
          {/* In this position, I represented important  Brands and launched new <span className='text-neon-green'>technology projects</span>.  */}
   
    
        </>
      );
    const yearDesc3 = (
        <>
          {/* I decide to embark on the search for new professional paths and choose <span className='text-neon-green'>Barcelona</span> as my launching pad.  */}
          I discover the world of <span className='text-neon-green'>programming</span> through various contacts and am captivated. I begin my first course at the IT Academy of Barcelona, where I learn the fundamentals of programming, then I dive into <span className='text-neon-green'>Python</span>, <span className='text-neon-green'>SQL</span> and <span className='text-neon-green'>Django</span>.
        </>
      );
    const yearDesc4 = (
        <>
          {/* I was very curious about how could I build easier solutions for the day to day so I give a shot to the <span className='text-neon-green'>mobile development</span> with <span className='text-neon-green'>Flutter</span>.  */}
          I focused on my personal backlog requirements to build Android and IOs apps with <span className='text-neon-green'>Flutter</span>. Most of my skills acquired in the past were super useful: I managed to launch one Beta in <span className='text-neon-green'>Google Play</span> and build a complex <span className='text-neon-green'>FullStack climbing app</span>.
        </>
      );
    const yearDesc5 = (
        <>
          I wanted to expand my <span className='text-neon-green'>Front End</span> skills and validate my knowledge so I decide to start an official IT education at the <span className='text-neon-green'>University Ramón Llul - LaSalle</span>  at Barcelona. I learned and practiced Website’s development with <span className='text-neon-green'>React</span>  and <span className='text-neon-green'>Vue</span>, besides several industry standards regarding HTML, CSS and Javascript.
        </>
      );
    return (

    <section 
    id='roadmap' 
    className={
        `min-h-screen bg-black w-full fixed left-0 top-0 px-5 transition-all duration-300 ease-in-out 
            ${isVisible ? 'z-50 opacity-100 pointer-events-auto' : 'opacity-0 z-30 pointer-events-none'}`
        }
    >
        <CloseRoadMap showRoadMap={showRoadMap } setShowRoadMap={setShowRoadMap} ></CloseRoadMap>
        <RoadmapTopTitle titleText={topDesc}></RoadmapTopTitle>
        <RoadmapTitle titleText={titleDesc}></RoadmapTitle> 
        <RoadmapSubTitle titleText={subtitleDesc}></RoadmapSubTitle>
        <div className='flex flex-col lg:grid lg: grid-cols-2 gap-x-28  lg:px-10 lg:py-10'>
        <Road year={'2011'} yearDesc={yearDesc1}></Road>
        <Road year={'2016'} yearDesc={yearDesc2}></Road>
        <Road year={'2021'} yearDesc={yearDesc3}></Road>
        <Road year={'2023'} yearDesc={yearDesc4}></Road>
        <Road year={'2024'} yearDesc={yearDesc5}></Road>

        </div>
        

    </section>

    )

    

};

export default Roadmap;
