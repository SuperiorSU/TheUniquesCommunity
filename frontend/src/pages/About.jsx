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
import About1 from '../components/about/About1'
import HeroSection16 from '../components/about/HeroSection16'

const About = ({ blogs }) => {
  return (
    <div className=''>

      <Hero />
      <div className='w-full p-[30px]'></div>
      <Motto />
      <div className='w-full p-[30px]'></div>

      <div className='lg:px-6 md:px-5 sm:px-5 px-4'>
        <Review />
      </div>

      <div className='p-3'></div>
      <div className='lg:px-6 md:px-5 sm:px-5 px-4'>
        <Maps />
      </div>

      <div className='p-3'></div>
      <Guidelines />
      <div className='p-3'></div>
      <div className='lg:px-6 md:px-5 sm:px-5 px-4'>
        <Stories blogs={blogs} />
      </div>
      <About1 />
      <div className='p-3'></div>
      <div className='lg:px-6 md:px-5 sm:px-5 px-4'>
        <Lead />
      </div>

      <div className='p-3'></div>
      <Accordian />
      <div className='p-3'></div>


    </div>
  )
}

export default About