import React from 'react';
import img from "../../assets/about/hero.png"
const Hero = () => {
  return (
    <div className='w-full bg-white/65 p-2 flex justify-evenly items-center '>
        <div className='w-1/2 ps-5 pe-4'>
            <h1 className='text-6xl py-3 text-[#414f53]'><span className='text-[#ca0019]'>The </span>Uniques</h1>
            <p className=''>Explore more than 2,100 college and university chapters across more than 100 countries. Meet and learn with other budding developers and build solutions for local businesses and communities with Google technology.</p>
            <div className='my-5'>
                <button className='bg-[#ca0019] text-white w-[124px] h-[36px] rounded-[6px] mt-2'>Join Us</button>
            </div>
        </div>
        <div className='w-1/2'>
            <img src={img} width={400} height={400} className='object-contain mx-auto' alt="" />
        </div>
    </div>
  )
}

export default Hero