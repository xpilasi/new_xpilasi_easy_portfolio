import React, { useRef } from 'react'
import Title from '../widgets/Title'
import MiniSubTitle from '../widgets/MiniSubTitle';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';


const ContactForm = ({darkMode}) => {

    var formBg = 'bg-light-blueberry';

    let inputStyle = 'w-full py-5 my-2 rounded px-5 text-dark-neon-fade sm:w-[32rem] md:w-[32rem] lg:w-[32rem]';
    let gradientBg = 'bg-gradient-to-r from-neon-blueberry to-neon-pink'; 
    let inputSendButtonStyle = `transform transition-transform hover:scale-105 w-full bg-neon-pink py-5 my-3 rounded px-5 sm:w-[32rem] md:w-[32rem] lg:w-[32rem] cursor-pointer `;
    let inputTextAreaStyle = 'w-full my-2 h-60 sm:h-60 md:h-60 lg:h-36 xl:h-60 py-5 px-5 rounded text-dark-neon-fade sm:w-[32rem] md:w-[32rem] lg:w-[32rem]';

    if(darkMode !== true){
      inputStyle = `w-full py-5 my-2 rounded px-5 text-dark-neon-fade sm:w-[32rem] md:w-[32rem] lg:w-[32rem] ${formBg}`
      gradientBg = ' bg-gradient-to-r from-neon-blueberry  to-neon-pink'; 
      inputSendButtonStyle = `transform transition-transform hover:scale-105 w-full bg-neon-pink py-5 my-3 rounded px-5 sm:w-[32rem] md:w-[32rem] lg:w-[32rem] text-white cursor-pointer `;
      inputTextAreaStyle = `w-full my-2 h-40 sm:h-70 xl:h-72  rounded py-5 px-5 text-dark-neon-fade sm:w-[32rem] md:w-[32rem] lg:w-[32rem] ${formBg}`;
  };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('esta parte funciona 1');
        // Recopila los datos del formulario
        const name = event.target.name.value;
        const email = event.target.email.value;
        const message = event.target.message.value;
    
        // Configura el correo electrónico
        const templateParams = {
          from_name: name,
          from_email: email,
          message: message,
        };
       
        // Envía el correo electrónico utilizando EmailJS
        emailjs.send('service_a1uxw4b', 'template_bb4bjrw', templateParams, 'zdnPvqDa-hzgIjpHf')
          .then((response) => {
            //console.log('Correo electrónico enviado correctamente', response.status, response.text);
            Swal.fire({
              
              text:'Thanks for your message!',
              width: 200,
              customClass: {
                popup: 'my-popup-class',
                confirmButton: 'my-confirm-button-class',
              }
            }
             
            );
          })
          .catch((error) => {
            console.error('Error al enviar el correo electrónico', error);
          });
    
        // Restablece el formulario
        event.target.reset();
      };

    return (
    <section id='contact' className='h-screen py-10 flex flex-col  justify-center  items-center' >

        <div className='flex justify-center py-5  '>
            <Title title = {'Contact Me'}></Title>
        </div>

        <div className='text-center w-full flex-col justify-center items-center' id='centrado-verticalmente'>

            
        
        
        <MiniSubTitle miniSubTitle = {"Let's have a chat!"}/>
        <div className=' w-full '>


            <form onSubmit={handleSubmit}>
              
            <input className={inputStyle} type="text" placeholder={'Name'} name="name"/>
            <br />
            
            <input className={inputStyle} type="email" placeholder={'Email'} name="email"/>
            <br/>  
            
            <textarea className= {inputTextAreaStyle} type="textarea" placeholder={'Write yor message here'} name="message"/>
            <br />
            <input className={inputSendButtonStyle}type="submit" value={'SEND'}  />

            </form>

        </div>

        </div>
        
        


    </section>
  )
}

export default ContactForm