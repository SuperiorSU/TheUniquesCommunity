import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='bg-white px-3 shadow-md'>
            <ul className='flex gap-5 list-none font-[450] text-black/80 relative'>
                <li className='py-4 group'>
                    <Link to="#">About</Link>
                    <div className='group-hover:p-[1px] w-[45px] bg-black absolute top-[54px]'></div>
                </li>
                <li className='py-4 group'>
                    <Link to="#">Clubs</Link>
                    <div className='group-hover:p-[1px] w-[40px] bg-black absolute top-[54px]'></div>
                </li>
                <li className='py-4 group'>
                    <Link to="#">Leads</Link>
                    <div className='group-hover:p-[1px] w-[40px] bg-black absolute top-[54px]'></div>
                </li>
                <li className='py-4 group'>
                    <Link to="#">Community Guidelines</Link>
                    <div className='group-hover:p-[1px] w-[163px] bg-black absolute top-[54px]'></div>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar