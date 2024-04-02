import React from 'react'
import Hero from '../components/about/Hero'
import Motto from '../components/about/Motto'
import Guidelines from '../components/about/Guidelines'
import Maps from '../components/about/Maps'
import Review from '../components/about/Review'
import Touchh from '../components/about/Touchh'

const About = () => {
  return (
    <div>
        <Hero/>
        <Motto/>
        <div className='p-3'></div>
        <Review/>
        <div className='p-3'></div>
        <Maps/>
        <Guidelines/>
        <div className='p-3'></div>
        <Touchh/>

    </div>
  )
}

export default About