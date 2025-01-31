import React from 'react'
import '../../../css/project.css'
import Mediafella from '../../../assets/images/mediafella-project.jpg'
import Projectlist from './Projectlist'
import ELS_project from '../../../assets/images/ELS-project-image.jpg'


const Project = () => {

  const project=[
    {
      image:Mediafella,
      project:"Mediafella",
      link:"https://mediafella.netlify.app/",
      language:[
        {
          name:"HTML",
          icon:'fa-brands fa-html5',
      color:"#E96228",
          

        },{
          name:"CSS",
          icon:"fa-brands fa-css3-alt",
      color:"#07A2F5",


        }
        ,{
          name:"JavaScript",
          icon:'fa-brands fa-js',
      color:"#efd81d",


        }
      ]
      ,
      projectDetails:"Mediafella is a social media platform and my first tech project. I chose this project because social media websites offer a wide range of features, making it an exciting and challenging opportunity to work on.",

   },
 {
image:ELS_project,
project:"Product Building",
projectDetails:"This was our first ELS project, where we gained valuable experience in various aspects of product development. We learned how to create a product from scratch, market and sell it effectively, and collaborate as a team to bring the product to life"

    }
  ]

  return (
<section id='project' >
<h2>Projects</h2>

<div className='project'>


  <ul className='project_list_container' >
  {project.map((list,index)=>(<Projectlist list={list} key={index}/>))}

  </ul >
</div>
</section>  )
}

export default Project