import React from 'react'
import ButtonHollow from './ButtonHollow'

const Guidelines = () => {
  return (
    <div className='w-full p-4 text-center bg-[#414f53] text-white' >
        <div>
            <h2 className='text-4xl font-medium py-3'>Our community guidelines</h2>
            <p className='lg:ps-7 lg:pe-7 md:px-5 sm:px-3 px-2 py-2 '>Google is dedicated to providing a harassment-free and inclusive event experience for everyone regardless of gender identity and expression, sexual orientation, disabilities, neurodiversity, physical appearance, size, ethnicity, nationality, race, age, religion, or other protected category.</p>
            <div className='my-3'>
                <ButtonHollow text="Guidelines" />
            </div>
            
        </div>
    </div>
  )
}

export default Guidelines