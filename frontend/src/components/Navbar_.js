import React from 'react'
import '../css/Navbar.css'

const Navbar_ = () => {
  return (
    <div id='navbar' className='navbarContainer'>
        <div className="navbarleft">
            Logo
        </div>

        <div className="navbarmid">
                <a href="#herosection" id='navbar_a'>Home</a>
                <a href="#info" id='navbar_a'>About</a>
                <a href="#timeline" id='navbar_a'>Use</a>
                <a href="#footer" id='navbar_a'>Help</a>
        </div>

        <div className="navbarright">
            {/* <SignInButton id='navbarbutton' /> */}
            <button id='navbarbuttonright'>Sign In</button>
        </div>
    </div>
)
}

export default Navbar_