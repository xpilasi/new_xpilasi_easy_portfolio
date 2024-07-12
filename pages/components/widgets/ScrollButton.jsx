import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const ScrollButton = () => {
  const activeSectionRef = useRef(null);

  const scrollToNextSection = () => {
    if (!activeSectionRef.current) {
      activeSectionRef.current = document.querySelector('.section.active');
    }

    const sections = document.querySelectorAll('.section');
    const currentIndex = Array.from(sections).findIndex((section) => section === activeSectionRef.current);
    const nextIndex = (currentIndex + 1) % sections.length;
    const nextSection = sections[nextIndex];

    console.log(currentIndex);

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