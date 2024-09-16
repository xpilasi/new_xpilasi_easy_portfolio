// Importamos los estilos y componentes necesarios de Swiper
import React from 'react';
import dynamic from 'next/dynamic';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import tonerelics from '../../../public/img/projects_logos/web_design/tonerelics2.png';
import gorilla from '../../../public/img/projects_logos/web_design/justlist_mockup_3png.png';

// Cargamos Swiper dinámicamente con SSR deshabilitado para Next.js
const Swiper = dynamic(() => import('swiper/react').then(mod => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import('swiper/react').then(mod => mod.SwiperSlide), { ssr: false });

// Importamos las funcionalidades adicionales de Swiper
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Un componente de Swiper en React
const CustomSwiper = ({ photoMap = [] }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}  // Espacio entre los slides
      slidesPerView={1}  // Cantidad de slides visibles
      navigation        // Botones de navegación (siguiente y anterior)
      pagination={{ clickable: true }}  // Indicadores de paginación
      scrollbar={{ draggable: true }}  // Barra de scroll para arrastrar
      onSlideChange={() => console.log('Slide cambiado')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {photoMap.map((photo, index) => (
        <SwiperSlide key={index}>
          <Image src={photo} alt='' width={500} height={300} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomSwiper;

