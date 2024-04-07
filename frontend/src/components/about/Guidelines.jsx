import React from 'react'
import ButtonHollow from './ButtonHollow'

const Guidelines = () => {
  return (
    <div className='w-full p-4 text-center bg-[#414f53] text-white' >
        <div>
            <h2 className='text-4xl font-medium py-3'>Our community guidelines</h2>
            <p className='lg:ps-7 lg:pe-7 md:px-5 sm:px-3 px-2 py-2 '>The Uniques Community serves as a vital bridge between the worlds of academia and industry, uniquely positioned to fill the gap and foster meaningful connections between the two spheres. At our core, we are driven by a shared vision of empowering individuals to thrive in the rapidly evolving landscape of technology and entrepreneurship. Here's how we accomplish this</p>
            <div className='my-3'>
                <ButtonHollow text="Guidelines" link="/communityguidelines" />
            </div>
            
        </div>
    </div>
  )
}

export default Guidelines