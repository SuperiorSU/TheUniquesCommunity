import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/about/theuniquesCommunity.png'
const Foot = () => {
  return (
    <div>
        <footer className=' p-4 border-t-[1px]'>
            <div className='flex justify-evenly items-center sm:flex-wrap md:flex-nowrap lg:flex-nowrap flex-wrap p-4 text-[17px] gap-y-6'>
                <div className='lg:w-1/3 md:w-1/3 sm:w-full w-full'>
                    <h5 className='text-black/70 pb-3 text-start'>Connect</h5>
                    <ul className='flex flex-col gap-y-2 list-none'>
                        <li className='hover:text-[#ca0019] duration-200'><Link to="#">Blog</Link></li>
                        <li className='hover:text-[#ca0019] duration-200'><Link to="#">Facebook</Link></li>
                        <li className='hover:text-[#ca0019] duration-200'><Link to="#">Instagram</Link></li>
                        <li className='hover:text-[#ca0019] duration-200'><Link to="#">X (Twitter)</Link></li>
                        <li className='hover:text-[#ca0019] duration-200'><Link to="#">Youtube</Link></li>
                    </ul>
                </div>
                <div className='lg:w-1/3 md:w-1/3 sm:w-full w-full'>
                    <h5 className='text-black/70 pb-3'>Program</h5>
                    <ul className='flex flex-col gap-y-2 list-none'>
                        <li className='hover:text-[#ca0019] duration-200'><Link to="#">Women Techmakers</Link></li>
                        <li className='hover:text-[#ca0019] duration-200'><Link to="#">Google Developer Group</Link></li>
                        <li className='hover:text-[#ca0019] duration-200'><Link to="#">Google Developer Experts</Link></li>
                        <li className='hover:text-[#ca0019] duration-200'><Link to="#">Accelerators</Link></li>
                        <li className='hover:text-[#ca0019] duration-200'><Link to="#">Google Developer Student Clubs</Link></li>
                    </ul>
                </div>
                <div className='lg:w-1/3 md:w-1/3 sm:w-full w-full'>
                    <h5 className='text-black/70 pb-3'>Developer console</h5>
                    <ul className='flex flex-col gap-y-2 list-none'>
                        <li className='hover:text-[#ca0019] duration-200'><Link to="#">Google API Console</Link></li>
                        <li className='hover:text-[#ca0019] duration-200'><Link to="#">Google Cloud Platform Console</Link></li>
                        <li className='hover:text-[#ca0019] duration-200'><Link to="#">Google Play Console</Link></li>
                        <li className='hover:text-[#ca0019] duration-200'><Link to="#">Firebase Console</Link></li>
                        <li className='hover:text-[#ca0019] duration-200'><Link to="#">Actions on Google Console</Link></li>
                        <li className='hover:text-[#ca0019] duration-200'><Link to="#">Cast SDK Developer Console</Link></li>
                        <li className='hover:text-[#ca0019] duration-200'><Link to="#">Chrome Web Store Dashboard</Link></li>
                    </ul>
                </div>
            </div>
            <div className='border-t-[1px] border-b-[1px] p-2'>
                <div className=' flex gap-'>
                    <img src={logo} width={120} height={120} className='object-cover object-center' alt="" />
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Foot