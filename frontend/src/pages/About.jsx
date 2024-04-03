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
        <div className='lg:px-6 md:px-5 sm:px-5 px-4'>
          <Review/>
        </div>
        
        <div className='p-3'></div>
        <div className='lg:px-6 md:px-5 sm:px-5 px-4'>
          <Maps/>
        </div>
      
        <div className='p-3'></div>
        <Guidelines/>
        <div className='p-3'></div>
        <div className='lg:px-6 md:px-5 sm:px-5 px-4'>
          <Stories />
        </div>
        
        <div className='p-3'></div>
        <div className='lg:px-6 md:px-5 sm:px-5 px-4'>
          <Lead/>
        </div>
        
        <div className='p-3'></div>
        <Accordian/>
        <div className='p-3'></div>
        <Touchh/>

    </div>
  )
}

export default About