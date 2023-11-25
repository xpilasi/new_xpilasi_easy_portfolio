import React from 'react'
import Image  from 'next/image';
import design  from  '../../public/img/code.png';
import Title from './Title';
import SubTitle from './SubTitle';



const MyStory = () => {
    const myStoryTitle = 'A little bit about my story';
    const highlightTextStyle = ' text-lg py-5 leading-8 md:text-xl mb-10 font-extralight';

    
    const gradientNeon1 = '';
    
  return (
    <section>
      <div>
        <Title title ={myStoryTitle}></Title>
        
        <p className={highlightTextStyle}>
          Two years ago, I embarked on a transformation into software development through online courses, certifications, and daily practice.
        
        </p>
        

      </div>
      
      {/* My story*/}
      <div className={gradientNeon1}>
        {/* Card 1 */}
        <div className=' text-center  p-10 ' >
          <Image className=' mx-auto'src={design} width={100} height={100}></Image>
          <SubTitle subTitle = {'BBA degree'}></SubTitle>
            
            <p className={highlightTextStyle}>At the end of 2010, I obtained a Bachelor Business Administration degree from Diego Portales University in Santiago, Chile. In the early months of the following year, I started working as a category analyst at the multinational company Walmart.</p>
        </div>   
          {/* Card 2 */}
        
        <div className=' text-center p-10  '>
          <Image className=' mx-auto'src={design} width={100} height={100}></Image>
          <SubTitle subTitle = {'Leading teams'}></SubTitle>
            
            <p className={highlightTextStyle}>After gaining several years of experience in team leadership, negotiation, and project launches, I assumed the role of head of the commercial and marketing team at a renowned company in Latin America. In this position, I launched various brands and websites.</p>
            </div>    
         
         {/* Card 3 */} 
        
        <div className=' text-center  p-10 '>
          <Image className=' mx-auto'src={design} width={100} height={100}></Image>
          <SubTitle subTitle = {'Developer'}></SubTitle>
            
            <p className={highlightTextStyle}>I decide to embark on the search for new professional paths and choose Barcelona as my launching pad. In 2021, I discover the world of programming through various contacts and am captivated. I begin my first course at the IT Academy of Barcelona, where I learn the fundamentals of programming.</p>
            
        </div>

        

        
        </div>
     </section>
  )
}

export default MyStory