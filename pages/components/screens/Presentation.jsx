import React from 'react'
import Image  from 'next/image';
import profilePictureXp from '../../../public/img//perfil/perfil_final_2024.png'
import profilePictureXpT from '../../../public/img/fotoPerfil3.png'
import profilePictureXpT2 from '../../../public/img/fotoPerfil4.png'

import quoteStartSVG from '../../../public/img/icons/iconQuoteOpenSVG.svg'
import quoteCloseSVG from '../../../public/img/icons/iconQuoteCloseSVG.svg'
import ButtonGreen from '../widgets/buttons/ButtonGreen';
import ButtonWhite from '../widgets/buttons/ButtonWhite';
import ButtonWhiteBlack from '../widgets/buttons/ButtonWhiteBlack';

const Presentation = ({darkMode, showRoadMap, setShowRoadMap}) => {


    let profilePicture = profilePictureXp;

    darkMode ? profilePicture = profilePictureXp : profilePicture = profilePictureXpT2;
  
    const bgDarkMode = 'bg-white text-white ';
    const bgLightMode= 'bg-neon-green';
    let bg = '';
    
    darkMode ? bg = bgDarkMode : bg = bgLightMode ;

    const productManagerDesc = 'I am a professional with a forward-thinking vision and proactive attitude who combines technical, strategic, and relational skills. I am passionate about creating innovative products and services that have a positive impact on the world.';
    const developerDesc = ' am a dedicated Junior developer seeking to leverage my technical skills and experience in the Retail and Business industry in the challenging field of software development';
  

    const test = () => {console.log('test');}
    return (
    <section id='presentation' className='h-screen flex flex-col items-center justify-center '>

        
        <div className=' max-w-5xl flex flex-col justify-center items-center bg-white '>

         
            {/* presentation 1 */}  
            <div className={`lg:flex   mt-5 justify-center items-center  ${bg} max-w-5xl  `}>

                    <div className=' flex justify-center items-center '><Image className='opacity-100 mt-2' src={profilePicture} width={250} ></Image></div>
                
                    <div className=' flex justify-center items-center py-5  '>
                    <Image  className=' ml-5 px-1' src={quoteStartSVG}width={60} ></Image>
                    <div>
                    
                    <div>
                        <p className='mx-0  py-5 px-0 text-center text-black font-light max-w-md'>{productManagerDesc}</p>
                    </div>

                    </div>  
                    <Image className=' flex px-2 ' src={quoteCloseSVG} width={100}></Image>
                    </div>

                </div>

            {/* presentation 2 (button inside container) */}
            <div className={`lg:flex lg:pr-5 flex justify-center items-center w-full ${bg} max-w-5xl pb-5 lg:justify-end lg:items-end`}>
                <div className={darkMode ? '' : 'hidden'}>
                    
                <ButtonGreen onClick={() => setShowRoadMap(!showRoadMap)} darkMode={darkMode} buttonName='Check my Roadmap'></ButtonGreen>
                {/* <ButtonGreen onClick={() => test()} darkMode={darkMode} buttonName='Check my Roadmap'></ButtonGreen> */}
                </div>
                <div className={darkMode ? 'hidden' : ''}>
                <ButtonWhiteBlack darkMode={darkMode} buttonName='Check my Roadmap'></ButtonWhiteBlack>
                </div>
                
            </div>

        </div>
        



        
        

    </section>
   
  )
}

export default Presentation