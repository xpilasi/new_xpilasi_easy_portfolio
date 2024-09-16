import React from 'react';
import styles from '../../../../styles/Button1.module.css';

const ButtonWhiteBlack = ({darkMode, buttonName, onClick}) => {


  return (


    <button 
    onClick={onClick}
      className={styles.btnHoverWB}><span className='font-interDisplayLight'>{buttonName}</span></button>
   
  )
}

export default ButtonWhiteBlack  