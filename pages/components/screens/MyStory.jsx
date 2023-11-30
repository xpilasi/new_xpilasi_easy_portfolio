import React, { useState } from 'react'
import Title from '../widgets/Title';
import MiniSubTitle from '../widgets/MiniSubTitle';
import coding from 'public/img/programming-code-signs.png';
import hat from 'public/img/graduation-hat.png';
import team from 'public/img/team.png';
import Image  from 'next/image';
import MyModal from '../widgets/MyModal';



const MyStory = () => {
    const myStoryTitle = 'A little bit about my story';
    const highlightTextStyle = ' text-lg py-5 leading-6 md:text-xl mb-10 font-extralight';
    const myStorySubtitle = `Two years ago, I embarked on a transformation into software development 
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

  
    
    // Modal
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [modalTitle, setModalTitle] = useState('');
  
    const handleImageClick = ({content,title}) => {
      setModalContent(content);
      setModalTitle(title);
      setModalOpen(true);
    };
    
    
    
  return (
    <section className='section mb-5' id='myStory'>
      <div>
        <Title title ={myStoryTitle}></Title>
        <MiniSubTitle miniSubTitle={myStorySubtitle} />
      </div>
      
      {/* My story*/}
      <div className=''>


        {/*Icons  */}
    <div className='mt-10 py-10 flex  gap-20 justify-between'>

          
    
    <a onClick={() => handleImageClick({
        content: story1,
        title: '2010: Degree'
      }
        )}>
        <Image src={hat} width={150} />
      </a>
      {/* <div className="border-l-2 border-gray-300 h-1 w-10 my-auto"></div> */}
      <a onClick={() => handleImageClick({
        content: story2,
        title: '2016: Business Manager'
      }
        )}>
        <Image src={team} width={150} />
      </a>

      <a onClick={() => handleImageClick({
        content: story3,
        title: '2020: Coding'
      }
        )}>
        <Image src={coding} width={150} />
      </a>
      
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