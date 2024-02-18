import React from 'react'
import { useEffect } from 'react'
import '../css/Feature.css'
import Clubs from './Clubs'
import Bot from '../assests/aibot.gif'
import Volunteer from '../assests/Volunteer.gif'
import Social from '../assests/Social.mp4'
import Profanity from '../assests/profanity.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Features = () => {


    return (
        <div className='features-container' id='features'>
            <div className="feature-top">
                <Clubs />
            </div>

            <div className="feature-bottom">
                <p id='feature-text-top'>Some of the top Features<br />out platform provides</p>
                <p id='feature-text-bottom'>Connect members easily with messaging, group chats,<br /> and file sharing. Foster effective communication and <br /> collaboration within the club</p>
            </div>

            <div className="feature-bento">
                <div className="bento-top">
                    <div className="bento-top-left" >
                        <img src={Social} alt="" style={{height:'60%',width:'50%',margin:'auto'}}/>
                        <h2>Social Platform</h2>
                        <p>Our social app empowers students to log in and share diverse content formats <br /> including text, images, and videos. Join the vibrant community, <br /> express yourself, and engage with peers effortlessly.</p>
                    </div>

                    <div className="bento-top-right">
                        <img src={Bot} alt="" style={{height:'50%',width:'60%'}}/>
                        <h2>Chatbot</h2>
                        <p> Integrated chatbot offering capabilities like <br /> generating catchy slogans and <br />captions for club activities.</p>
                    </div>
                </div>

                <div className="bento-bottom">
                    <div className="bento-bottom-left">
                        <img src={Profanity} alt="" style={{width:'90%'}}/>
                        <h2>Profanity</h2>
                        <p>image moderation to swiftly identify and  <br />address offensive content with built <br /> in report and block features</p>
                    </div>

                    <div className="bento-bottom-right">
                        <img src={Volunteer} alt="" />
                        <h2>Volunteer Recruitment</h2>
                        <p>Clubs can effortlessly identify and onboard new talent, platform streamlines the entire recruitment journey, saving time and resources  while ensuring <br /> a smooth experience for both clubs and applicants</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features