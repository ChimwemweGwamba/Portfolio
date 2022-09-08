import React from 'react'
import './navBar.css'




function NavBar() {
  return (
    <div className='navBarContainer'>
        <div className='logo'>
            <h3>Chimwemwe <a>Gwamba</a></h3>
        </div>

        <div className='navigation'>
            <ul>
                <li>Home</li>
                <li>Blog</li>
                <li>Projects</li>
                <li>Resume</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar