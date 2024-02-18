import React from 'react'
import '../css/Navbar.css'
import { SignOutButton, useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { useUserEmail } from '../Context/UserEmail';


const AfterSign = () => {
    const { user } = useUser();

    const { setUserEmail } = useUserEmail();

    setUserEmail(user.primaryEmailAddress);

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
                <img src={user.imageUrl} alt='👤' style={{ height: "50px", width: "50px", borderRadius: "50%" }} />
                <Link to="/profile" style={{ listStyle: "none", textDecoration: "none", color: 'whitesmoke' }}><p>{user.fullName}</p></Link>
                <a  href={"https://org-connect-amber.vercel.app/"} style={{ listStyle: "none", textDecoration: "none", color: 'whitesmoke' }}><p>Join Community</p></a>
                <SignOutButton id='navbarbutton' />
            </div>
        </div>
    )
}

export default AfterSign