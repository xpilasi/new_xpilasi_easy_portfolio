import React from 'react'
import Image  from 'next/image';
import { design } from '../images';

const MyStory = () => {

    // const gradientNeon1 = 'lg:flex gap-0 bg-gradient-to-r from-dark-neon-fade to-neon-text-pink';
    const gradientNeon1 = '';
    
  return (
    <section>
      <div>
        <h3 className=' text-3xl lg:text-6xl md:text-4xl  py-1 font-bogartRegular text-neon-pink mt-10  ' > A little bit about my story</h3>
        <p className=' text-lg py-5 leading-8 md:text-xl mb-10 font-extralight'>
          Two years ago, I embarked on a transformation into software development through online courses, certifications, and daily practice.
        
        </p>
        

      </div>
      
      {/* My story*/}
      <div className={gradientNeon1}>
        {/* Card 1 */}
        <div className=' text-center  p-10 ' >
          <Image className=' mx-auto'src={design} width={100} height={100}></Image>
            <h3 className=' text-3xl lg:text-4xl md:text-4xl font-bold  py-1  text-neon-text-water mt-10'>E BBA degree University</h3>
            <p className=' text-lg py-5 leading-8 md:text-xl mb-10'>At the end of 2010, I obtained a Bachelor Business Administration degree from Diego Portales University in Santiago, Chile. In the early months of the following year, I started working as a category analyst at the multinational company Walmart.</p>
        </div>   
          {/* Card 2 */}
        
        <div className=' text-center p-10  '>
          <Image className=' mx-auto'src={design} width={100} height={100}></Image>
            <h3 className=' text-3xl lg:text-4xl md:text-4xl font-bold  py-1  text-neon-text-water mt-10'>2016: Leading teams</h3>
            <p className=' text-lg py-5 leading-8 md:text-xl mb-10'>After gaining several years of experience in team leadership, negotiation, and project launches, I assumed the role of head of the commercial and marketing team at a renowned company in Latin America. In this position, I launched various brands and websites.</p>
            </div>    
         
         {/* Card 3 */} 
        
        <div className=' text-center  p-10 '>
          <Image className=' mx-auto'src={design} width={100} height={100}></Image>
            <h3 className=' text-3xl lg:text-4xl md:text-4xl font-bold  py-1  text-neon-text-water mt-10'>2020: The turning point</h3>
            <p className=' text-lg py-5 leading-8 md:text-xl mb-10'>I decide to embark on the search for new professional paths and choose Barcelona as my launching pad. In 2021, I discover the world of programming through various contacts and am captivated. I begin my first course at the IT Academy of Barcelona, where I learn the fundamentals of programming.</p>
            
        </div>

        

        
        </div>
     </section>
  )
}

export default MyStory