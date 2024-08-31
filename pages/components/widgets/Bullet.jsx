import React from 'react';

const   Bullet = ({ bulletsArray }) => {

    const showBullets = (bulletsArray) => {

        return bulletsArray?.map((bullet, index) => {
            
            if (bullet === '-') {
                return null; // Si el elemento es '-', no se renderiza nada
            }
            return <p className='pb-2' key={index}>•  {bullet}</p>;
        });
    };

    
    
    return (
        <div className='text-white font-interdisplayLight text-xs lg:text-sm  lg:pb-12 pb-2 tracking-wider'>
            {showBullets(bulletsArray)}
        </div>
    );
};

export default Bullet;
