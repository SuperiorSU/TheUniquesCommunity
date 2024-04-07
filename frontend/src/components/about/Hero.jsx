import React from 'react';
import Button from './Button';
import ButtonHollow from './ButtonHollow';
import gif from '../../assets/about/gif.gif'
import logo from '../../assets/about/theuniquesCommunity.png'


const Hero = () => {
  return (
    <div className='w-full bg-[#fdfdfd] p-2 flex justify-evenly items-center sm:flex-wrap md:flex-nowrap lg:flex-nowrap flex-wrap'>
        <div className='lg:w-1/2 md:w-1/2 sm:w-full w-full lg:ps-7 lg:pe-2 md:px-4 sm:px-2 p-2'>
            <div className='text-center lg:ps-6 lg:text-start md:text-start sm:text-center mb-3'><img src={logo} className='mx-auto sm:mx-0' width={250} /></div>
            <p className='text-center lg:ps-6 lg:text-start md:text-start sm:text-center'>The Uniques Community is more than just a collective; it's a vibrant and dynamic ecosystem dedicated to nurturing innovation, collaboration, and personal development among its members. As a cornerstone of our ethos, we strive to create an environment where individuals from diverse backgrounds come together to share ideas, inspire one another, and push the boundaries of what's possible.</p>
            <div className='my-5 flex gap-x-1 justify-center lg:justify-start md:justify-start lg:ps-6'>
               <Button text='Lead a Club' link="/leads"/>
               <ButtonHollow text='Join a Club' link="/clubs"/>
            </div>
        </div>
        <div className='lg:w-1/2 md:w-1/2 sm:w-full  w-full'>
            <img src={gif} width={350}className='object-contain mt-7 mx-auto' alt="" />
        </div>
    </div>
  )
}

export default Hero