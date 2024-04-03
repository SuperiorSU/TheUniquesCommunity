import React from 'react';
import img from "../../assets/about/hero.png"
import Button from './Button';
import ButtonHollow from './ButtonHollow';
const Hero = () => {
  return (
    <div className='w-full bg-black/5 p-2 flex justify-evenly items-center sm:flex-wrap md:flex-nowrap lg:flex-nowrap flex-wrap'>
        <div className='lg:w-1/2 md:w-1/2 sm:w-full w-full lg:ps-5 lg:pe-4 md:px-4 sm:px-2 p-2'>
            <h1 className='text-6xl lg:ps-6 py-5 text-[#414f53] text-center lg:text-start md:text-start sm:text-center'><span className='text-[#ca0019]'>The </span>Uniques</h1>
            <p className='text-center lg:ps-6 lg:text-start md:text-start sm:text-center'>Explore more than 2,100 college and university chapters across more than 100 countries. Meet and learn with other budding developers and build solutions for local businesses and communities with Google technology.</p>
            <div className='my-5 flex gap-x-1 justify-center lg:justify-start md:justify-start lg:ps-6'>
               <Button text='Lead a Club' link="#"/>
               <ButtonHollow text='Join a Club' link="/clubs"/>
            </div>
        </div>
        <div className='lg:w-1/2 md:w-1/2 sm:w-full w-full'>
            <img src={img} width={400} height={400} className='object-contain mx-auto' alt="" />
        </div>
    </div>
  )
}

export default Hero