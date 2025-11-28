import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { ChevronDown } from 'lucide-react';

const ScrollButton = () => {
  const activeSectionRef = useRef(null);
  const [isLastSection, setIsLastSection] = useState(false);

    

  const scrollToNextSection = () => {
    if (!activeSectionRef.current) {
      activeSectionRef.current = document.querySelector('.section.active');
    }

    const section1 = document.getElementById('intro-xp');
    const section2 = document.getElementById('how-i-work');
    const section3 = document.getElementById('stack-tools');
    const section4 = document.getElementById('about-me');
    const section5 = document.getElementById('my-projects');
    const section6 = document.getElementById('contact');
    const sectionsPortfolio = [section1, section2, section3, section4, section5, section6];


    let nextIndex = 0;
    const currentIndex = Array.from(sectionsPortfolio).findIndex((section) => section === activeSectionRef.current);

    switch(currentIndex){
      case -1: nextIndex = 1;break;
      case  0: nextIndex = 1;break;
      case  1: nextIndex = 2;break;
      case  2: nextIndex = 3;break;
      case  3: nextIndex = 4;break;
      case  4: nextIndex = 5;break;
      case  5: nextIndex = 0;break;
    }

    const nextSection = sectionsPortfolio[nextIndex];

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
      activeSectionRef.current = nextSection;
      setIsLastSection(nextIndex === 5);
    }
  };

  const gradientBg = ' bg-gradient-to-r from-neon-blueberry opacity-40 to-neon-water';
  const bg= ' bg-zinc-800';

  return (
    <button
      className={`fixed bottom-10 right-10 dark:bg-zinc-800/10 transform transition-transform hover:scale-110 `}
      onClick={scrollToNextSection}
    >
      <ChevronDown 
        className={`dark:text-white text-zinc-800 w-full h-14 transition-transform duration-300 ${
          isLastSection ? 'rotate-180' : ''
        }`} 
      />
    </button>
  );
};

export default ScrollButton;