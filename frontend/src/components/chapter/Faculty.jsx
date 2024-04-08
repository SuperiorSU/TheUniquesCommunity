import React from 'react'

const Faculty = () => {
    const organizers = [
        {
            id: 1,
            image: "https://media.licdn.com/dms/image/D5603AQGy5zkY1c0wXg/profile-displayphoto-shrink_100_100/0/1710042388840?e=1718236800&v=beta&t=5GISs6q5t7rh51a7buKeTbD7y664kyuff5q0n36yEGg",
            name: "Mr. Ankur Gill",

            designation: "Faculty Co-ordinator",
            profile: "Director Operations at SVIET",
            twitter: "https://twitter.com/cammykamal",
            linkedin: "https://www.linkedin.com/in/kamal-vaid/",
            bio: "Kamal loves to work and explore Android. Working as Technology Lead with 8+ years of experience, he believes in the theory of sharing whatever you have learnt from everywhere. He is a blogger and write whenever he feel he has learnt something new and that needs to be shared. He is fond of Cars and Bikes, and spend his free time in riding."
        },



    ]
    return (
        <div className=' mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
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
                            <p className="text-sm font-semibold mt-2">
                                {organizer.profile}
                            </p>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default Faculty