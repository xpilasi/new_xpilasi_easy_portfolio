import React from 'react'
import Image  from 'next/image';
import profilePictureXp from '../../../public/img/perfil/xp-profile-2025.png'
import quoteClosePurple from '../../../public/img/icons/quote-close-purple.svg'
import quoteOpenPurple from '../../../public/img/icons/quote-open-purple.svg'
import quoteStartSVG from '../../../public/img/icons/iconQuoteOpenSVG.svg'
import quoteCloseSVG from '../../../public/img/icons/iconQuoteCloseSVG.svg'
import ButtonWhiteBlack from '../../../components/widgets/buttons/ButtonWhiteBlack';
import useMenuStore from '@/store/menuStore.js';

const Presentation = ({showRoadMap, setShowRoadMap}) => {

    const { darkMode } = useMenuStore();

    let profilePicture = profilePictureXp;

    const productManagerDesc = 'I am a professional with a forward-thinking vision and proactive attitude who combines technical, strategic, and relational skills. I am passionate about creating innovative products and services that have a positive impact on the world.';

    return (
    <section id='about-me' className='h-screen flex flex-col items-center justify-center px-4'>

        <div className='relative max-w-5xl w-full bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm'>

            <div className='lg:flex items-stretch w-full'>

                {/* Profile Image - 1/3 height on tablet, full on desktop */}
                <div className='lg:w-1/3 overflow-hidden h-64 md:h-80 lg:h-auto'>
                    <Image
                        className='w-full h-full object-cover rounded-2xl shadow-lg'
                        src={profilePicture}
                        alt='Profile picture'
                        style={{ objectFit: 'cover', objectPosition: 'center top', minHeight: '100%' }}
                    />
                </div>

                {/* Content area con padding para el botón */}
                <div className='lg:w-2/3 flex flex-col justify-center py-8 px-4 md:px-6'>
                    <div className='relative flex justify-center items-center px-8 md:px-12'>
                        {/* Opening Quote - Top Left */}
                        <Image
                            className='absolute -top-4 -left-2 md:-top-2 md:-left-0 opacity-30 z-0'
                            src={darkMode ? quoteStartSVG : quoteOpenPurple}
                            width={40}
                            height={40}
                        />

                        {/* Text Content */}
                        <p className='relative z-10 text-center dark:text-white text-gray-800 font-light text-sm md:text-base leading-relaxed max-w-md'>
                            {productManagerDesc}
                        </p>

                        {/* Closing Quote - Bottom Right */}
                        <Image
                            className='absolute -bottom-4 -right-2 md:bottom-4 md:-right-2 opacity-30 z-0'
                            src={darkMode ? quoteCloseSVG : quoteClosePurple}
                            width={40}
                            height={40}
                        />
                    </div>

                    {/* Button - Centered on mobile and tablet */}
                    <div className='flex justify-center mt-8 lg:hidden'>
                        <ButtonWhiteBlack
                            onClick={() => {setShowRoadMap(!showRoadMap);}}
                            darkMode={darkMode}
                            buttonName='Check my Story'
                        />
                    </div>
                </div>

            </div>

            {/* Button positioned absolutely for desktop only */}
            <div className='hidden lg:block absolute bottom-6 right-6'>
                <ButtonWhiteBlack
                    onClick={() => {setShowRoadMap(!showRoadMap);}}
                    darkMode={darkMode}
                    buttonName='Check my Story'
                />
            </div>

        </div>

    </section>

  )
}

export default Presentation