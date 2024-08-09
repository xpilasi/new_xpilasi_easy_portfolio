import React, { useEffect, useRef } from 'react';


const Road = ({
    
    year,
    yearDesc
}) => {

    console.log('roadmap');

    let rounded = false;
    let roundedCss = 'rounded-sm';
    let roundedCssCard = 'rounded-b-sm ';


    rounded ? roundedCss = 'rounded-md' : roundedCss = '';
    rounded ? roundedCssCard = 'rounded-b-sm ' : roundedCssCard = ''

    return(
            <article className={`grid-item  ${roundedCss} px-0 overflow-hidden h-auto`} >
              
              <div className={ `bg-danny-grey py-3 pl-3 mb-0 ${roundedCssCard}`}>
                <p className=' text-slate-500 font-extralight text-xs'>{year}</p>
                <p className='text-white font-extralight text-sm'>{yearDesc}</p>
              </div>
            </article>

    )
        
        
       

    

   

};

export default Road;
