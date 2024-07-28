import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const ScrollButton = () => {
  const activeSectionRef = useRef(null);

  const scrollToNextSection = () => {
    if (!activeSectionRef.current) {
      activeSectionRef.current = document.querySelector('.section.active');
    }

    const section1 = document.getElementById('intro-xp');
    const section2 = document.getElementById('presentation');
    const section3 = document.getElementById('my-story');
    const section4 = document.getElementById('my-projects');
    const section5 = document.getElementById('contact');
    
    const sectionsPortfolio = [section1, section2, section3, section4, section5];

    const sections = document.querySelectorAll('.section');
    const currentIndex = Array.from(sections).findIndex((section) => section === activeSectionRef.current);
    const nextIndex = (currentIndex + 1) % sections.length;
    const nextSection = sections[nextIndex];

    console.log(`Section index --> ${currentIndex}`);
    console.log(sectionsPortfolio);
    console.log(sections);

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
      activeSectionRef.current = nextSection;
    }
  };

  const gradientBg = ' bg-gradient-to-r from-neon-blueberry  to-neon-water';

  return (
    <button
      className={`fixed bottom-4 right-4 ${gradientBg} opacity-20 text-white px-4 py-2 rounded`}
      onClick={scrollToNextSection}
    >
      <FontAwesomeIcon icon={faAngleDown} />
    </button>
  );
};

export default ScrollButton;