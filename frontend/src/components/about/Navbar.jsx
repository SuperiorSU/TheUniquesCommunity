import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom'
import Button from './Button';

import logo from '../../assets/about/uniques.png'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    function clickHandle (){
        setIsOpen(!isOpen)
    }
  return (
    <div className='border-b'>
        <nav className='bg-white px-7 shadow-md flex justify-between items-center'>
            <ul className='gap-5 list-none font-[450] text-black/80 relative hidden lg:flex md:flex sm:hidden'>
                <li className='py-4 group'>
                    <Link to="/">About</Link>
                    <div className='group-hover:p-[1px] w-[45px] bg-black absolute top-[54px]'></div>
                </li>
                <li className='py-4 group'>
                    <Link to="/clubs">Clubs</Link>
                    <div className='group-hover:p-[1px] w-[40px] bg-black absolute top-[54px]'></div>
                </li>
                <li className='py-4 group'>
                    <Link to="/leads">Leads</Link>
                    <div className='group-hover:p-[1px] w-[40px] bg-black absolute top-[54px]'></div>
                </li>
                <li className='py-4 group'>
                    <Link to="/communityguidelines">Community Guidelines</Link>
                    <div className='group-hover:p-[1px] w-[163px] bg-black absolute top-[54px]'></div>
                </li>
            </ul>
            <div className='hidden lg:flex md:flex sm:hidden'>
                <Button text="Login" link="#"/>
            </div>
            
                <div className='flex lg:hidden md:hidden sm:flex justify-between items-center w-full'>
                    <div>
                        <img src={logo} width="100" height="100" alt="" />
                    </div>
                    <GiHamburgerMenu size={35} onClick={clickHandle}/>
                </div>
        </nav>
        {
            isOpen && 
            <div className='bg-white relative'>
                <div className='absolute w-full top-0 p-5 bg-white shadow-sm z-10'>
                    <ul className='flex  flex-col gap-y-3 justify-center items-center'>
                    <li className='py-4 group'>
                    <Link to="/">About</Link>
                    <div className='group-hover:p-[1px] w-[45px] bg-black absolute top-[54px]'></div>
                </li>
                <li className='py-4 group'>
                    <Link to="/clubs">Clubs</Link>
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
                <li className='py-4 group'>
                    <Link to="#">Login</Link>
                    <div className='group-hover:p-[1px] w-[163px] bg-black absolute top-[54px]'></div>
                </li>
                    </ul>
                </div>
            </div>
        }
    </div>
  )
}

export default Navbar