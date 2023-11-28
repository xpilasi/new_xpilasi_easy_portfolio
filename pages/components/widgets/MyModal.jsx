import React from 'react';
import Modal from 'react-modal';
import { MdClose } from "react-icons/md";

Modal.setAppElement('#__next') // reemplaza '#root' con el id de tu elemento raíz

const MyModal = ({ isOpen, onRequestClose, content,title }) => {
  const classModal2 = 'my-modal';
  const classModal = ' outline-none relative bg-gradient-to-r from-neon-orange  via-neon-blueberry to-neon-water opacity-90  text-white p-4 rounded-lg shadow-lg pt-5 px-10 mx-auto w-11/12 sm:w-1/2 md:w-1/2 lg:w-1/2';
  //const classModal = ' outline-none relative   text-white p-4 rounded-lg shadow-lg pt-5 px-10 mx-auto w-11/12 sm:w-1/2 md:w-1/2 lg:w-1/2';
  const highlightTextStyle = ' text-md mt-3 leading-6 md:text-md mb-10 font-extralight font-exo ';
  const subTitleStyle = 
                  `text-3xl lg:text-4xl md:text-4xl font-bold py-1 font-exo  
                   text-neon-water mt-10 text-left   leading-tight`;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="My Modal"
      className={classModal}
      style={
        {
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        }
      }
    >
      <MdClose 
      onClick={onRequestClose}
      className='absolute top-0 right-0 mt-4 mr-4 cursor-pointer'/>
      
      
      <h2 className={subTitleStyle}>{title}</h2>
      <p className={highlightTextStyle}>{content}</p>
      
    </Modal>
  );
};

export default MyModal;