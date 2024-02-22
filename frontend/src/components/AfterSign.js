import React from 'react'
import '../css/Navbar.css'
import { SignOutButton, useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { useUserEmail } from '../Context/UserEmail';
import Logo from '../assests/logo.png'


const AfterSign = () => {
    const { user } = useUser();

    const { setUserEmail } = useUserEmail();

    setUserEmail(user.primaryEmailAddress);

    return (
        <div id='navbar' className='navbarContainer'>
            <div className="navbarleft">
                <img src={Logo} alt="Navbar Logo" style={{ width: '60%', height: '40%' }} />
            </div>

            <div className="navbarmid">
                <a href="#herosection" id='navbar_a'>Home</a>
                <a href="#clubs" id='navbar_a'>Clubs</a>
                <a href="#features" id='navbar_a'>Features</a>
                <a href="#reviews" id='navbar_a'>Reviews</a>
                <a href="#footer" id='navbar_a'>Help</a>
            </div>

            <div className="navbarright">
                <img src={user.imageUrl} alt='👤' style={{ height: "50px", width: "50px", borderRadius: "50%" }} />
                <Link to="/profile" style={{ listStyle: "none", textDecoration: "none", color: 'whitesmoke' }}><p>{user.fullName}</p></Link>
                <a href={"https://org-connect-amber.vercel.app/"} style={{ listStyle: "none", textDecoration: "none", color: 'whitesmoke' }}><p>Join Community</p></a>
                <SignOutButton id='navbarbutton' />
            </div>
        </div>
    )
}

export default AfterSign