import React from 'react'
import HeroSection from '../components/HeroSection'
import Features from '../components/Features'
import Possibility from '../components/Possibility'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'
import HorizentalS from '../components/HorizentalS'
import ClubData from '../pages/ClubData'

const Landing = () => {
  return (
    <div className='landing-container'>
      {/* <ClubData/> */}
      <HeroSection/>
      <Features/>
      <HorizentalS/>
      <Possibility/>
      <Reviews/>
      <Footer/>
    </div>
  )
}

export default Landing