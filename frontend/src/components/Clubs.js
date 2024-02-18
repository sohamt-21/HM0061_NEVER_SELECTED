import React from 'react'
import '../css/Club.css'
import Marquee from "react-fast-marquee";
import Mlsc from '../assests/mlsc.png'
import Gdsc from '../assests/gdsc.png'
import Abvp from '../assests/abvp.png'
import Csi from '../assests/csi.png'
import Dance from '../assests/dance.png'
import Edc from '../assests/edc.png'
import Ieee from '../assests/ieee.jpg'
import Yoga from '../assests/yoga.png'
import Photo from '../assests/photography.png'
import Quark from '../assests/quark.png'

const Clubs = () => {
    return (
        <div className="clubs-container" >
            <br/>
            <br/>
            <br/>
            <h1 style={{color:'aliceblue'}}>CLUBS</h1>
            <p id='clubs-container-heading'>Get the opputunity to join multiple cliubs and their Events<br /><span>Get latest updates about them</span></p>
            <br />
            <br />
            <br />
            <br />
            <Marquee pauseOnHover='true'>
                <div className='clubs-div'><img id='club-imgs' src={Mlsc} alt="" style={{ padding: '1rem' }}/><h3 id='clubs-text'>MLSC</h3></div>
                <div className='clubs-div'><img id='club-imgs' src={Gdsc} alt="" style={{ padding: '1rem' }} /><h3 id='clubs-text'>GDSC</h3></div>
                <div className='clubs-div'><img id='club-imgs' src={Abvp} alt="" style={{ padding: '1rem' }} /><h3 id='clubs-text'>ABVP</h3></div>
                <div className='clubs-div'><img id='club-imgs' src={Csi} alt="" style={{ padding: '1rem' }} /><h3 id='clubs-text'>CSI</h3></div>
                <div className='clubs-div'><img id='club-imgs' src={Photo} alt="" style={{ padding: '1rem' }} /><h3 id='clubs-text'>DSC</h3></div>
            </Marquee>
            <br />
            <Marquee pauseOnHover='true'  direction='right'>
            <div className='clubs-div'><img id='club-imgs' src={Dance} alt="" style={{ padding: '1rem' }} /><h3 id='clubs-text'>Zephyr</h3></div>
                <div className='clubs-div'><img id='club-imgs' src={Edc} alt="" style={{ padding: '1rem' }} /><h3 id='clubs-text'>EDC</h3></div>
                <div className='clubs-div'><img id='club-imgs' src={Ieee} alt="" style={{ padding: '1rem' }} /><h3 id='clubs-text'>IEEE</h3></div>
                <div className='clubs-div'><img id='club-imgs' src={Yoga} alt="" style={{ padding: '1rem' }} /><h3 id='clubs-text'>YOGA</h3></div>
                <div className='clubs-div'><img id='club-imgs' src={Quark} alt="" style={{ padding: '1rem' }} /><h3 id='clubs-text'>Quark</h3></div>
            </Marquee>
        </div>
    )
}

export default Clubs