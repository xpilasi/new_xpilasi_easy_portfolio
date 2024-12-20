import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const ScrollButton = () => {
  const activeSectionRef = useRef(null);

    

  const scrollToNextSection = () => {
    if (!activeSectionRef.current) {
      activeSectionRef.current = document.querySelector('.section.active');
    }

    // const section0 = document.getElementById('menu-top');
    const section1 = document.getElementById('intro-xp');
    const section2 = document.getElementById('about-me');
    // const section3 = document.getElementById('my-story');
    // const section4 = document.getElementById('my-skills');
    const section5 = document.getElementById('my-projects');
    const section6 = document.getElementById('contact');
    const sectionsPortfolio = [section1, section2,section5,section6];
    
    
    let nextIndex = 0;
    const currentIndex = Array.from(sectionsPortfolio).findIndex((section) => section === activeSectionRef.current);

    switch(currentIndex){
      case -1: nextIndex = 1;break;
      case  0: nextIndex = 1;break;
      case  1: nextIndex = 2;break;
      case  2: nextIndex = 3;break;
      case  3: nextIndex = 0;break;
      // case  4: nextIndex = 5;break;
      // case  5: nextIndex = 0;break;
    }

    const nextSection = sectionsPortfolio[nextIndex];

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
      activeSectionRef.current = nextSection;
    }
  };

  const gradientBg = ' bg-gradient-to-r from-neon-blueberry opacity-40 to-neon-water';
  const bg= ' bg-zinc-800';

  return (
    <button
      className={`fixed bottom-4  right-6 ${bg} text-white px-4 py-2  transform transition-transform hover:scale-110 text-3xl   `}
      onClick={scrollToNextSection}
    >
      <FontAwesomeIcon icon={faAngleDown} />..
    </button>
  );
};

export default ScrollButton;