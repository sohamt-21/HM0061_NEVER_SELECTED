import React from 'react'
import '../css/Card.css'
const Cards = (club) => {
    return (
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <p class="title">FLIP CARD</p>
                    <p>Hover Me</p>
                </div>
                <div class="flip-card-back">
                    <p class="title">BACK</p>
                    <p>Leave Me</p>
                </div>
            </div>
        </div>
    )
}

export default Cards