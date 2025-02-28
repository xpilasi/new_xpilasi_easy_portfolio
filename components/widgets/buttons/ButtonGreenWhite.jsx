import React from 'react';
import styles from '@/styles/Button1.module.css';
import Link from 'next/link';
import useMenuStore from '@/store/menuStore';

const ButtonGreenWhite = ({buttonName, url}) => {

  const { darkMode } = useMenuStore();
  return (

    <Link
      href={`${url ? url : '/'}`}
      target="_blank"

    >
    <button className={`${!darkMode ? styles.btnHoverGWLightMode : styles.btnHoverGW}`}><span className='font-interDisplayLight'>{buttonName}</span></button>
    </Link>
   
  )
}

export default ButtonGreenWhite  