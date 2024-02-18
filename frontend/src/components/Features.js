import React from 'react'
import '../css/Feature.css'
import Clubs from './Clubs'
import Signature from './Signature'
import Db from '../assests/Spline/Db'

const Features = () => {
    return (
        <div className='features-container'>
            <div className="feature-top">
                <Clubs />
            </div>

            <div className="feature-bottom">
                <p id='feature-text-top'>Lorem ipsum dolor sit amet,<br /> consectetur elit.</p>
                <p id='feature-text-bottom'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Eveniet neque accusamus Lorem.Lorem ipsum <br />dolor, sit amet consectetur adipisicing.</p>
            </div>

            <div className="feature-bento">
                <div className="bento-top">
                    <div className="bento-top-left">
                        <h2>Heading one</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Odio non eius tempore perspiciatis eaque.</p>
                    </div>

                    <div className="bento-top-right">
                        <h2>Heading two</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> At neque dolorum sequi exercitationem harum.</p>
                    </div>
                </div>

                <div className="bento-bottom">
                    <div className="bento-bottom-left">
                        <h2>Heading two</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> At neque dolorum sequi exercitationem harum.</p>
                    </div>

                    <div className="bento-bottom-right">
                        <h2>Heading one</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Odio non eius tempore perspiciatis eaque.</p>
                    </div>
                </div>
            </div>

            {/* <Signature/> */}
        </div>
    )
}

export default Features