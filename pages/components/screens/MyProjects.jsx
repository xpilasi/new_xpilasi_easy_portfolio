import React from 'react'
import Image  from 'next/image';
import gorillaWebImg from '../../../public/img/gorillagrab1.png'
import web2 from '../../../public/img/web2.png'
import web3 from '../../../public/img/web3.png'
import web4 from '../../..//public/img/web4.png'
import web5 from '../../../public/img/just_list_web.png'
import web6 from '../../../public/img/gorilla_web.png'
import gorillaWeb from '../../../public/img/final_webs/gorilla_web2.png'
import justList from '../../../public/img/final_webs/just_list_web_full.png'

import Title from '../widgets/Title';
import MiniSubTitle from '../widgets/MiniSubTitle';



const MyProjects = () => {
  return (
    <section className='section ' id='myProjects' >
      {/* My projects title */}
      <div className=' pt-10'>
        <Title className = ' 'title = {'My projects' }></Title>
        <MiniSubTitle miniSubTitle = {"These are the projects I've developped since I started my journey."}/>
           
      </div>

      {/* Projects */}
        <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
          {/* project 1 */}
          <div className=' basis-1/3 flex-1'>
            <Image src={gorillaWeb} className=' rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'></Image>
          </div>
          {/* project 2 */}
          <div className=' basis-1/3 flex-1'>
            <Image src={justList} className=' rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'></Image>
          </div>
          

        </div>
     </section>
  )
}

export default MyProjects