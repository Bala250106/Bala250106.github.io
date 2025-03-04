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
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fauv-team-tomkyle.de%2F%3Ft%3D532311412162&psig=AOvVaw1alR4wIy-aSmpim1UEVKaF&ust=1741156534052000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJD1p93n74sDFQAAAAAdAAAAABAJ" alt="my-image" className='my-image'/>
        </div>
    </section>
  )
}

export default Home
