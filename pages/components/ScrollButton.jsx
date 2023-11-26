import React from 'react';

const ScrollButton = () => {
  const scrollToNextSection = () => {
    const currentSection = document.querySelector('.section:target') || document.querySelector('.section');
    const nextSection = currentSection.nextElementSibling;

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      className="fixed bottom-4 right-4 bg-neon-pink opacity-20 text-white px-4 py-2 rounded"
      onClick={scrollToNextSection}
    >
      Next
    </button>
  );
};

export default ScrollButton;
