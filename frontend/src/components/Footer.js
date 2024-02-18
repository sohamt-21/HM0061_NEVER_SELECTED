import React from 'react'
import '../css/Footer.css'
import Youtube from '../assests/youtube.webp'
import Insta from '../assests/instagram.webp'
import Linkdin from '../assests/Linkdin.webp'
import Twitter from '../assests/twitter.webp';

const Footer = () => {

    const gotoYt = () => {
        window.open("https://www.youtube.com/channel/UCN-6mKEyfEpTiyfYF7u1zww");
    }

    const gotoInsta = () => {
        window.open("https://www.instagram.com/referhub_/");
    }

    const gotoLinkedIn = () => {
        window.open("https://www.linkedin.com/in/referhub/");
    }

    const gotoTwitter = () => {
        window.open("https://twitter.com/edushaalahelp");
    }

    return (
        <div id='footer' style={{ height: "500px", backgroundColor: "transperent", padding: "30px", marginLeft: "auto", marginRight: "auto", fontSize: "large", maxWidth: "100%", color: "#E8D8C4" }} >
            <hr style={{ width: '90%' }} />
            <div className="footercontainer">
                <div className="footerlogo">
                    <img src="" id='footerbelowlineimg' style={{ height: "150px", width: "300px", marginTop: '70px' }} alt="Logo Image" />
                </div>

                <div className="footersecond">
                    <h2>For Users</h2>
                    <li id='footerli'>
                        <a id='footera' href="#navbar">Portal</a>
                        <a id='footera' href="/video">FAQs</a>
                        <a id='footera' href="https://forms.gle/3QiyJDL3vSYm5jRz6">Give us a Feedback</a>
                        <a id='footera' href="https://forms.gle/3QiyJDL3vSYm5jRz6">Suggest new Features</a>
                    </li>
                </div>

                <div className="footerfifth">
                    <h2>Contact Us</h2>
                    <li id='footerli'>
                        <a id='footera' href="edushaalahelp@gmail.com">helpdesk@sggs.edu</a>
                        <a id='footera' href="">+91 8765432190</a>
                    </li>
                </div>
            </div>

            <div className="footercopyright">
                <div className="footerwrap" style={{ width: "90%", marginTop: "50px", margin: "auto" }}>
                    <hr />
                    <div className="footerbelowLine">
                        <div className="footerbelowlineleft">
                            <p>@2024 All Copyrights Reserved</p>
                        </div>
                        <div className="footerbelowlineright">
                            <img id='footerbelowlineimg' src={Youtube} alt="" onClick={gotoYt} />
                            <img id='footerbelowlineimg' src={Insta} alt="" onClick={gotoInsta} />
                            <img id='footerbelowlineimg' src={Linkdin} alt="" onClick={gotoLinkedIn} />
                            <img id='footerbelowlineimg' src={Twitter} alt="" onClick={gotoTwitter} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer