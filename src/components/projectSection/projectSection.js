import React from 'react'
import './projectSection.css'
import Project from '../project/project'


function ProjectSection() {
  return (
    <div className='projectSectionContainer'>
        <div className='projectSectionText'>
            <h1>
                Here are some of the <a>projects</a> i've built
            </h1>
        </div>

        <Project></Project>

        <Project></Project>

    </div>
  )
}

export default ProjectSection