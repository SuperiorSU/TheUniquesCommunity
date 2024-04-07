import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FiYoutube } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
const Touchh = () => {
    return (
        <div className='py-7'>
            <div className='w-full p-4 p text-center bg-[#414f53] text-white' >
                <div>
                    <h2 className='text-3xl font-medium py-3'>Stay in Touch</h2>
                    <div className='flex justify-center gap-2 p-2 flex-wrap'>

                        <div className='rounded-[6px] border-[1px] px-2 py-2 max-w-[max-content]'>
                            <Link to="https://www.instagram.com/theuniquesofficial/" className=''>
                                <FaInstagram src={23} className='inline-block' />
                                <span className='inline-block ms-1'>Instagram</span>
                            </Link>
                        </div>
                        <div className='rounded-[6px] border-[1px] px-2 py-2 max-w-[max-content]'>
                            <Link to="" className=' '>
                                <FiYoutube src={23} className='inline-block' />
                                <span className='inline-block ms-1'>Youtube</span>
                            </Link>
                        </div>
                        <div className='rounded-[6px] border-[1px] px-2 py-2 max-w-[max-content]'>
                            <Link to="https://www.linkedin.com/company/theuniquesofflicial/" className=' '>
                                <AiOutlineLinkedin src={23} className='inline-block' />
                                <span className='inline-block ms-1'>Linkedin</span>
                            </Link>
                        </div>
                        <div className='rounded-[6px] border-[1px] px-2 py-2 max-w-[max-content]'>
                            <Link to="" className=' '>
                                <FaXTwitter src={23} className='inline-block' />
                                <span className='inline-block ms-1'> (Twitter)</span>
                            </Link>
                        </div>
                    </div>
                    <div className='my-3'>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default Touchh