import React from 'react'



const AdditionalSkills = ({skill}) => {
    const totalStars = 5;
  return (
    <li className='additional_list_container'>
<img src={skill.image} alt="skills-images" />
<div>
    <span>{skill.name}</span>
    <span> 

        
    {skill.known=="Level 6"?"Level 6":[...Array(totalStars)].map((_, index) => {
        return index < Number(skill.known) ? (
          <i key={index} className="fa-solid fa-star"></i>
        ) : (
          <i key={index} className="fa-regular fa-star"></i>
        );
      })}
      
    </span>

</div>
    </li>
  )
}

export default AdditionalSkills
