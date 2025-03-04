import React from 'react'
import Myimage from '../../../assets/images/Myimage.png'
import '../../../css/home.css'

const Home = () => {
  return (
    <section id='home'>
        <div className='home_content_container'>
          <p>Coding isn't just what I do; it's how I bring ideas to life and solve real-world problems through meaningful projects</p>

        </div>
        <div>
          <img src={Myimage} alt="my-image" className='my-image'/>
        </div>
    </section>
  )
}

export default Home
