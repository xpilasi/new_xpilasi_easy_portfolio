import React from 'react'
import Image  from 'next/image';
import profilePictureXp from '../../../public/img//perfil/perfil_final_2024.png'
import profilePictureXpT from '../../../public/img/fotoPerfil3.png'
import profilePictureXpT2 from '../../../public/img/fotoPerfil4.png'
import quoteClosePurple from '../../../public/img/icons/quote-close-purple.svg'
import quoteOpenPurple from '../../../public/img/icons/quote-open-purple.svg'
import quoteStartSVG from '../../../public/img/icons/iconQuoteOpenSVG.svg'
import quoteCloseSVG from '../../../public/img/icons/iconQuoteCloseSVG.svg'
import ButtonWhiteBlack from '../../../components/widgets/buttons/ButtonWhiteBlack';
import useMenuStore from '@/store/menuStore.js';

const Presentation = ({showRoadMap, setShowRoadMap}) => {

    const { darkMode } = useMenuStore();

    let profilePicture = profilePictureXp;

    darkMode ? profilePicture = profilePictureXp : profilePicture = profilePictureXp;
  
   

    const productManagerDesc = 'I am a professional with a forward-thinking vision and proactive attitude who combines technical, strategic, and relational skills. I am passionate about creating innovative products and services that have a positive impact on the world.';
    const developerDesc = ' am a dedicated Junior developer seeking to leverage my technical skills and experience in the Retail and Business industry in the challenging field of software development';
  

    const test = () => {console.log('test');}
    return (
    <section id='about-me' className='h-screen flex flex-col items-center justify-center '>

        
        <div className=' max-w-5xl flex flex-col justify-center items-center bg-white '>

         
            {/* presentation 1 */}  
            <div className={`lg:flex   mt-5 justify-center items-center dark:bg-white bg-transparent max-w-5xl  `}>

                    <div className=' flex justify-center items-center '><Image className='opacity-100 mt-2' src={profilePicture} width={250} ></Image></div>
                
                    <div className=' flex justify-center items-center py-5  '>
                    <Image  
                        className={`ml-5 px-1 `} 
                        src={darkMode ? quoteStartSVG : quoteOpenPurple}
                        width={60} 
                    />
                    <div>
                    
                    <div>
                        <p className='mx-0  py-5 px-0 text-center text-black font-light max-w-md'>{productManagerDesc}</p>
                    </div>

                    </div>  
                    <Image 
                        className={`flex px-2 `}
                        src={darkMode ? quoteCloseSVG : quoteClosePurple} 
                        width={100}
                    />
                    </div>

                </div>

            {/* presentation 2 (button inside container) */}
            <div className={`lg:flex lg:pr-5 flex justify-center items-center w-full ${!darkMode ? 'bg-white' : 'bg-white'} max-w-5xl pb-5 lg:justify-end lg:items-end`}>
                
                <ButtonWhiteBlack onClick={() =>{setShowRoadMap(!showRoadMap);  }} darkMode={darkMode} buttonName='Check my 
                Story'></ButtonWhiteBlack>
           
                
            </div>

        </div>
        



        
        

    </section>
   
  )
}

export default Presentation