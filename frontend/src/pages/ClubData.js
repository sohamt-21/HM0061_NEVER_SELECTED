import React from 'react'
import '../css/ClubData.css'
import Mlsc from '../assests/mlsc.png'
import Star from '../assests/Star'
import Domain from '../components/Domain'
import { useState } from 'react'
import Events from '../components/Events'
import Achievement from '../components/Achievement'
import axios from 'axios'
import clubjson from '../clubDisplay.json'


const ClubData = ({ clubname }) => {
    const clubdata = clubjson.clubs && clubjson.clubs[clubname];
    console.log(clubdata);

    const [selectedComponent, setSelectedComponent] = useState("Domain");
    const [Ratingdata, setRatingdata] = useState(4);

    const clickDomain = () => {
        setSelectedComponent('Domain');
    }

    const clickEvents = () => {
        setSelectedComponent('Events');
    }

    const clickAch = () => {
        setSelectedComponent('Achievement');
    }


    function roundToOneDecimalPlace(number) {
        return Number(number.toFixed(1));
    }


    const MakeRequestforRating = async () => {
        axios.post("http://localhost:9000/GetClubRatings", { ClubName: 'MLSC' }, { withCredentials: true }).then((res) => {
            const RoundedOff = roundToOneDecimalPlace(res.data);
            setRatingdata(RoundedOff);
        }).catch((err) => {
            console.log(`Error Has been Occured : ${err}`);
        })
    }

    MakeRequestforRating();

    return (
        <div className='clubdata-container'>
            <div className="left-data">
                <div className="left-logo">
                    <img src={Mlsc} alt="" />
                </div>
                <div className="left-rating">
                    <p style={{ color: "white", fontSize: "20px" }}>{Ratingdata}</p>
                    <Star />
                </div>

                <div className="left-description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quas maxime eum totam eius vel aliquam aliquid placeat debitis? Quidem in quasi rerum recusandae veritatis illum expedita eum animi, quia accusantium reiciendis, voluptates nesciunt eveniet quas eos excepturi velit? Delectus quia non beatae ut? Voluptatum enim laudantium nulla et? Quam!
                </div>
            </div>

            <div className="right-data">
                <div className="right-top">
                    <button id='bento-nav-button' type="" onClick={clickDomain}>Domain</button>
                    <button id='bento-nav-button' type="" onClick={clickEvents}>Events</button>
                    <button id='bento-nav-button' type="" onClick={clickAch}>Achievement</button>
                </div>

                <div className="right-bottom">
                    {selectedComponent === 'Domain' && <Domain clubnameD={clubname}/>}
                    {selectedComponent === 'Events' && <Events />}
                    {selectedComponent == 'Achievement' && <Achievement/>}
                </div>
            </div>
        </div>
    )
}

export default ClubData