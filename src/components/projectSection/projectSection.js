import React from 'react'
import './projectSection.css'
import Project from '../project/project'


function ProjectSection() {
  return (
    <div className='projectSectionContainer'>
        <div className='projectSectionText'>
          <h5>
            PROJECTS
          </h5>

          <h1>
              Here are some of the <a>Projects</a> i've built
          </h1>
        </div>

        <Project></Project>

        <Project></Project>

    </div>
  )
}

export default ProjectSection