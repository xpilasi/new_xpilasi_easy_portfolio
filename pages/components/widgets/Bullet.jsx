import React from 'react';

const Bullet = ({ bulletsArray }) => {

    const showBullets = (bulletsArray) => {

        return bulletsArray?.map((bullet, index) => {

            if (bullet === '-') {
                return null; // Si el elemento es '-', no se renderiza nada
            }
            return <p className='pb-2' key={index}>•  {bullet}</p>;
        });
    };



    return (
        <div className='text-gray-700 dark:text-gray-300 font-light text-sm md:text-base leading-relaxed lg:pb-12 pb-2'>
            {showBullets(bulletsArray)}
        </div>
    );
};

export default Bullet;
