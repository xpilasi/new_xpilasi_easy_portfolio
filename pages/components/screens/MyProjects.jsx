import React from 'react'
import Image  from 'next/image';
import gorillaWeb from '../../../public/img/projects_logos/gorillaGrabLogoSVG.svg'
import justList from '../../../public/img/projects_logos/justListLogoSVGFinal.svg'
import barberWeb from '../../../public/img/projects_logos/vintageGroomLogoSVG.svg'
import Title from '../widgets/Title';
import MiniSubTitle from '../widgets/MiniSubTitle';



const MyProjects = () => {
  return (
    <section className='section min-h-screen flex-col  ' id='myProjects' >
      {/* My projects title */}
      <article className=' pt-10'>
        <Title className = ' 'title = {'My projects' }></Title>
        <MiniSubTitle miniSubTitle = {"These are the projects I've developped since I started my journey."}/>
           
      </article> 

      <article className='flex justify-center items-center py-20'>
      {/* Projects */}
      <div className='grid grid-cols-1 md:grid md:grid-cols-3 gap-10 '>
              <div className='grid-item rounded-lg '>
              <Image src={gorillaWeb}   layout='responsive'></Image>
              </div>

              <div className='grid-item bg-slate-900 rounded-lg  '>
              <Image src={justList}  layout='responsive'></Image>
              </div>

              <div className='grid-item bg-slate-900 rounded-lg '>
              <Image src={barberWeb}   layout='responsive'></Image>
              </div>
            
            </div>
            

      </article>
     

        
     </section>
  )
}

export default MyProjects