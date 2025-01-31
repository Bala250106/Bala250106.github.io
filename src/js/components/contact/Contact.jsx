import React from 'react'
import '../../../css/contact.css'
import ContactDetails from './ContactDetails'
import ContactForm from './ContactForm'


export const Contact = () => {



  const contactDetails = [
    {
      icon: "fa-solid fa-envelope",
      data: "balamurugan.kalusivalingam@fssa.freshworks.com",
      link:"mailto:balapakki2501@gmail.com"

    },
    {
      icon: "fa-solid fa-location-dot",
      data: "Perungudi, Chennai",
      link:"https://www.google.com/maps/place/Freshworks/@12.9686991,80.2412439,17z/data=!3m1!4b1!4m6!3m5!1s0x3a525d6d9e5f8f2b:0x7afb2aa6caf3f8e1!8m2!3d12.9686991!4d80.2438188!16s%2Fg%2F1hc5cvwd7?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      icon:'fa-brands fa-linkedin',
      data:"Bala murugan",
      link:"https://www.linkedin.com/in/bala-murugan-3a286b349/"
    },{
      icon:"fa-brands fa-instagram",
      data:"bala_19_25",
      link:"https://www.instagram.com/bala_19_25/?next=%2F"
    }
  ]


 
  return (
    <section id='contact'>
      <h2>Connect With Me</h2>
      <div className='form-container'>


        <div className='Contact-details'>
          <h3 className='contact_heading'><span>C</span>ontact <span>I</span>nfo</h3>
          <ul>
            {contactDetails.map((contactdata, key) => (<ContactDetails contactdata={contactdata} key={key} />))}
          </ul>
        </div>


        <div>
          <ContactForm />

        </div>


      </div>
    </section>
  )
}


