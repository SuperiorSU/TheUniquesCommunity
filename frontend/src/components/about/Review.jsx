import React from 'react'

const Review = () => {
  return (
    <div className='px-9 py-7'>
        <div className='flex justify-evenly items-center sm:flex-wrap md:flex-nowrap lg:flex-nowrap flex-wrap'>
            <div className='lg:w-1/2 md:w-1/2 sm:w-full w-full'>
            <iframe width="94%" className='mx-auto' height="380" src="https://www.youtube.com/embed/kyT7r_qu5ds?si=73ILjNjPbD2GIr9Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className='lg:w-1/2 md:w-1/2 sm:w-full w-full'>
                
                <p className=' p-6 text-[17px] text-center'>"The Uniques Community is a community where everyone is welcome. We help students bridge the gap between theory and practice and grow their knowledge by providing a peer-to-peer learning environment, by conducting workshops, study jams and building solutions for local businesses."</p>
            </div>
        </div>
    </div>
  )
}

export default Review