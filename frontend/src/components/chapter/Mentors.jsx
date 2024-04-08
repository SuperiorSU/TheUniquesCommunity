import React from 'react'

const Mentors = () => {
    const organizers = [
        {
            id: 1,
            image: "https://gdgchandigarh.com/assets/volunteers/Ronit%20Jai%20Prakash.jpg",
            name: "Ronit Jai Prakash",

            designation: "Campus Lead",
            profile: "",
            twitter: "https://twitter.com/cammykamal",
            linkedin: "https://www.linkedin.com/in/kamal-vaid/",
            bio: "Kamal loves to work and explore Android. Working as Technology Lead with 8+ years of experience, he believes in the theory of sharing whatever you have learnt from everywhere. He is a blogger and write whenever he feel he has learnt something new and that needs to be shared. He is fond of Cars and Bikes, and spend his free time in riding."
        },
        {
            id: 2,
            image: "https://gdgchandigarh.com/assets/volunteers/Priyanshi.jpg",
            name: "Priyanshi Sharma",
            company: "Wipro",
            designation: "Campus Co Lead",
            profile: "",
            twitter: "https://twitter.com/hifiveyatin",
            linkedin: "https://www.linkedin.com/in/hifiveyatin/",
            bio: "Yatin is a Project Engineer by profession having 3+ years of experience in corporate field. Learning new technology and implementing them is his goal. Along with his daily life, he also try to give back to the society by sharing information to peers."
        },


    ]
    return (
        <div>
            <p className="text-2xl md:text-3xl font-semibold py-12">Our <span className="text-red-800">Leads</span> & <span className="text-red-800">Faculty </span>Members</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {organizers.map((organizer, index) => (
                    <div className='bg-white rounded-md shadow-md p-6 h-full flex gap-3 items-center'>
                        <img src={organizer.image} className='h-20 w-20 rounded-full' alt="" />
                        <div>
                            <div className='mb-2'>
                                <p className="text-md lg:text-lg xl:text-xl font-bold">
                                    {organizer.name}
                                </p>
                                <p className="text-sm font-semibold text-red-800">
                                    {organizer.designation}
                                </p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Mentors