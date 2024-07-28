import React, { useState } from 'react'
import Title from '../widgets/Title';
import MiniSubTitle from '../widgets/MiniSubTitle';
import Image  from 'next/image';
import MyModal from '../widgets/MyModal';

import degreeSVG from '../../../public/img/icons/iconBaseBg.svg';
import degreeLightSVG from '../../../public/img/icons/iconBaseBgLight.svg';
import mgmtSVG from '../../../public/img/icons/iconBaseBusinessM.svg';
import mgmtLightSVG from '../../../public/img/icons/iconBaseBusinessLight.svg';
import codeSVG from '../../../public/img/icons/iconBaseCode.svg';
import codeLightSVG from '../../../public/img/icons/iconBaseCodeLight.svg';

import codeTitle from '../../../public/img/icons/codeSVG.svg';
import codeLightTitle from '../../../public/img/icons/codeLightSVG.svg';
import mgmtTitle from '../../../public/img/icons/mgmtSVG.svg';
import mgmtLightTitle from '../../../public/img/icons/mgmtLightSVG.svg';
import degreeTitle from '../../../public/img/icons/degreeSVG.svg';
import degreeLightTitle from '../../../public/img/icons/degreeLightSVG.svg';




const MyStory = ({darkMode}) => {
    const myStoryTitle = 'Background';
    const highlightTextStyle = ' text-lg py-5 leading-6 md:text-xl mb-10 font-extralight';
    const myStorySubtitle = `In 2021, I embarked on a transformation into software development 
                             through online courses, certifications, and daily practice.`

    const story1 = `At the end of 2010, I obtained a Bachelor Business Administration degree from 
                    Diego Portales University in Santiago, Chile. In the early months of the following year, 
                    I started working as a category analyst at the multinational company Walmart.`;
    

    const story2 = `After gaining several years of experience in team leadership, negotiation, and project 
                    launches, I assumed the role of Business Development Manager at a renowned 
                    company in Latin America. In this position, I launched various brands and websites.`;

    const story3 = `I decide to embark on the search for new professional paths and choose Barcelona as my 
                    launching pad. In 2021, I discover the world of programming through various contacts and 
                    am captivated. I begin my first course at the IT Academy of Barcelona, where I learn the 
                    fundamentals of programming.`;
                    
                
    
    const gradientNeon1 = '';

    const iconsSpin = {
      transition: 'transform 0.3s ease-in-out',
    }; //CSS in JS

    const handleMouseOver = (e) => {
      e.currentTarget.style.transform = 'rotate(360deg)';
    };
    const handleMouseOut =(e) => {
      e.currentTarget.style.transform = 'rotate(0deg)';
    };
    
    
    // Modal
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [modalTitle, setModalTitle] = useState('');
  
    const handleImageClick = ({content,title}) => {
      setModalContent(content);
      setModalTitle(title);
      setModalOpen(true);
    };
    
    const bgBlueberry = 'bg-neon-blueberry';
    const bgPink = 'bg-neon-pink';
    const bgGrey = 'bg-neon-grey';
    
  return (
    <section className='section h-screen md:flex justify-center items-center' id='my-story'>
      
      
      
      {/* My story*/}
      <div className='' id='myStoryPrincipal'>

      <div className='pt-10 mb-20'>
        {/* <Title title ={myStoryTitle}></Title> */}
        <MiniSubTitle miniSubTitle={myStorySubtitle} />
      </div>

        {/*Icons  */}
    <div className= {`  py-10 justify-center items-center`}>

          
    <div className=' flex justify-center mb-10'>
      <a onClick={() => handleImageClick({
        content: story1,
        title: '2010: Degree'
      }
        )}>
        <Image
        src={degreeLightSVG}
        alt="Degree Icon"
        width={100}
        style={iconsSpin}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className=' cursor-pointer'
      />
        
      </a>
      {/* <Image className='px-5' src={darkMode ? degreeTitle : degreeLightTitle} width={200} /> */}
      
    </div>
      
    <div className='  flex justify-center mb-10'>
      <a onClick={() => handleImageClick({
        content: story2,
        title: '2016: Business Manager'
      }
        )}>
        
        <Image
        src={mgmtLightSVG}
        alt="Management Icon"
        width={100}
        style={iconsSpin}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className=' cursor-pointer'
        />

      </a>
      {/* <Image className='px-5' src={darkMode ? mgmtTitle : mgmtLightTitle } width={200} /> */}
    </div>

    <div className=' flex justify-center mb-10'>
      <a onClick={() => handleImageClick({
        content: story3,
        title: '2020: Coding'
      }
        )}>
        
        <Image
        src={codeLightSVG}
        alt="Code Icon"
        width={100}
        style={iconsSpin}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className=' cursor-pointer'
        />

      </a>
      {/* <Image className='px-5' src={darkMode ? codeTitle: codeLightTitle} width={200} /> */}
    </div>

      <MyModal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        content={modalContent}
        title={modalTitle}
      />

    </div>
      
          

       

        </div>
     </section>
  )
}

export default MyStory