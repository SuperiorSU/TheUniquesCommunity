import React from 'react'
import Button from './Button'
import ButtonHollow from './ButtonHollow'
import lady from '../../assets/about/jio.png'

const Lead = () => {
  return (
    <div>
      <div className='w-11/12 mx-auto pt-12'>
        <div className='grid grid-cols-1'>
          <div className='w-full mx-auto'>
            <h3 className='text-4xl py-2 font-bold'>The Uniques <span className="text-red-800">Leads</span></h3>
            <p className=' pe-6 py-2 text-sm lg:text-md'>"The Uniques Community is a community where everyone is welcome. We help students bridge the gap between theory and practice and grow their knowledge by providing a peer-to-peer learning environment, by conducting workshops, study jams and building solutions for local businesses."</p>
            <br />
            <p>Read the FAQ below for details on the application process.</p>
            <br />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Lead