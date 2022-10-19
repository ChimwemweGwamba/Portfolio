import React from 'react'
import './banner.css'
import bannerImg from '../../assets/images/selfie.png'




function Banner() {
  return (
    <div className='bannerContainer'>
        <div className='bannerLeft'>
            <div className='bannerLeftText'>
                <h1>
                    Hi, I'm <a>Chimwemwe Gwamba</a>. A Fullstack Software Developer
                </h1>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <button>My Resume</button>
            </div>

        </div>

        <div className='bannerRight'>
            <img src={bannerImg} alt="img" />
        </div>
    </div>
  )
}

export default Banner