import React from 'react'
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import '../app/styles/contact.css';


const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
        <div className='contact-grid md:grid-cols-2'></div>
        <div className='contact-space'>
            <h2 className='contact-heading' data-aos="zoom-in-up">Get in touch</h2>
            <p className='contact-text' data-aos="zoom-in-up">
                drop me a line, give me a call, or send me a message by submitting a form. 
            </p>
            <div className='contact-flex' data-aos="zoom-in-up"><CiMail size={30}  />syedakber410@gmail.com</div>
            <div className='contact-flex' data-aos="zoom-in-up"><BsTelephone size={30}/>(021) 1234567</div>


            <div className='contact-space'>
                <div className='form' data-aos="zoom-in-up">
                    <label htmlFor="name">Name</label>
                    <input type="text"
                    className='input-field' 
                    id='name' 
                    />
                </div>
                <div className='form' data-aos="zoom-in-up">
                    <label htmlFor="email">Email</label>
                    <input type="text"
                    className='input-field' 
                    id='email' 
                    />
                </div>
                <div className='form' data-aos="zoom-in-up">
                    <label htmlFor="msg">Message</label>
                    <textarea 
                    className='text-area-field' 
                    id='msg' rows={8}>
                        </textarea>
                </div>

                <button className='button' data-aos="zoom-in-up">Send</button>
            </div>
        </div>
    </div>
  );
};

export default Contact;
