import React from 'react'

const Mentors = () => {
    const organizers = [
        {
            id: 1,
            image: "https://gdgchandigarh.com/assets/speakers/anubhav-singh.jpg",
            name: "Kamal Vaid",
            company: "Infosys",
            designation: "Technology Lead",
            profile: "",
            twitter: "https://twitter.com/cammykamal",
            linkedin: "https://www.linkedin.com/in/kamal-vaid/",
            bio: "Kamal loves to work and explore Android. Working as Technology Lead with 8+ years of experience, he believes in the theory of sharing whatever you have learnt from everywhere. He is a blogger and write whenever he feel he has learnt something new and that needs to be shared. He is fond of Cars and Bikes, and spend his free time in riding."
        },
        {
            id: 2,
            image: "https://gdgchandigarh.com/assets/speakers/anubhav-singh.jpg",
            name: "Yatin Nayyar",
            company: "Wipro",
            designation: "Project Engineer",
            profile: "",
            twitter: "https://twitter.com/hifiveyatin",
            linkedin: "https://www.linkedin.com/in/hifiveyatin/",
            bio: "Yatin is a Project Engineer by profession having 3+ years of experience in corporate field. Learning new technology and implementing them is his goal. Along with his daily life, he also try to give back to the society by sharing information to peers."
        },
        {
            id: 3,
            image: "https://gdgchandigarh.com/assets/speakers/anubhav-singh.jpg",
            name: "Loveleen Kaur",
            company: "Astrotalk",
            designation: "Senior Engineer",
            profile: "",
            twitter: "https://twitter.com/loveleen_nancy",
            linkedin: "https://www.linkedin.com/in/loveleen-kaur/",

            bio: "Loveleen Kaur, a bundle of positivity and happiness, this tech-savvy girl loves mountains and works wonders with technology. She is currently working as an Senior Android Developer with 5 years of experience. She is Co-Organizer of GDG Chandigarh, WTM Ambassador and Google Android Educator. Hailing from the technology field, she loves logic, but also has a passion for creativity. In her free time, She loves to mentor people to help them learn and grow in their career."
        },
        {
            id: 4,
            image: "https://gdgchandigarh.com/assets/speakers/anubhav-singh.jpg",
            name: "Pranav Kumar Verma",
            company: "Nagarro",
            designation: "Senior Engineer",
            profile: "",
            linkedin: "https://www.linkedin.com/in/pranav-kumar-verma/",
            twitter: "https://twitter.com/prnvkmr954",
            bio: "Pranav is a Senior Engineer by profession having 6.7 years of experience in corporate field. He loves programming and developing games. He states that learning is a process that never stops, even if you are old enough, there will be things that you can still learn. His hobbies are reading books playing games."
        },
        {
            id: 5,
            image: "https://gdgchandigarh.com/assets/speakers/anubhav-singh.jpg",
            name: "Cherish Santoshi",
            company: "DevNetwork",
            designation: "Advisory Board Member",
            profile: "",
            twitter: "https://twitter.com/CherishSantoshi",
            linkedin: "https://www.linkedin.com/in/cherishsantoshi/",
            bio: "An experienced Program Manager currently managing programs for 5 million developers across the globe. I'm passionate about building and scaling tech-communities and promoting technical education."
        },

    ]
    return (
        <div className=' mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {organizers.map((organizer, index) => (
                <div className='bg-white rounded-md shadow-md p-6 h-full flex gap-3 items-center'>
                    <img src={organizer.image} className='h-20 w-20 rounded-full' alt="" />
                    <div>
                        <div className='mb-2'>
                            <p className="text-lg font-bold">
                                {organizer.name}
                            </p>
                            <p className="text-sm font-semibold">
                                {organizer.company}
                            </p>
                        </div>
                        <p className="text-sm font-semibold text-red-800">
                            MENTOR/JUDGE
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Mentors