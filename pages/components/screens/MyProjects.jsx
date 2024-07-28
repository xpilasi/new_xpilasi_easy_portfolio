import React from 'react'
import Image  from 'next/image';
import gorillaWebImg from '../../../public/img/gorillagrab1.png'
import web2 from '../../../public/img/web2.png'
import web3 from '../../../public/img/web3.png'
import web4 from '../../..//public/img/web4.png'
import web5 from '../../../public/img/just_list_web.png'
import web6 from '../../../public/img/gorilla_web.png'
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
      <div className='grid grid-cols-1 md:grid md:grid-cols-3 gap-5 '>
              <div className='grid-item rounded-lg '>
              <Image src={gorillaWeb} className='w-3/4  '  layout='responsive'></Image>
              </div>

              <div className='grid-item bg-slate-900 rounded-lg  '>
              <Image src={justList} className=' ' width={'100%'} height={'100%'} layout='responsive'></Image>
              </div>

              <div className='grid-item bg-slate-900 rounded-lg '>
              <Image src={barberWeb} className=' ' width={'100%'} height={'100%'} layout='responsive'></Image>
              </div>
            
            </div>
            

      </article>
     

        
     </section>
  )
}

export default MyProjects