import React from 'react';
import styles from '../../../../styles/Button1.module.css';
import Link from 'next/link';

const ButtonGreenWhite = ({darkMode, buttonName, url}) => {


  return (

    <Link
      href={`${url ? url : '/'}`}
      target="_blank"

    >
    <button className={styles.btnHoverGW}><span className='font-interDisplayLight'>{buttonName}</span></button>
    </Link>
   
  )
}

export default ButtonGreenWhite  