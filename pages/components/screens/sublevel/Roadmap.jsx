import React, { useEffect, useRef } from 'react';
import Road from '../../widgets/Road';


const Roadmap = () => {

    console.log('roadmap');

    return (

    <section id='roadmap' className='min-h-screen bg-red-400 w-full fixed z-50 left-0 px-5 hiddengit ad'>

        <div className='flex flex-col lg:grid lg: grid-cols-2'>
        <Road year={'2011'} yearDesc={'This is a desc'}></Road>
        <Road year={'2016'} yearDesc={'This is a desc2'}></Road>
        <Road year={'2021'} yearDesc={'This is a desc3'}></Road>
        <Road year={'2023'} yearDesc={'This is a desc4'}></Road>
        <Road year={'2024'} yearDesc={'This is a desc5'}></Road>

        </div>
        

    </section>

    )

    

};

export default Roadmap;
