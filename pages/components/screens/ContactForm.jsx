import React, { useRef } from 'react'
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import SectionTitle from '../widgets/titles/SectionTitle';
import SectionSubTitle from '../widgets/titles/SectionSubTitle';
import ButtonGreen from '../widgets/buttons/ButtonGreen';
import ButtonWhite from '../widgets/buttons/ButtonWhite';
import ButtonGreenWhite from '../widgets/buttons/ButtonGreenWhite';
import ButtonWhiteBlack from '../widgets/buttons/ButtonWhiteBlack';
import styleInputCss from '../../../styles/Inputs.module.css';


const ContactForm = ({darkMode}) => {

    var formBg = 'bg-light-blueberry';

    let inputStyle = 'w-full py-5 my-2 px-5 sm:w-[32rem] md:w-[32rem] lg:w-[32rem] bg-black border-b ';
    let gradientBg = 'bg-gradient-to-r from-neon-blueberry to-neon-pink'; 
    let inputSendButtonStyle = `transform transition-transform hover:scale-105 w-full text-black bg-neon-green py-5 my-3  px-5 sm:w-[32rem] md:w-[32rem] lg:w-[32rem] cursor-pointer `;
    let inputTextAreaStyle = 'w-full my-2 h-60 bg-black sm:h-60 md:h-60 lg:h-36 xl:h-60 py-5 px-5  text-white sm:w-[32rem] md:w-[32rem] lg:w-[32rem] border-b';

    if(darkMode !== true){
      inputStyle = `w-full py-5 my-2  px-5 text-dark-neon-fade sm:w-[32rem] md:w-[32rem] lg:w-[32rem] ${formBg}`
      gradientBg = ' bg-gradient-to-r from-neon-blueberry  to-neon-pink'; 
      inputSendButtonStyle = `transform transition-transform hover:scale-105 w-full bg-neon-green py-5 my-3  px-5 sm:w-[32rem] md:w-[32rem] lg:w-[32rem] text-dark-neon-fadecursor-pointer `;
      inputTextAreaStyle = `w-full my-2 h-40 sm:h-70 xl:h-72   py-5 px-5 text-dark-neon-fade sm:w-[32rem] md:w-[32rem] lg:w-[32rem] ${formBg}`;
  };

const title =  'Send me a message!';
const subtitle = 'Got a question or proposal, or just want to say hello? Go ahead.';
        
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
    <section id='contact' className='h-screen flex flex-col  justify-center  items-center  ' >

        <article className='flex flex-col justify-center items-center py-5'>
          <div className='text-center max-w-max mx-auto'>
          <SectionTitle titleText={title}></SectionTitle>
          <SectionSubTitle titleText={subtitle}></SectionSubTitle>
          </div>
        

        
        
        <div className=' w-full'>


            <form onSubmit={handleSubmit}>

            <div className='input-container'>
              <label for='name' >Your Name</label>  
              <input className='custom-input' type="text" placeholder={'Enter your name'} name="name" id='name'/>
            </div>
            
            <div className='input-container'>
              <label for='email' >Email Address</label> 
              <input className='custom-input' type="email" placeholder={'Enter your email address'} name="email" id='email'/>
            </div>
            
            <div className='input-container'>
              <label for='email' >Your Message</label> 
              <textarea className= 'custom-textarea' type="textarea" placeholder={'Hi, I think we need a design system for our products at Comany X. How soon can you hop on to discuss this?'} name="message"/>
            </div>
            
            <ButtonGreenWhite buttonName='Send'></ButtonGreenWhite>

            
            
            
            </form>

        </div>

        
        </article>

        
        
        


    </section>
  )
}

export default ContactForm