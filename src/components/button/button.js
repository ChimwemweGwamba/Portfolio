import React from 'react'
import './button.css'


function Button(props) {
  return (
    <div className='buttonContainer'>
        <div className='buttonPrimary'>
            <p>{props.heading}</p>
        </div>
    </div>
  )
}

export default Button