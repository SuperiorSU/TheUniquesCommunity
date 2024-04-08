import React from 'react'
import Header from '../components/events/Header'
import Details from '../components/events/Details'
import Register from '../components/events/Regsiter'
import Eligibility from '../components/events/Eligibility'
import Overview from '../components/events/Overview'
import Slick2 from '../components/clubs/Slick2'
import Slick from '../components/clubs/Slick'
import Mentors from '../components/events/Mentors'
const Event = () => {
    return (
        <div className='bg-gray-100 pb-12'>
            <Header/>
            <Details />
            <Register />
            <div className='w-10/12 my-6  mx-auto flex flex-row-reverse flex-wrap'>
                <div className='w-full lg:w-1/3 '>
                    
                    <Eligibility />
                </div>
                <div className='w-full lg:w-2/3 pr-0 lg:pr-6'>
                    <Overview />
                    <Mentors/>
                </div>
            </div>
        </div>
    )
}

export default Event