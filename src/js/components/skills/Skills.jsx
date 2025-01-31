import React from 'react'
import SkillsList from './SkillsList'
import '../../../css/skills.css'
import AdditionalSkills from './AdditionalSkills'
import EnglishImg from '../../../assets/images/English.jpg'
import LifeSkills from '../../../assets/images/Life-skills.png'
import ProblemSolving from '../../../assets/images/problemSolving.png'

const Skills = () => {
  const list=[
    {
      name:"HTML",
      known:"92%",
      image:'fa-brands fa-html5',
      color:"#E96228",
      progressBarWidth:"185px"
    },{
      name:"CSS",
      known:"86%",
      image:"fa-brands fa-css3-alt",
      color:"#07A2F5",
      progressBarWidth:"175px"
    },{
      name:"JavaScript",
      known:"90%",
      image:'fa-brands fa-js',
      color:"#efd81d",
      progressBarWidth:"180px"
    },{
      name:"React JS",
      known:"65%",
      image:'fa-brands fa-react',
      color:"#00D5F7",
      progressBarWidth:"130px"
    },
    {
      name:"Python",
      known:"90%",
      image:'fa-brands fa-python',
      color:"#1e70a8",
      progressBarWidth:"180px"
    },
    {
      name:"My SQL",
      known:"92%",
      image:'fa-solid fa-database',
      color:"rgb(107, 117, 185)",
      progressBarWidth:"185px"
    },{
      name:"GitHub",
      known:"43%",
      image:'fa-brands fa-github',
      color:"#79258B",
      progressBarWidth:"85px"
    },{
      name:"Firebase",
      known:"55%",
      image:'fa-solid fa-fire',
      color:"#efc23b",
      progressBarWidth:"110px"
    }
  ]

  const otherSkills=[
    {
      name:"Problem solving",
      known:"Level 6",
      image:ProblemSolving,
    },
    {
      name:"English",
      known:"3",
      image:EnglishImg,
    },
    {
      name:"Life Skills",
      known:"3",
      image:LifeSkills,
    },
  ]

  return (
    <section id='skills'>
      <h2>Skills</h2>
      <h3 className='skills_heading_tech'>Tech <span>E</span>xplorations</h3>
      <ul className="my-skills">
        {list.map((skill,index)=>(<SkillsList skill={skill} key={index}/>))}
      </ul>
      <h3 className='skills_heading_additional'><span>A</span>dditional <span>V</span>aluable <span>S</span>kills</h3>
      <ul className='my-additional-skills'>
        {otherSkills.map((skill,index)=>(<AdditionalSkills skill={skill} key={index}/>))}
      </ul>
    </section>
  )
}

export default Skills
