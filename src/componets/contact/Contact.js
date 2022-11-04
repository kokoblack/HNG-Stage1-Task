import React from 'react'
import Footer from '../footer/Footer'
import './contact.css'

const Contact = () => {

    return (
      <div>
        <div className='form-container'>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me 
            about anything you have in mind</p>

          <form className='form'>
            <div className='form-name_container-style mg-outside'>
                <div className='form-name_style'>
                    <label className='form-mg'>First Name</label>
                    <input type='text' id='first_name'placeholder='Enter your first name' className='form-name_style-fn input'/>
                </div>
                <div className='form-name_style '>
                    <label className='form-mg'>Last Name</label>
                    <input type='text' id='last_name' placeholder='Enter your last name' className='form-name_style-ln input'/>
                </div>
            </div>
            <div className='mg-outside flex'>
                <label className='form-mg'>Email</label>
                <input type='email' id='email' placeholder='yourname@name.com' className='input ' />
            </div>
            <div className='mg-outside flex'>
                <label className='form-mg' >Message</label>
                <textarea type='textarea' id='message' placeholder="Send me a message and i'll reply you as soon as possible" />
            </div>
            <div className='mg-outside flex1'>
                <input type='checkbox' className='form-tick' />
                <label className='form-text'>You agree to providing your data to Haruna Abdul Kareem who may contact you.</label>
            </div>
            <button type='submit' id='btn__submit'>Send message</button>
        </form>
      </div>
      <Footer/>
      </div>
    )
}

export default Contact