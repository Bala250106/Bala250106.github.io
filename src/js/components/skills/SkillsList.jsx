import React,{useState} from 'react'

const SkillsList = ({ skill }) => {

    const [hover,setHover]=useState(false)

    return (
        <li style={{ border: "2px solid " + skill.color,boxShadow:hover?"0 5px 30px"+skill.color:"" }}  onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className='skill-list'>
            <div className='skill_list_details_container'>
                <i className={skill.image} style={{ color: skill.color }}></i>
                <span style={{ color: skill.color }}>{skill.name}</span>
            </div>
            <div>
                <div className='progress-bar_percentage_container'>
                    <div className='progress-bar'>
                        <div style={{ width: skill.progressBarWidth, backgroundColor: skill.color }}></div>
                    </div>
                    <span>{skill.known}</span>
                </div>
            </div>
        </li>
    )
}

export default SkillsList
