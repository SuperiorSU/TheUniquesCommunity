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
const Event = ({ events }) => {

    // const event = {
    //     chapter: "The Uniques | SVIET",
    //     headerImage: "https://res.cloudinary.com/startup-grind/image/upload/c_limit,dpr_2,f_auto,g_center,h_1440,q_auto:good,w_2048/v1/gcs/platform-data-goog/event_wrapup/DSC05771.JPG",
    //     logo: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/Bevy%20Thumbnail_3yFLs9d.png",
    //     name: "Google I/O Extended 2023",
    //     date: "27th May 2023",
    //     venue: "SVIET Auditorium",
    //     overview: "Google Developers Group Chandigarh(GDG Chandigarh) is back with its most awaited event of the year, Google IO Extended Chandigarh ‘23. Join us for a day of learning, networking, and fun at Google Cloud Community Day at SVIET (Swami Vivekanand Institute of Engineering & Technology) on 27th May 2023! Google I/O Extended is a series of community-led tech meetups that bring the knowledge and excitement of Google I/O to developers on a city level, all around the globe. Google I/O Extended events are typically held in the days leading up to or following Google I/O, and they feature a variety of talks, workshops, and activities related to Google's latest developer products and technologies. Google I/O Extended events are a great opportunity for developers to learn about the latest Google technologies, to network with other developers, and to get help and support from Google experts. If you're a developer who is interested in learning more about Google's latest technologies, I encourage you to be a part of this great event.",
    //     speakers: [
    //         {
    //             id: 1,
    //             image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_400,q_auto:good,w_400/v1/gcs/platform-data-goog/events/Copy%2520of%2520WTM%2520IWD%25202024%2520-%2520Profile%2520Avatar%2520%25282%2529.jpg",
    //             name: "Loveleen Kaur",
    //             company: "Astrotalk",
    //             designation: "Senior Software Engineer",
    //             profile: "",
    //             twitter: "https://twitter.com/cammykamal",
    //             linkedin: "https://www.linkedin.com/in/kamal-vaid/",
    //             bio: "Kamal loves to work and explore Android. Working as Technology Lead with 8+ years of experience, he believes in the theory of sharing whatever you have learnt from everywhere. He is a blogger and write whenever he feel he has learnt something new and that needs to be shared. He is fond of Cars and Bikes, and spend his free time in riding."
    //         },
    //         {
    //             id: 2,
    //             image: "https://gdgchandigarh.com/assets/organizers/Pranav.png",
    //             name: "Pranav Kumar",
    //             company: "Nagarro",
    //             designation: "Sen. Engineerr",
    //             profile: "",
    //             twitter: "https://twitter.com/hifiveyatin",
    //             linkedin: "https://www.linkedin.com/in/hifiveyatin/",
    //             bio: "Yatin is a Project Engineer by profession having 3+ years of experience in corporate field. Learning new technology and implementing them is his goal. Along with his daily life, he also try to give back to the society by sharing information to peers."
    //         },
    //         {
    //             id: 3,
    //             image: "https://gdgchandigarh.com/assets/organizers/Aashi.jpeg",
    //             name: "Aashi Dutt",
    //             company: "MedEnGauge Healthcare Pvt Ltd",
    //             designation: "Co-Founderr",
    //             profile: "",
    //             twitter: "https://twitter.com/loveleen_nancy",
    //             linkedin: "https://www.linkedin.com/in/loveleen-kaur/",

    //             bio: "Loveleen Kaur, a bundle of positivity and happiness, this tech-savvy girl loves mountains and works wonders with technology. She is currently working as an Senior Android Developer with 5 years of experience. She is Co-Organizer of GDG Chandigarh, WTM Ambassador and Google Android Educator. Hailing from the technology field, she loves logic, but also has a passion for creativity. In her free time, She loves to mentor people to help them learn and grow in their career."
    //         },
    //         {
    //             id: 4,
    //             image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/WhatsApp%2520Image%25202023-08-04%2520at%252017.32.11.jpeg",
    //             name: "Nitin Tiwari",
    //             company: "LTIMindtree",
    //             designation: "Software Engineerr",
    //             profile: "",
    //             linkedin: "https://www.linkedin.com/in/pranav-kumar-verma/",
    //             twitter: "https://twitter.com/prnvkmr954",
    //             bio: "Pranav is a Senior Engineer by profession having 6.7 years of experience in corporate field. He loves programming and developing games. He states that learning is a process that never stops, even if you are old enough, there will be things that you can still learn. His hobbies are reading books playing games."
    //         },
    //         {
    //             id: 5,
    //             image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/WhatsApp%2520Image%25202023-05-23%2520at%25205.28.55%2520PM%2520%25282%2529.jpeg",
    //             name: "Kartik Derasari",
    //             company: "Google Cloud",
    //             designation: "Google Cloud Expert",
    //             profile: "",
    //             twitter: "https://twitter.com/CherishSantoshi",
    //             linkedin: "https://www.linkedin.com/in/cherishsantoshi/",
    //             bio: "An experienced Program Manager currently managing programs for 5 million developers across the globe. I'm passionate about building and scaling tech-communities and promoting technical education."
    //         },

    //     ],
    //     eventType: [
    //         "Speaker Session", "Tech Talk", "AI",
    //         "Android",
    //         "Cloud",
    //         "Machine Learning",
    //         "Mobile",
    //         "Web",
    //         "Women Techmakers"
    //     ],
    //     guest_type: "Speaker",
    //     partners : [
    //         "https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-goog/contentbuilder/logo_dark_QmPdj9K.svg",
    //         "https://gdgchandigarh.com/assets/Brand/CommunityPartners/tfug.jpg",
    //         "https://gdgchandigarh.com/assets/Brand/CommunityPartners/KUG.jpg",
    //         "https://gdgchandigarh.com/assets/Brand/CommunityPartners/allevents.jpg"
    //     ]
    // }
    const { id } = useParams()
    const event = events.find(singleEvent => singleEvent.id === parseInt(id))
    console.log(event)
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
                <Mentors speakers={event.speakers} type={event.guest_type} />
                <Partners partners={event.partners} />
            </div>
        </div>
    )
}

export default Event