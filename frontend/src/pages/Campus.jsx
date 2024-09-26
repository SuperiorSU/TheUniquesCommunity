import React from 'react'
import Header from '../components/chapter/Header'
import Details from '../components/chapter/Details'
import Register from '../components/chapter/Regsiter'
import Eligibility from '../components/chapter/Eligibility'
import Overview from '../components/chapter/Overview'
import Slick2 from '../components/clubs/Slick2'
import Slick from '../components/chapter/Slick'
import Mentors from '../components/chapter/Mentors'
import Faculty from '../components/chapter/Faculty'
import UpcomingCard from '../components/events/UpcomingCard'
import cc from '../components/events/code-crusade3.jpg'

const Campus = ({ event, handleClick }) => {

    const chapter = {
        name: "TheUniques | SVIET",
        logo: "",
        backdrop: "",
        description: "",
        lead: "Ronit Jai Prakash",
        coLead: "Priyanshi Sharma",
        facultyCordinator: "Mr. Ankur Gill",
        facultyCordinatorDesignation: "Director Operations",
        events: [
            {
                event_id: "1",
                name: "Global Summit 2024",
            },
            {
                event_id: "2",
                name: "G Ideate Ideathon",
            },
            {
                event_id: "3",
                name: "Bharat TechXperience",
            },

        ]

    }

    return (
        <div className='bg-gray-100 pb-12'>
            <Header />
            <Details />
            <Register />
            <div className='w-10/12 my-6  mx-auto flex flex-row-reverse flex-wrap'>
                <div className='w-full lg:w-1/3 '>

                    <Eligibility event="Code Crusade 3.0" chapter="The Uniques Chapter | SVIET" link={`/campus-ambassador/commingevent/8`}/>
                </div>
                <div className='w-full lg:w-2/3 pr-0 lg:pr-6'>
                    <Overview />
                </div>



            </div>
            {/* <div className='p-16'>
                <UpcomingCard img={cc}
                link="/campus-ambassador/commingevent/8"
                    title="Code Crusade 3.0"
                 description="Code Crusade is an introductory event for freshers to gain hands-on programming experience and enhance logical reasoning. Dive into languages like Python and C++, engage in practical sessions, and tackle real-world problems with guidance from experienced mentors. Participate in workshops, compete in coding contests, and test your skills through problem-solving challenges. The winner will receive direct entry into the esteemed batch, The Uniques."/>
            </div> */}
            <div className="w-10/12 mx-auto">
                <Mentors />
                <Faculty />
                <Slick events={event} />
            </div>
        </div>
    )
}

export default Campus