import React from 'react'
import Herosection2 from '../components/Herosection2'
import Features from '../components/Features'
import Possibility from '../components/Possibility'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'

const NewLandPage = () => {
    return (
        <>
            <div className='landing-container'>
                <Herosection2 />
                <Features />
                <Possibility/>
                <Reviews/>
                <Footer/>
            </div>
        </>
    )
}

export default NewLandPage