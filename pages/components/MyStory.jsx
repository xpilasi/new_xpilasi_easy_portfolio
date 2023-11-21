import React from 'react'
import Image  from 'next/image';
import { design } from '../images';

const MyStory = () => {

    
  return (
    <section>
      <div>
        <h3 className=' text-3xl py-1'> A little bit about my story</h3>
        <p className=' text-md py-5 leading-8 text-gray-800'>
          Two years ago, I embarked on a transformation into software development through online courses, certifications, and daily practice.
        
        </p>
        <p className=' text-md py-5 leading-8 text-gray-800'>
          I'm searching for an opportunity within the digital market to add value and boost my skills.
        
        </p>

      </div>
      
      {/* My story*/}
      <div className='lg:flex gap-10'>
        {/* Card 1 */}
        <div className=' text-center shadow-lg p-10 rounded-lg dark:bg-white dark:text-gray-800' >
          <Image className=' mx-auto'src={design} width={100} height={100}></Image>
            <h3 className=' text-lg font-medium pt-8 pb-2'>2010: BBA degree</h3>
            <p className=' py-2'>At the end of 2010, I obtained a Bachelor Business Administration degree from Diego Portales University in Santiago, Chile. In the early months of the following year, I started working as a category analyst at the multinational company Walmart.</p>
        </div>   
          {/* Card 2 */}
        
        <div className=' text-center shadow-lg p-10 rounded-lg  dark:bg-white dark:text-gray-800'>
          <Image className=' mx-auto'src={design} width={100} height={100}></Image>
            <h3 className=' text-lg font-medium pt-8 pb-2'>2016: Leading teams</h3>
            <p className=' py-2'>After gaining several years of experience in team leadership, negotiation, and project launches, I assumed the role of head of the commercial and marketing team at a renowned company in Latin America. In this position, I launched various brands and websites.</p>
            </div>    
         
         {/* Card 3 */} 
        
        <div className=' text-center shadow-lg p-10 rounded-lg  dark:bg-white dark:text-gray-800'>
          <Image className=' mx-auto'src={design} width={100} height={100}></Image>
            <h3 className=' text-lg font-medium pt-8 pb-2'>2020: The turning point</h3>
            <p className=' py-2'>I decide to embark on the search for new professional paths and choose Barcelona as my launching pad. In 2021, I discover the world of programming through various contacts and am captivated. I begin my first course at the IT Academy of Barcelona, where I learn the fundamentals of programming.</p>
            
        </div>

        

        
        </div>
     </section>
  )
}

export default MyStory