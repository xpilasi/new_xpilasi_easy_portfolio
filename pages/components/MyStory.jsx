import React from 'react'
import design  from  '../../public/img/code.png';
import Title from './Title';
import MiniSubTitle from './MiniSubTitle';
import Highlight from './Highlight';
import coding from 'public/img/programming-code-signs.png';
import code from 'public/img/coding.jpg';
import hat from 'public/img/graduation-hat.png';
import team from 'public/img/team.png';
import TextHighlited from './TextHighlited';

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

    const story3 = `'I decide to embark on the search for new professional paths and choose Barcelona as my 
                    launching pad. In 2021, I discover the world of programming through various contacts and 
                    am captivated. I begin my first course at the IT Academy of Barcelona, where I learn the 
                    fundamentals of programming.'`;
                    
                
    
    const gradientNeon1 = '';

    const prueba = <TextHighlited text={'Bachelor Business Administration'}/>;
    
    
  return (
    <section className='' >
      <div>
        <Title title ={myStoryTitle}></Title>
        <MiniSubTitle miniSubTitle={myStorySubtitle} />
      </div>
      
      {/* My story*/}
      <div className='lg:flex'>
        {/* Card 1 */}
        
        <Highlight
            srcImage={hat} 
            subTitle ={'Background'}
            highlight={story1}
        />
        
        {/* Card 2 */}
        <Highlight 
            srcImage={team} 
            subTitle ={'Business Manager'}
            highlight={story2}
        />  
            
        {/* Card 3 */} 
        <Highlight 
            srcImage={coding}
            subTitle ={'Developer'}
            highlight={story3}
        />

        </div>
     </section>
  )
}

export default MyStory