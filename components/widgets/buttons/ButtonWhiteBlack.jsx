import React from 'react';
import styles from '@/styles/Button1.module.css';

const ButtonWhiteBlack = ({ buttonName, onClick, mode }) => {
  return (
    <button 
      onClick={onClick}
      className={styles.btnHoverWB}
    >
      <span className={`font-interDisplayLight ${mode === 'light' ? 'text-black' : 'text-white'}`}>
        {buttonName}
      </span>
    </button>
  )
}

export default ButtonWhiteBlack  