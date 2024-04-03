import React from 'react'
import Button from './Button'
import ButtonHollow from './ButtonHollow'

const Lead = () => {
  return (
    <div>
        <div className='px-7 py-7'>
        <div className='flex justify-evenly gap-y-3 items-center sm:flex-wrap md:flex-nowrap lg:flex-nowrap flex-wrap'>
            <div className='lg:w-1/2 md:w-1/2 sm:w-full w-full'>
                <h3 className='text-4xl py-2'>The Uniques Leads</h3>
                <p className=' pe-6 py-2 text-[17px]'>"Google Developer Student Clubs is a community where everyone is welcome. We help students bridge the gap between theory and practice and grow their knowledge by providing a peer-to-peer learning environment, by conducting workshops, study jams and building solutions for local businesses."</p>
                <br/>
                <p>Read the FAQ below for details on the application process.</p>
                <br/>
                <div className='flex items-center gap-2'>
                    <Button text="Lead a Club"/>
                </div>
            </div>
            <div className='lg:w-1/2 md:w-1/2 sm:w-full w-full'>
                <iframe width="100%" height="380" src="https://www.youtube.com/embed/kyT7r_qu5ds?si=73ILjNjPbD2GIr9Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div className='py-6'>
                    <div className='bg-black/5 px-3 py-1 rounded-[6px] border-[1px] w-[max-content]'>
                        The Uniques Campus Club
                    </div>
                    <div>
                        <h2 className='text-4xl py-4'>GDSC Spotlight: A conversation with GDSC lead, Evolone Layne</h2>
                        <ButtonHollow text="Watch Now"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Lead