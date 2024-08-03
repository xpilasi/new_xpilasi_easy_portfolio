import React from 'react'
import Image  from 'next/image';
import profilePictureXp from '../../../public/img//perfil/perfil_final_2024.png'
import profilePictureXpT from '../../../public/img/fotoPerfil3.png'
import profilePictureXpT2 from '../../../public/img/fotoPerfil4.png'

import quoteStartSVG from '../../../public/img/icons/iconQuoteOpenSVG.svg'
import quoteCloseSVG from '../../../public/img/icons/iconQuoteCloseSVG.svg'

const Presentation = ({darkMode}) => {


    let profilePicture = profilePictureXp;

    darkMode ? profilePicture = profilePictureXp : profilePicture = profilePictureXpT2;
  
    const bgDarkMode = 'bg-neon-green text-white ';
    const bgLightMode= 'bg-white';
    let bg = '';
    
    darkMode ? bg = bgDarkMode : bg = bgLightMode ;

    const productManagerDesc = 'I am a professional with a forward-thinking vision and proactive attitude who combines technical, strategic, and relational skills. I am passionate about creating innovative products and services that have a positive impact on the world.';
    const developerDesc = ' am a dedicated Junior developer seeking to leverage my technical skills and experience in the Retail and Business industry in the challenging field of software development';
  return (
    <section id='presentation'>

        <div className='py-10 h-screen flex items-center ' >

        {/* My picture */}


        <div className='w-full justify-center items-center'>

           
            
            <div className={`lg:flex  mt-5 justify-center items-center  ${bg} max-w-5xl `}>
                <div className=' flex justify-center items-center '><Image className='opacity-100' src={profilePicture} width={250} ></Image></div>
            
                <div className=' flex justify-center items-center py-5  '>
                <Image  className=' ml-5 ' src={quoteStartSVG}width={60} ></Image>
                <div>
                
                <div>
                    <p className='mx-0  py-5 px-0 text-center text-black font-light max-w-md'>{productManagerDesc}</p>
                </div>

                </div>  
                <Image className=' flex ' src={quoteCloseSVG} width={100}></Image>
                </div>

            </div>

        </div>


        </div>

    </section>
   
  )
}

export default Presentation