import React, { useState } from 'react'
import Languagedetails from './Languagedetails'

const Projectlist = ({ list }) => {
    const [display, setDisplay] = useState("none")

    return (
        <li className='project-details-container' onMouseEnter={() => setDisplay("flex")} onMouseLeave={() => setDisplay('none')}>
            <img src={list.image} alt="project-image" className='project-image' />
            <div className='project-details' style={{ display: display }}>
                {list.language ?
                    <div className='language-details'>
                        <h2 className='project-name'>{list.project}</h2>

                        <ul className='language-used-lists'>
                            {list.language.map((langList, index) => (<Languagedetails key={index} langList={langList} />))}
                        </ul>
                    </div>

                    : <h2 className='project-name'>{list.project}</h2>}


                <div className='project-brief'>
                    {list.projectDetails}
                </div>

            {list.link?<a href={list.link} target='_blank' className='project_link_btn'><button>View project</button></a>:""}
            </div>

        </li>
   

    )
}

export default Projectlist
