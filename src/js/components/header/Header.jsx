import React, { useState } from 'react'
import '../../../css/header.css'

const Header = () => {

const [headNav,setHeadNav]=useState("Home")


const changeHeaderNav=(nav)=>{
  setHeadNav(nav);
}


  return (
    <header className='header'>
<div className='header_component'>
    <span>B</span>
    <span>M</span>
</div>

<ul className='nav-components'>
    <li onClick={()=>changeHeaderNav("Home")}><a href="#home"  className={(headNav==="Home"?"highLight":"")}>Home</a></li>
    <li onClick={()=>changeHeaderNav("About")} ><a href="#about" className={(headNav==="About"?"highLight":"")}>About</a></li>
    <li onClick={()=>changeHeaderNav("Skills")}><a href="#skills" className={(headNav==="Skills"?"highLight":"")}>Skills</a></li>
    <li onClick={()=>changeHeaderNav("Project")}><a href="#project" className={(headNav==="Project"?"highLight":"")}>Project</a></li>
    <li onClick={()=>changeHeaderNav("Contact")}><a href="#contact" className={(headNav==="Contact"?"highLight":"")}>Contact</a></li>
</ul>
    </header>
  )
}

export default Header