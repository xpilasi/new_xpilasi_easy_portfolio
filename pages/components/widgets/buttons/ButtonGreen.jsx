import React from 'react';
import styles from '../../../../styles/Button1.module.css';

const ButtonGreen = ({darkMode, buttonName}) => {

    let inputButtonStyleDark = 'transform transition-transform font-bold hover:scale-105 w-full text-black  bg-neon-green py-5 m   lg:w-auto px-10 cursor-pointer';
    let inputButtonStyleLight = 'transform transition-transform hover:scale-105  bg-neon-green py-5 my-3  px-5 sm:w-[32rem] md:w-[32rem] lg:w-[32rem] text-dark-neon-fadecursor-pointer' ;
    let inputButtonStyle = '';

    darkMode ? inputButtonStyle = inputButtonStyleDark : inputButtonStyle = inputButtonStyleLight ;

  return (


    <button className={styles.btnHover}><span className='font-interDisplayLight'>{buttonName}</span></button>
   
  )
}

export default ButtonGreen  