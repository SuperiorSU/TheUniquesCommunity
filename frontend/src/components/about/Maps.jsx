import React from 'react'
import ButtonHollow from './ButtonHollow'

const Maps = () => {
  return (
    <div className='px-9 py-7'>
        <div className=''>
          <div className='flex justify-between items-center'>
            <div>
              <h2 className='font-medium lg:text-4xl md:text-4xl sm:text-4xl text-3xl pb-3'>Find a chapter</h2>
              <p className='pb-2'>Connect in-person or virtually with student technologists across the globe.</p>
            </div>
            <div>
              <ButtonHollow text="View chapters" />
            </div>
          </div>
          
            <iframe className='rounded-md' width="100%" height="530px" frameborder="0"  marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30773346.661584042!2d61.030191970550824!3d19.690812551779842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1712079285107!5m2!1sen!2sin"></iframe>
        </div>
    </div>
  )
}

export default Maps