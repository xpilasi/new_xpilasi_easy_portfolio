import React from 'react'
import Image  from 'next/image';
import { gorillaWebImg, logoXpBlueBerry, logoXpWhite, profilePictureXp,web2,web3,web4 } from '../images';
import Title from './Title';


const MyProjects = () => {
  return (
    <section>
      {/* My projects title */}
      <div>
        <Title title = {'My projects' }></Title>
        
        <p className=' text-lg py-5 leading-8 md:text-xl mb-10 font-extralight'> These are the projects I've developped since I started my journey. </p>
      </div>

      {/* Projects */}
        <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
          {/* project 1 */}
          <div className=' basis-1/3 flex-1'>
            <Image src={gorillaWebImg} className=' rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'></Image>
          </div>
          {/* project 2 */}
          <div className=' basis-1/3 flex-1'>
            <Image src={web2} className=' rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'></Image>
          </div>
          {/* project 3 */}
          <div className=' basis-1/3 flex-1'>
            <Image src={web3} className=' rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'></Image>
          </div>
          {/* project 4 */}
          <div className=' basis-1/3 flex-1'>
            <Image src={web4} className=' rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'></Image>
          </div>

        </div>
     </section>
  )
}

export default MyProjects