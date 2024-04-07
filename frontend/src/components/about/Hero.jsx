import React from 'react';
import Button from './Button';
import ButtonHollow from './ButtonHollow';
import gif from '../../assets/about/gif.gif'
import logo from '../../assets/about/theuniquesCommunity.png'


const Hero = () => {
  return (
    <div className='w-11/12 mx-auto bg-[#fdfdfd] grid grid-cols-1 md:grid-cols-2 gap-8 py-12'>
      <div className='w-full flex flex-col justify-center'>
        <div className=' text-center lg:ps-6 lg:text-start md:text-start sm:text-center mb-3'><img src={logo} className='mx-auto sm:mx-0' width={250} /></div>
        <p className=' mt-5 text-center text-sm lg:ps-6 lg:text-start sm:text-center md:text-justify'>The Uniques Community is more than just a collective; it's a vibrant and dynamic ecosystem dedicated to nurturing innovation, collaboration, and personal development among its members. As a cornerstone of our ethos, we strive to create an environment where individuals from diverse backgrounds come together to share ideas, inspire one another, and push the boundaries of what's possible.</p>
        <div className='my-5 py-5 flex gap-x-1 justify-center lg:justify-start md:justify-start lg:ps-6'>
          <Button text='Lead a Club' link="/leads" />
          <ButtonHollow text='Join a Club' link="/clubs" />
        </div>
      </div>
      <div className='w-full'>
        <img src={gif} width={350} className='object-contain mt-7 mx-auto' alt="" />
      </div>
    </div>
  )
}

export default Hero