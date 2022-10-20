import React from 'react'
import './project.css'
import github from '../../assets/images/github.png'
import link from '../../assets/images/share.png'


function Project() {
  return (
    <div className='projectContainer'>
        <div className='projectImg'>
        </div>

        <div className='projectDescription'>
            <div className='projectDescriptionText'>
                <h5>
                    Developer Task App
                </h5>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua
                </p>
            </div>

            <div className='projectResources'>
                <p>
                    React
                </p>
                
                <p>
                    NodeJS
                </p>
                
                <p>
                    CSS
                </p>
            </div>

            <div className='projectLinks'>
                <img src={github} alt="github" />

                <img src={link} alt="Link" />
            </div>
        </div>
    </div>
  )
}

export default Project