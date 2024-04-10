import React from 'react'
import ButtonHollow from './ButtonHollow'

const Maps = () => {
  return (
    <div className='w-11/12 mx-auto py-12'>
        <div className=''>
          <div className='flex justify-between items-center'>
            <div className='py-5'>
              <h2 className='font-bold lg:text-4xl md:text-4xl sm:text-4xl text-3xl pb-3'>Our <span className='text-rose-800'>Chapters</span></h2>
              <p className='pb-2'>Connect in-person or virtually with student technologists across the globe.</p>
            </div>
            <div>
              <ButtonHollow text="View chapters" />
            </div>
          </div>
          
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3436.6575004818983!2d76.67317797633476!3d30.530722495366273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc2e25466d5e7%3A0xf0bbb65fa7fca376!2sSwami%20Vivekanand%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1712742095475!5m2!1sen!2sin" width="100%" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
           
        </div>  
    </div>
  )
}

export default Maps