import React from 'react'

const ContactForm = () => {
    return (
        <form action="https://api.web3forms.com/submit" method="POST" className="contact-form" >
            <input type="hidden" name="access_key" value="db87623e-e10f-4b0e-8319-7f7878efd2a0" required />
            <div className="inputDiv glass-effect" >
                <label htmlFor="nameInp">Your Name</label>
                <input type="text" name="name" placeholder="Enter your name here" id="nameInp" />
            </div>
            <div className="inputDiv glass-effect">
                <label htmlFor="emailInp">Email</label>
                <input type="email" name="email" placeholder="Enter your email here" id="emailInp" required />
            </div>
            <div className="inputDiv">
                <label htmlFor="message">Enter Your Message</label>
                <textarea name="message" placeholder="Message..." required></textarea>
            </div>
            <button type="submit" className="Sendbtn">Send Message</button>
        </form>
    )
}

export default ContactForm
