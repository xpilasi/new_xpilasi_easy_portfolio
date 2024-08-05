import React from 'react';
import styles from '../../../../styles/Button1.module.css';

const ButtonGreenWhite = ({darkMode, buttonName}) => {


  return (


    <button className={styles.btnHoverGW}><span className='font-interDisplayLight'>{buttonName}</span></button>
   
  )
}

export default ButtonGreenWhite  