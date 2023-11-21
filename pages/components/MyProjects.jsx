import React from 'react'
import Image  from 'next/image';
import { gorillaWebImg, logoXpBlueBerry, logoXpWhite, profilePictureXp,web2,web3,web4 } from '../images';


const MyProjects = () => {
  return (
    <section>
      {/* My projects title */}
      <div>
        <h3 className=' text-3xl py-1 pt-8'>My projects</h3>
        <p className=' text-md py-5 leading-8 text-gray-800'> These are the projects I've developped since I started my journey. </p>
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