import React from 'react'
import Title from './Title'


const ContactForm = () => {
  return (
    <section>

        {/* Title */}
        <div>
            <Title title = {'Contact Me'}></Title>
        </div>
        {/* Contact Form */}
        <div>


            <form action="">

            <input type="text" placeholder={'Name'}/>

            <br />
            <input type="email" placeholder={'Email'}/>
            <br/>  
            <input type="textarea" placeholder={'Message'}/>
            <br />
            <input type="submit" value={'SEND'} />

            </form>

        </div>

        


    </section>
  )
}

export default ContactForm