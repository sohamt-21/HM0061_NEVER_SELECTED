import React from 'react'
import '../css/Navbar.css'
import { SignInButton } from '@clerk/clerk-react';
import Logo from '../assests/logo.png'

const Navbar_ = () => {
  return (
    <div id='navbar' className='navbarContainer'>
        <div className="navbarleft">
            <img src={Logo} alt="Navbar Logo" style={{width:'60%',height:'40%'}}/>
        </div>

        <div className="navbarmid">
                <a href="#herosection" id='navbar_a'>Home</a>
                <a href="#clubs" id='navbar_a'>Clubs</a>
                <a href="#features" id='navbar_a'>Features</a>
                <a href="#reviews" id='navbar_a'>Reviews</a>
                <a href="#footer" id='navbar_a'>Help</a>
        </div>

        <div className="navbarright">
            <SignInButton id='navbarbutton'  />
        </div>
    </div>
)
}

export default Navbar_