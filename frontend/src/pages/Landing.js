import React from 'react'
import HeroSection from '../components/HeroSection'
import Features from '../components/Features'
import Possibility from '../components/Possibility'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'

const Landing = () => {
  return (
    <div className='landing-container'>
      <HeroSection/>
      <Features/>
      <Possibility/>
      <Reviews/>
      <Footer/>
    </div>
  )
}

export default Landing