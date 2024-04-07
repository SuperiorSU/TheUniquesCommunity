import React from 'react'
import Button from './Button'
import ButtonHollow from './ButtonHollow'
import lady from '../../assets/about/jio.png'

const Lead = () => {
  return (
    <div>
        <div className='px-9 py-7'>
        <div className='flex justify-center gap-y-7 items-center sm:flex-wrap md:flex-nowrap lg:flex-nowrap flex-wrap'>
            <div className='lg:w-1/2 md:w-1/2 sm:w-full mx-auto w-full'>
                <h3 className='text-4xl py-2'>The Uniques Leads</h3>
                <p className=' pe-6 py-2 text-[17px]'>"The Uniques Community is a community where everyone is welcome. We help students bridge the gap between theory and practice and grow their knowledge by providing a peer-to-peer learning environment, by conducting workshops, study jams and building solutions for local businesses."</p>
                <br/>
                <p>Read the FAQ below for details on the application process.</p>
                <br/>
                <div className='flex items-center gap-2'>
                    <Button text="Lead a Club"/>
                </div>
            </div>
            <div className='lg:w-1/3 md:w-1/3  sm:w-full w-full'>
                <img src={lady} className='md:mx-0 lg:mx-0  mx-auto' width={300}/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Lead