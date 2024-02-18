import React from 'react'
import '../css/HeroSection.css'
import AfterSign from './AfterSign'

const Herosection2 = () => {
    return (
        <div className='hero-container'>
            <AfterSign />
            <div className="hero-top">
                <button id='skipDiv-button'>Take a tour</button>
                <p id='hero-top-text'>These is one Website <span><br />line text about</span><br />
                    <span id='hero-gradient-text'>Website</span></p>
            </div>

            <div className="hero-bottom">
                <p id='hero-bottom-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non dignissimos amet inventore! <span><br /></span> Dicta distinctio quod aliquid labore! Ipsam, harum rem!</p>
            </div>
        </div>
    )
}

export default Herosection2