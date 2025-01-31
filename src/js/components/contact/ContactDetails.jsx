import React from 'react'
const ContactDetails = ({contactdata}) => {
  return (
    <li className='contact_list'>
        <a href={contactdata.link} target='_blank'>
      <i className={contactdata.icon}></i>
            
        </a>
      <span>{contactdata.data}</span>
    </li>
  )
}

export default ContactDetails
