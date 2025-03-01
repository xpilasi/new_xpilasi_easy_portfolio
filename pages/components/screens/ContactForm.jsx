import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com';
import SectionSubTitle from '../../../components/widgets/titles/SectionSubTitle';
import SectionTitle from '../../../components/widgets/titles/SectionTitle';
import ButtonGreenWhite from '../../../components/widgets/buttons/ButtonGreenWhite';

const ContactForm = ({darkMode, showModal, setShowModal}) => {
    const [errors, setErrors] = useState({});
    const [snackbar, setSnackbar] = useState({ show: false, message: '', isError: false });
    const [submitted, setSubmitted] = useState(false);

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
        
    const validateForm = (name, email, message) => {
      const newErrors = {};
      
      if (!name.trim()) {
        newErrors.name = 'Name is required';
      }
      
      if (!email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = 'Email is invalid';
      }
      
      if (!message.trim()) {
        newErrors.message = 'Message is required';
      }
      
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const showSnackbar = (message, isError = false) => {
      setSnackbar({ show: true, message, isError });
      setTimeout(() => {
        setSnackbar({ show: false, message: '', isError: false });
      }, 3000);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        
        // Collect form data
        const name = event.target.name.value;
        const email = event.target.email.value;
        const message = event.target.message.value;
    
        // Validate form
        if (!validateForm(name, email, message)) {
          showSnackbar('Please fill in all required fields', true);
          return;
        }

        // Configure email
        const templateParams = {
          from_name: name,
          from_email: email,
          message: message,
        };
        
        // Send email using EmailJS
        emailjs.send('service_irzho0e', 'template_bb4bjrw', templateParams, 'zdnPvqDa-hzgIjpHf')
          .then((response) => {
            console.log('Email sent successfully', response.status, response.text);
            showSnackbar('Message sent successfully!');
            
            setTimeout(() => {
              setShowModal(!showModal);
            }, 700);
          })
          .catch((error) => {
            console.error('Error sending email', error);
            showSnackbar('Failed to send message. Please try again.', true);
          });
    
        // Reset the form
        event.target.reset();
        setErrors({});
      };

    return (
      <section id='contact' className='h-screen flex flex-col justify-center items-center relative'>
        <article className='flex flex-col justify-center items-center py-5'>
          <div className='text-center max-w-max mx-auto'>
            <SectionTitle titleText={title}></SectionTitle>
            <SectionSubTitle titleText={subtitle}></SectionSubTitle>
          </div>
        
          <div className='w-full'>
            <form onSubmit={handleSubmit}>
              <div className='input-container'>
                <label htmlFor='name'>Your Name</label>  
                <input 
                  className={`custom-input ${submitted && errors.name ? 'border-red-500' : ''}`} 
                  type="text" 
                  placeholder={'Enter your name'} 
                  name="name" 
                  id='name'
                />
              </div>
              
              <div className='input-container'>
                <label htmlFor='email'>Email Address</label> 
                <input 
                  className={`custom-input ${submitted && errors.email ? 'border-red-500' : ''}`} 
                  type="email" 
                  placeholder={'Enter your email address'} 
                  name="email" 
                  id='email'
                />
              </div>
              
              <div className='input-container'>
                <label htmlFor='message'>Your Message</label> 
                <textarea 
                  className={`custom-textarea ${submitted && errors.message ? 'border-red-500' : ''}`} 
                  placeholder={'Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?'} 
                  name="message"
                  id="message"
                />
              </div>
              
              <ButtonGreenWhite buttonName='Send'></ButtonGreenWhite>
            </form>
          </div>
        </article>

        {/* Snackbar */}
        <div 
          className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-md shadow-lg transition-all duration-300 ${
            snackbar.show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
          } ${
            snackbar.isError ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
          }`}
        >
          {snackbar.message}
        </div>
      </section>
    )
}

export default ContactForm