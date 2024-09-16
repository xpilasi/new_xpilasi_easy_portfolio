import React, { useEffect, useRef } from 'react';


const Road = ({
    
    year,
    yearDesc
}) => {

    

    let rounded = false;
    let roundedCss = 'rounded-sm';
    let roundedCssCard = 'rounded-b-sm ';


    rounded ? roundedCss = 'rounded-md' : roundedCss = '';
    rounded ? roundedCssCard = 'rounded-b-sm ' : roundedCssCard = ''

    return(
            <article className={`grid-item  ${roundedCss} px-0 overflow-hidden h-auto`} >
              
              <div className={ `py-3  mb-0 ${roundedCssCard}`}>
                <p className=' text-slate-500 font-interDisplayLight text-[10px] lg:text-[15px] lg:pb-3 '>{year}</p>
                <p className='text-white font-interDisplayLight text-[13px] lg:text-[15px]'>{yearDesc}</p>
              </div>
            </article>

    )
        
        
       

    

   

};

export default Road;
