import React from 'react'
import '../leads/Leadpage.css'
import Button from './Button'
import { IoMdPeople } from "react-icons/io";
import banner from '../../assets/leads/bsnner.png'
function Leadpage() {
    return (
        <>
            <h1 className='text-center heading m-4'>Google Developer Student Clubs Leads</h1>
            <div className='para-div'>
                <p className=' first-para'>Google Developer Student Club Leads are passionate leaders at their universities who are dedicated to helping their peers learn and connect. Leads are undergraduate or graduate university students pursuing various degrees, yet have foundational knowledge of software development concepts.</p>
                <p className=' first-para m-4'>Google collaborates with Leads and supports them as they start and grow their on-campus communities.</p>
                <Button text="Apply now" />
            </div>
            <div className='cards-div'>
                <h1 className=' card-heading m-4'>What does a Lead do?</h1>
                <div className='flex flex-wrap'>
                    <div className='card p-4'>
                        <IoMdPeople className='card-icon' />
                        <h3 className='card-title'>Start or grow a club</h3>
                        <p>Work with your university to start a student club. Create a core team and select a faculty advisor to support.</p>
                    </div>
                    <div className='card p-4'>
                        <IoMdPeople className='card-icon' />
                        <h3 className='card-title'>Start or grow a club</h3>
                        <p>Work with your university to start a student club. Create a core team and select a faculty advisor to support.</p>
                    </div>

                    <div className='card p-4'>
                        <IoMdPeople className='card-icon' />
                        <h3 className='card-title'>Start or grow a club</h3>
                        <p>Work with your university to start a student club. Create a core team and select a faculty advisor to support.</p>
                    </div>

                    <div className='card p-4'>
                        <IoMdPeople className='card-icon' />
                        <h3 className='card-title'>Start or grow a club</h3>
                        <p>Work with your university to start a student club. Create a core team and select a faculty advisor to support.</p>
                    </div>

                    <div className='card p-4'>
                        <IoMdPeople className='card-icon' />
                        <h3 className='card-title'>Start or grow a club</h3>
                        <p>Work with your university to start a student club. Create a core team and select a faculty advisor to support.</p>
                    </div>

                    <div className='card p-4'>
                        <IoMdPeople className='card-icon' />
                        <h3 className='card-title'>Start or grow a club</h3>
                        <p>Work with your university to start a student club. Create a core team and select a faculty advisor to support.</p>
                    </div>

                    <div className='card p-4'>
                        <IoMdPeople className='card-icon' />
                        <h3 className='card-title'>Start or grow a club</h3>
                        <p>Work with your university to start a student club. Create a core team and select a faculty advisor to support.</p>
                    </div>

                    <div className='card p-4'>
                        <IoMdPeople className='card-icon' />
                        <h3 className='card-title'>Start or grow a club</h3>
                        <p>Work with your university to start a student club. Create a core team and select a faculty advisor to support.</p>
                    </div>
                </div>
            </div>

            <div className='page-body'>
                <h1>Become a Google Developer Student Club Lead</h1>
                <p>The Google Developer Student Clubs application process will open across regions as follows. The program is not offered in certain countries and regions. Please check the application portal for a detailed timeline and list of locations where the program is available.</p>
                <div className='my-4'>Application open dates</div>
                <ul>
                    <li>February 22, 2024 - India</li>
                    <li>March 1, 2024 - North America, Europe, Pakistan, Middle East and North Africa, Sub-Saharan Africa, Turkey, Central Asia, and Caucasus</li>
                    <li>April 1, 2024 - Australia, New Zealand, South Korea, Japan, ASEAN, Taiwan, and Hong Kong</li>
                </ul>

                <div className='my-4'>Application open dates</div>
                <ul className='mb-4'>
                    <li>February 22, 2024 - India</li>
                    <li>March 1, 2024 - North America, Europe, Pakistan, Middle East and North Africa, Sub-Saharan Africa, Turkey, Central Asia, and Caucasus</li>
                    <li>April 1, 2024 - Australia, New Zealand, South Korea, Japan, ASEAN, Taiwan, and Hong Kong</li>
                </ul>
                <Button text="Apply now" />
            </div>
            <div className='second-body'>
                <div className='left-part'>
                    <h1>Community Guidelines</h1>
                    <p>When you join our programs, you're joining a community. And like any growing community, a few ground rules about expected behavior are good for everyone. These guidelines cover both online (for example, mailing lists and social channels) and offline (for example, in-person meetups) behavior.</p>
                    <p>Violations of this code of conduct can result in members being removed from the program. Use your best judgment, and if you'd like more clarity or have questions feel free to reach out.</p>
                </div>
                <div className='img-div'>
                    <img src={banner} alt="" />
                </div>
            </div>
        </>
    )
}

export default Leadpage
