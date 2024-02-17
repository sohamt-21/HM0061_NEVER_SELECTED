import React from 'react'
import '../css/Feature.css'
import Clubs from './Clubs'

const Features = () => {
  return (
    <div className='features-container'>
        <div className="feature-top">
            <Clubs/>
        </div>
        <div className="feature-bottom">
            <p id='feature-text-top'>Lorem ipsum dolor sit amet,<br /> consectetur elit.</p>
            <p id='feature-text-bottom'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Eveniet neque accusamus Lorem.Lorem ipsum <br />dolor, sit amet consectetur adipisicing.</p>
        </div>

        <div className="feature-bento">
            <div className="bento-top">
                <div className="bento-top-left">
                    <h1>bcdjszlcbds</h1>
                </div>

                <div className="bento-top-right">

                </div>
            </div>

            <div className="bento-bottom">

            </div>
        </div>
    </div>
  )
}

export default Features