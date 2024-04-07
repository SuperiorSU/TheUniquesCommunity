import React from 'react'
import { Link } from 'react-router-dom'

import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

import logo from '../../assets/about/theuniquesCommunity.png'
const Foot = () => {
    return (
        <div>
            <footer className=' border-t'>
                <div className='w-11/12 mx-auto py-2'>
                    <div className='flex flex-wrap gap-x-3 items-center justify-between'>
                        <div className='flex gap-x-3 md:gap-x-5 lg:gap-x-7'>
                            <img src={logo} width={120} height={120} className=' object-contain' alt="" />
                            <ul className='list-none flex text-sm gap-x-2'>
                                <li className='py-4 group mr-3'>
                                    <Link to="/">About</Link>
                                    <div className='group-hover:p-[1px] w-[45px] bg-black absolute top-[54px]'></div>
                                </li>
                                <li className='py-4 group mr-3'>
                                    <Link to="/clubs">Clubs</Link>
                                    <div className='group-hover:p-[1px] w-[40px] bg-black absolute top-[54px]'></div>
                                </li>
                                <li className='py-4 group mr-3'>
                                    <Link to="/leads">Leads</Link>
                                    <div className='group-hover:p-[1px] w-[40px] bg-black absolute top-[54px]'></div>
                                </li>
                                <li className='py-4 group mr-3'>
                                    <Link to="/communityguidelines">Community Guidelines</Link>
                                    <div className='group-hover:p-[1px] w-[163px] bg-black absolute top-[54px]'></div>
                                </li>
                            </ul>
                        </div>
                        <ul className='list-none flex text-sm gap-x-3'>
                        <li>
                                Follow Us : 
                            </li>
                            <li>
                                <FaInstagram src={23} className='inline-block' />
                            </li>
                            <li>
                                <FaXTwitter src={23} className='inline-block' />
                            </li>
                            <li>
                                <FaYoutube src={23} className='inline-block' />
                            </li>
                            <li>
                                <AiOutlineLinkedin src={23} className='inline-block' />
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Foot