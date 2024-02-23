import React from 'react'
import '../css/Card.css'
const Cards = ({title,subtitle,imageURL,descrption}) => {
    return (
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src={imageURL} alt="" style={{height:'80%',width:'80%'}}/>
                    <p className='title'>{title}</p>
                    <p>{subtitle}</p>
                </div>
                <div class="flip-card-back">
                    <p style={{color:'black'}}>{descrption}</p>
                </div>
            </div>
        </div>
    )
}

export default Cards