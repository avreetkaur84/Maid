import React from 'react'
import HeroSection from '../components/Header/HeroSection'
import Services from '../components/Home/Services'
import FeaturedMaids from '../components/Home/FeaturedMaids'
import FAQ from '../components/Home/FAQ/FAQ'

function HomePage() {
  return (
    <div className="">
        <HeroSection/>
        {/* <Services/> */}
        <FeaturedMaids/>
        <FAQ/>
    </div>
  )
}

export default HomePage