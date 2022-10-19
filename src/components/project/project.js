import React from 'react'
import './project.css'
import github from '../../assets/images/github.png'
import link from '../../assets/images/share.png'


function Project() {
  return (
    <div className='projectContainer'>
        <div className='projectImg'>
        </div>

        <div className='projectText'>
            <h5>
                Developer Task App
            </h5>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua
            </p>

            <div className='projectLinks'>
                <div className='projectLinkBox'>
                    <img src={github} alt="github" />
                    <p>Github</p>
                </div>

                <div className='projectLinkBox'>
                    <img src={link} alt="Link" />
                    <p>Open</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project