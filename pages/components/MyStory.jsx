import React from 'react'
import design  from  '../../public/img/code.png';
import Title from './Title';
import MiniSubTitle from './MiniSubTitle';
import Highlight from './Highlight';
//import coding from 'public/img/coding.jpg'
import coding from 'public/img/programming-code-signs.png'
import hat from 'public/img/graduation-hat.png'




const MyStory = () => {
    const myStoryTitle = 'A little bit about my story';
    const highlightTextStyle = ' text-lg py-5 leading-6 md:text-xl mb-10 font-extralight';
    const myStorySubtitle = 'Two years ago, I embarked on a transformation into software development through online courses, certifications, and daily practice.';
    
    const gradientNeon1 = '';
    
  return (
    <section>
      <div>
        <Title title ={myStoryTitle}></Title>
        <MiniSubTitle miniSubTitle={myStorySubtitle} />
      </div>
      
      {/* My story*/}
      <div className={gradientNeon1}>
        {/* Card 1 */}
        
        <Highlight
            srcImage={hat} 
            subTitle ={'BBA degree'}
            highlight={'At the end of 2010, I obtained a Bachelor Business Administration degree from Diego Portales University in Santiago, Chile. In the early months of the following year, I started working as a category analyst at the multinational company Walmart.'}
        />
        
        {/* Card 2 */}
        <Highlight 
            srcImage={hat} 
            subTitle ={'Leading teams'}
            highlight={'After gaining several years of experience in team leadership, negotiation, and project launches, I assumed the role of head of the commercial and marketing team at a renowned company in Latin America. In this position, I launched various brands and websites.'}
        />  
            
        {/* Card 3 */} 
        <Highlight 
            srcImage={coding}
            subTitle ={'Developer'}
            highlight={'I decide to embark on the search for new professional paths and choose Barcelona as my launching pad. In 2021, I discover the world of programming through various contacts and am captivated. I begin my first course at the IT Academy of Barcelona, where I learn the fundamentals of programming.'}
        />

        </div>
     </section>
  )
}

export default MyStory