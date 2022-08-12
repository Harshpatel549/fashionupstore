import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import '../styles/contact.css';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_57hxpwd', 'template_p7338hx', form.current, 'Npo2oFtKTc2vNB7hD')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <>
            <div className="form">
                <div className="formHeader">
                    <h2>Contact Us</h2>
                </div>
                <div className="formContent">
                    <form className='contact_form' ref={form} onSubmit={sendEmail}>
                <label htmlFor='user_name'>Name</label>
                <input type="text" name="user_name" className='text' id='user_name'/>
                <label htmlFor='user_email'>Email</label>
                <input className='email' type="email" name="user_email" id='user_email'/>
                <label htmlFor='message'>Message</label>
                <textarea name="message" id='message'/>
                <input type="submit" id='button'  value="Submit" />
            </form>
                </div>
            </div>
        </>
    )
}

export default Contact