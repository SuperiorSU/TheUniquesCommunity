import React, { useState } from 'react'
import { GiBarStool, GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom'
import Button from './Button';


import logo from '../../assets/about/theuniquesCommunity.png'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    function clickHandle() {
        setIsOpen(!isOpen)
    }
    return (
        <div className=' w-full bg-white z-50'>
            <div className="w-full mx-auto hidden lg:block py-3 border-b">
                <div className="w-11/12 mx-auto flex justify-between">
                    <Link to='/'>
                        <img src={logo} alt="" className='w-[150px]' />
                    </Link>
                    <div className='hidden lg:flex md:flex sm:hidden'>
                        <Button text="Login" link="#" />
                    </div>
                </div>
            </div>
            <div className="w-full border-b z-50">
                <nav className='w-11/12 mx-auto flex justify-between items-center'>
                    <ul className='text-sm list-none font-[450] items-center text-black/80 relative hidden lg:flex md:flex sm:hidden'>
                        <li className='my-auto group'>

                        </li>
                        <li className='py-4 group mr-5'>
                            <Link to="/">About</Link>
                            <div className='group-hover:p-[1px] w-[45px] bg-black absolute top-[54px]'></div>
                        </li>
                        <li className='py-4 group mr-5'>
                            <Link to="/clubs">Clubs</Link>
                            <div className='group-hover:p-[1px] w-[40px] bg-black absolute top-[54px]'></div>
                        </li>
                        <li className='py-4 group mr-5'>
                            <Link to="/leads">Leads</Link>
                            <div className='group-hover:p-[1px] w-[40px] bg-black absolute top-[54px]'></div>
                        </li>
                        <li className='py-4 group mr-5'>
                            <Link to="/communityguidelines">Community Guidelines</Link>
                            <div className='group-hover:p-[1px] w-[163px] bg-black absolute top-[54px]'></div>
                        </li>
                    </ul>
                    

                    <div className='flex lg:hidden md:hidden sm:flex justify-between items-center w-full py-3'>
                        <div>
                            <img src={logo} width="100" height="100" alt="" />
                        </div>
                        <GiHamburgerMenu size={25} onClick={clickHandle} />
                    </div>
                </nav>
            </div>
            {isOpen &&
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