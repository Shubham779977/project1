import React from 'react'
import "../styles/contact.scss";

const Contact = () => {
  return (
    <div className='contact'>
        <div>
        <h1>Contact Us</h1>
        <form>
            Name:<input type="text" name="name" required placeholder='Name' />
            Email:<input type="email" name="email" required placeholder='Email' />
            Message:<textarea name="message" cols="50" rows="10"></textarea>
            <input type="button" id='btn' value="Submit" />
        </form>
        </div>
    </div>
  )
}

export default Contact