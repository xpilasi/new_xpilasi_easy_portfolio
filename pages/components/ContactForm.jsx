import React from 'react'
import Title from './Title'
import MiniSubTitle from './MiniSubTitle';



const ContactForm = ({darkMode}) => {

    var formBg = 'bg-light-blueberry';

    let inputStyle = 'py-5 my-2 rounded px-5 text-dark-neon-fade w-full lg:w-[32rem]';
    let gradientBg = ' bg-gradient-to-r from-neon-blueberry  to-neon-pink'; 
    let inputSendButtonStyle = ` ${gradientBg} py-5 my-3 rounded px-5 w-full  lg:w-[32rem] hover:bg-dark-neon-fade w-full lg:w-[32rem]';
    // let gradientBg = ' bg-gradient-to-r from-neon-blueberry  to-`;
    let  inputTextAreaStyle = 'my-2 h-60 rounded py-5 px-5 text-dark-neon-fade w-full  lg:w-[32rem] ';
    
    if(darkMode !== true){
        inputStyle = `py-5 my-2 rounded px-5 text-dark-neon-fade w-full lg:w-[32rem] ${formBg}`
        gradientBg = ' bg-gradient-to-r from-neon-blueberry  to-neon-pink'; 
        inputSendButtonStyle = ` ${gradientBg} py-5 my-3 rounded px-5 w-full text-white lg:w-[32rem]`;
        inputTextAreaStyle = `my-2 h-60 rounded py-5 px-5 text-dark-neon-fade w-full  lg:w-[32rem] ${formBg}`;
    } 

    
  
    return (
    <section className='section' >
        <div className='text-center '>

            {/* Title */}
        <div>
            <Title title = {'Contact Me'}></Title>
            <MiniSubTitle miniSubTitle = {"Let's have a chat!"}/>
        </div>
        
        {/* Contact Form */}
        <div className='   justify-center my-10'>


            <form action="">

            <input className={inputStyle} type="text" placeholder={'Name'}/>

            <br />
            <input className={inputStyle} type="email" placeholder={'Email'}/>
            <br/>  
            <textarea className= {inputTextAreaStyle} type="textarea" placeholder={'Write yor message here'}/>
            <br />
            <input className={inputSendButtonStyle}type="submit" value={'SEND'} />

            </form>

        </div>

        </div>
        
        


    </section>
  )
}

export default ContactForm