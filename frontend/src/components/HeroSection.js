import React from 'react'
import '../css/HeroSection.css'
import Navbar_ from './Navbar_'
import Header from '../assests/Header.webp'
import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

const HeroSection = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, [])

    return (
        <div className='hero-container' id='herosection'>
            <Navbar_ />
            <div className="hero-top" data-aos="zoom-in-up" data-aos-duration="2000" data-aos-delay="300">
                <button id='skipDiv-button'>Take a tour</button>
                <p id='hero-top-text'>Welcome to the platform <span><br />Join Clubs & Events</span><br />
                    <span id='hero-gradient-text'>ClubSpark</span></p>
            </div>

            <div className="hero-bottom">
                <p id='hero-bottom-text'>Connecting Communities, Sparking Conversations</p>
                <img data-aos="fade-up" data-aos-duration="3000" src={Header} alt="" />
            </div>
        </div>
    )
}

export default HeroSection