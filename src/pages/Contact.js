import React from 'react'
import '../styles/Contact.css'
import hotDog from '../assets/hotdog.jpg'

function Contact() {
  return (
    <div className='contact'>
      
        <div className='leftSide'  style={{ backgroundImage: `url(${hotDog})`} }></div>
        <div className='rightSide'>
          <h1>Contact Us</h1>

          <form id='contact-form'  method="POST">
            <label htmlFor='name'>Full Name</label>
            <input name='name' placeholder='Enter full name ...' type="text" />
            <label htmlFor='email'>Email</label>
            <input name='email' placeholder='Enter email address ...' type="email" />
            <label htmlFor='name'>Full Name</label>
            <input name='name' placeholder='Enter full name ...' type="text" />
            <label htmlFor='message'>Message</label>
            <textarea name="message"  cols="30" rows="10" placeholder='Enter message ...' required></textarea>
            <button type='submit'> Send Message</button>


          </form>
            
        </div>
      
    </div>
  )
}

export default Contact