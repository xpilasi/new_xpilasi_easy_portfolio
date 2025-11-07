import React from 'react';

const Road = ({ year, yearDesc }) => {

    return(
        <article className='group relative h-full min-h-72 bg-white dark:bg-slate-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 '>

            {/* Year Badge */}
            <div className='inline-block mb-4 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-600 dark:to-purple-600 rounded-full'>
                <p className='text-white font-semibold text-sm md:text-base tracking-wide'>{year}</p>
            </div>

            {/* Description */}
            <div className='text-gray-700 dark:text-gray-300 font-light text-sm md:text-base leading-relaxed'>
                {yearDesc}
            </div>

        </article>
    )

};

export default Road;
