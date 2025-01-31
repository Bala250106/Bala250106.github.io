import React, { useState } from 'react'
import '../../../css/about.css'
import Myimage from '../../../assets/images/Myimage.png'

const About = () => {


  return (
    <section id='about'>

    
      <div>
<img src={Myimage} alt="about-me" className='about_me_image'/>
      </div>
      <div className='div_content_container'>
        <h2>Hi I'm Balamurugan</h2>
        <p>I recently finished my 12th grade.I'm a developer who blends creativity with code. I'm passionate about crafting websites that are both functional and visually stunning. Let's turn your ideas into engaging digital experiences that leave a lasting impact!</p>
      

          <div className='home_buttons_container'>
           <a href="#contact"><button>Contact</button></a> 
           <button>Download CV</button>
          </div>
      </div>
     
    </section>
  )
}

export default About