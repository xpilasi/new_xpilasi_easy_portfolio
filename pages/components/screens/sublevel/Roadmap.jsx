import React, { useEffect, useState } from 'react';
import Road from '../../widgets/Road';
import RoadmapTitle from '../../../../components/widgets/titles/RoadmapTitle';
import RoadmapSubTitle from '../../../../components/widgets/titles/RoadmapSubTitle';
import RoadmapTopTitle from '../../../../components/widgets/titles/RoadmapTopTitle';
import CloseRoadMap from '../../widgets/menu/CloseRoadMap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const Roadmap = ({showRoadMap, setShowRoadMap}) => {

    const [isVisible, setIsVisible] = useState(showRoadMap);
    const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    setIsVisible(showRoadMap);
}, [showRoadMap]);

    const topDesc = 'xpilasi.com';
    const titleDesc = 'My Story';
    const subtitleDesc = 'In 2021, I embarked on a transformation into software development through courses, certifications, and daily practice.';

    const roadmapItems = [
        {
            id: 1,
            year: '2011',
            yearDesc: (
                <>
                  I obtained a <span className='text-indigo-400 dark:text-indigo-300 font-semibold'>Bachelor Business Administration</span> degree from Diego Portales University in Santiago, Chile. In the early months of the following year, I started working as a category analyst at the multinational company Walmart.
                </>
            )
        },
        {
            id: 2,
            year: '2016',
            yearDesc: (
                <>
                  After gaining several years of experience in <span className='text-indigo-400 dark:text-indigo-300 font-semibold'>Team leadership</span>, negotiation, and project launches, I assumed the role of <span className='text-indigo-400 dark:text-indigo-300 font-semibold'>Business Development Manager</span> at a renowned company in Latin America.
                </>
            )
        },
        {
            id: 3,
            year: '2021',
            yearDesc: (
                <>
                  I discover the world of <span className='text-indigo-400 dark:text-indigo-300 font-semibold'>programming</span> through various contacts and am captivated. I begin my first course at the IT Academy of Barcelona, where I learn the fundamentals of programming, then I dive into <span className='text-indigo-400 dark:text-indigo-300 font-semibold'>Python</span>, <span className='text-indigo-400 dark:text-indigo-300 font-semibold'>SQL</span> and <span className='text-indigo-400 dark:text-indigo-300 font-semibold'>Django</span>.
                </>
            )
        },
        {
            id: 4,
            year: '2023',
            yearDesc: (
                <>
                  I focused on my personal backlog requirements to build Android and IOs apps with <span className='text-indigo-400 dark:text-indigo-300 font-semibold'>Flutter</span>. Most of my skills acquired in the past were super useful: I managed to launch one Beta in <span className='text-indigo-400 dark:text-indigo-300 font-semibold'>Google Play</span> and build a complex <span className='text-indigo-400 dark:text-indigo-300 font-semibold'>FullStack climbing app</span>.
                </>
            )
        },
        {
            id: 5,
            year: '2024',
            yearDesc: (
                <>
                  I wanted to expand my <span className='text-indigo-400 dark:text-indigo-300 font-semibold'>Front End</span> skills and validate my knowledge so I decide to start an official IT education at the <span className='text-indigo-400 dark:text-indigo-300 font-semibold'>University Ramón Llul - LaSalle</span> at Barcelona. I learned and practiced Website's development with <span className='text-indigo-400 dark:text-indigo-300 font-semibold'>React</span> and <span className='text-indigo-400 dark:text-indigo-300 font-semibold'>Vue</span>, besides several industry standards regarding HTML, CSS and Javascript.
                </>
            )
        },
        {
            id: 6,
            year: '2025',
            yearDesc: (
                <>
                  After launching a few personal projects, I began doing <span className='text-indigo-400 dark:text-indigo-300 font-semibold'>freelance</span> work for <span className='text-indigo-400 dark:text-indigo-300 font-semibold'>Gluecharm</span>, a company diversified across multiple business units. I contributed to several commercial websites as well as to the development of a full management <span className='text-indigo-400 dark:text-indigo-300 font-semibold'>SaaS for campgrounds</span>. I learned to boost my productivity using <span className='text-indigo-400 dark:text-indigo-300 font-semibold'>artificial intelligence</span> tools and to integrate different workflows with complex systems such as <span className='text-indigo-400 dark:text-indigo-300 font-semibold'>MCPs</span>, <span className='text-indigo-400 dark:text-indigo-300 font-semibold'>Supabase</span>, <span className='text-indigo-400 dark:text-indigo-300 font-semibold'>payment platforms</span>, among others.
                </>
            )
        }
    ];
    return (

    <section
    id='roadmap'
    className={
        `${isVisible ? 'fixed min-h-screen w-full left-0 top-0 px-4 md:px-6 lg:px-10 py-8 overflow-y-auto z-50 opacity-100 pointer-events-auto dark:bg-gradient-to-r dark:from-gray-800 dark:to-black bg-gradient-to-r from-white to-gray-100' : 'hidden'}`
        }
    >
        <CloseRoadMap showRoadMap={showRoadMap} setShowRoadMap={setShowRoadMap} ></CloseRoadMap>

        <div className='max-w-6xl mx-auto mt-12 md:mt-16'>
            <RoadmapTopTitle titleText={topDesc}></RoadmapTopTitle>
            <RoadmapTitle titleText={titleDesc}></RoadmapTitle>
            <RoadmapSubTitle titleText={subtitleDesc}></RoadmapSubTitle>

            {/* Roadmap Carousel */}
            <div className="mt-8 lg:mt-12 w-full max-w-full">
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={2}
                    spaceBetween={32}
                    loop={false}
                    grabCursor={true}
                    initialSlide={0}
                    watchSlidesProgress={true}
                    pagination={{
                        clickable: true,
                        dynamicBullets: false,
                    }}
                    navigation={false}
                    onSliderMove={() => setIsDragging(true)}
                    onTouchEnd={() => setTimeout(() => setIsDragging(false), 50)}
                    onSliderFirstMove={() => setIsDragging(true)}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.15,
                            spaceBetween: 12,
                            centeredSlides: false,
                        },
                        640: {
                            slidesPerView: 1.15,
                            spaceBetween: 12,
                            centeredSlides: false,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 16,
                        },
                        1024: {
                            slidesPerView: 1.5,
                            spaceBetween: 24,
                        },
                        1280: {
                            slidesPerView: 2,
                            spaceBetween: 32,
                        }
                    }}
                    className="roadmap-swiper"
                >
                    {roadmapItems.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Road year={item.year} yearDesc={item.yearDesc} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

    </section>

    )

    

};

export default Roadmap;
