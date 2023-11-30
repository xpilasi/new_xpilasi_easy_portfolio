import React from 'react'
import Image  from 'next/image';
import profilePictureXp from '../../../public/img/perfil.png'
import quoteStartSVG from '../../../public/img/icons/iconQuoteOpenSVG.svg'
import quoteCloseSVG from '../../../public/img/icons/iconQuoteCloseSVG.svg'

const Presentation = ({darkMode}) => {
    const bgLightMode = 'bg-neon-pink text-white rounded-xl';
    const bgDarkMode = '';
  return (
    <section>

<div className='py-10 mb-12 h-screen section flex items-center ' id='presentation'>

{/* My picture */}


<div className='w-full'>

    <div className={`lg:flex p-0 justify-center items-center ${bgLightMode}`}>
        <div className=' flex justify-center items-center '><Image src={profilePictureXp} width={250} ></Image></div>
    
    <div className=' p-0 flex justify-center items-center mt-5 '>
        <Image  className=' ml-5' src={quoteStartSVG}width={60} ></Image>
        
        <div>
        
        <div>
        
            <p className='mx-0  py-5 px-0 text-center font-extralight max-w-md'>I am a dedicated Junior developer seeking to leverage my technical skills and experience in the Retail and Business industry 
    in the challenging field of software development</p>
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