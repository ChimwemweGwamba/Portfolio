import React from 'react'
import './about.css'
import github from '../../assets/images/github.png'
import linkedin from '../../assets/images/linkedin.png'
import twitter from '../../assets/images/twitter.png'
import medium from '../../assets/images/medium.png'



function About() {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };


  return (
    <div className='aboutContainer'>

        <div className='aboutLeft'>
            <h5>
                ABOUT ME
            </h5>

            <h1>
                Lead product designer and art director
            </h1>
        </div>

        <div className='aboutRight'>
            <h3>
                From <a>Electrical Engineer</a> To Software Developer? Well, I Have Always Been <a>Passionate</a> About
                Building Things And <a>Solving Problems</a>.
            </h3>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore.
            </p>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore.
            </p>

            <div className='aboutResources'>
                <p>
                    React
                </p>
            
                <p>
                    NodeJS
                </p>

                <p>
                    React Native
                </p>

                <p>
                    TypeScript
                </p>

                <p>
                    Django
                </p>

                <p>
                    MongoDB
                </p>
            </div>

            <div className='aboutSocials'>
                <div className='aboutSocialsBox'>
                    <img src={github} alt="github" onClick={() => openInNewTab('https://github.com/ChimwemweGwamba')} />
                </div>

                <div className='aboutSocialsBox'>
                    <img src={linkedin} alt="linkedin" onClick={() => openInNewTab('https://www.linkedin.com/in/chimwemwe-gwamba/')} />
                </div>

                <div className='aboutSocialsBox'>
                    <img src={twitter} alt="twitter" onClick={() => openInNewTab('https://twitter.com/Chim_dawg')} />
                </div>
            </div>
        </div>

    </div>
  )
}

export default About