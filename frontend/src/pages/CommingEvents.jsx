import React from 'react'
import Header from '../components/events/Header'
import Details from '../components/events/Details'
import Register from '../components/events/Regsiter'
import Eligibility from '../components/events/Eligibility'
import Overview from '../components/events/Overview'
import Slick2 from '../components/clubs/Slick2'
import Slick from '../components/clubs/Slick'
import Mentors from '../components/events/Mentors'
import Partners from '../components/events/Partners'
import { useParams } from 'react-router-dom'
const CommingEvent = ({ events }) => {

    const { id } = useParams()
    const event = events.find(singleEvent => singleEvent.id === parseInt(id))

    return (
        <div className='bg-gray-100 pb-12'>
            <Header header={event.headerImage} />
            <Details logo={event.logo} name={event.name} chapter={event.chapter} venue={event.venue} />
            <Register date={event.date} venue={event.venue} />
            <div className='w-10/12 my-6  mx-auto flex flex-row-reverse flex-wrap'>
                <div className='w-full lg:w-1/3 '>

                    <Eligibility eventType={event.eventType} />
                </div>
                <div className='w-full lg:w-2/3 pr-0 lg:pr-6'>
                    <Overview overview={event.overview} name={event.name} />

                </div>
            </div>
            <div className="w-10/12 mx-auto">
                {event.speakers.length > 0 && <Mentors speakers={event.speakers} type={event.guest_type} />}
                {event.partners.length > 0 && <Partners partners={event.partners} />}
            </div>
        </div>
    )
}

export default CommingEvent