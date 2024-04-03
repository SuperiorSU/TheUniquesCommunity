import React from 'react'
import Hero from '../components/about/Hero'
import Motto from '../components/about/Motto'
import Guidelines from '../components/about/Guidelines'
import Maps from '../components/about/Maps'
import Review from '../components/about/Review'
import Touchh from '../components/about/Touchh'
import Stories from '../components/about/Stories'
import Lead from '../components/about/Lead'
import Accordian from '../components/about/Accordian'

const About = () => {
  return (
    <div className=''>
        <Hero/>
        <Motto/>
        <div className='p-3'></div>
        <Review/>
        <div className='p-3'></div>
        <Maps/>
        <div className='p-3'></div>
        <Guidelines/>
        <div className='p-3'></div>
        <Stories />
        <div className='p-3'></div>
        <Lead/>
        <div className='p-3'></div>
        <Accordian/>
        <div className='p-3'></div>
        <Touchh/>

    </div>
  )
}

export default About