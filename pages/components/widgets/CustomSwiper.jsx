// Importamos los estilos y componentes necesarios de Swiper
import React from 'react'
// import { SwiperSlide } from 'swiper/react';
import {Swiper, SwiperSlide} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
import Image from 'next/image';


// Si deseas agregar funciones adicionales (como navegación o paginación)
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Un componente de Swiper en React
const CustomSwiper = ({photoMap}) => {


  return (
    <Swiper
      Añadimos los módulos para las funcionalidades adicionales
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}  // Espacio entre los slides
      slidesPerView={1}  // Cantidad de slides visibles
      navigation        // Botones de navegación (siguiente y anterior)
      pagination={{ clickable: true }}  // Indicadores de paginación
      scrollbar={{ draggable: true }}  // Barra de scroll para arrastrar
      onSlideChange={() => console.log('Slide cambiado')}
      onSwiper={(swiper) => console.log(swiper)}
    >
     
        {photoMap.map(photo =>{

            <SwiperSlide>
            <Image src={photo.src} alt='' />
            </SwiperSlide> 

        })

        }
     
    </Swiper>
  );
};

export default CustomSwiper;




