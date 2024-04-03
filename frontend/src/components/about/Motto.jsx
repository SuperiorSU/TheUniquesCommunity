import React from 'react'

const Motto = () => {
  return (
    <div className='px-7'>
        <div className='lg:flex justify-evenly p-3 my-3 items-center flex:wrap lg:flex-nowrap md:flex-nowrap'>
            <div className='ps-4 pt-2 pb-2 pe-4'>
                <h3 className='text-xl font-medium py-2'>Connect</h3>
                <p className='text-[#414f53]'>Meet students interested in developer technologies at your college or university. All are welcome, including those with diverse backgrounds and different majors.</p>
            </div>
            <div className='ps-4 pt-2 pb-2 pe-4'>
                <h3 className='text-xl font-medium py-2'>Learn</h3>
                <p className='text-[#414f53]'>Learn about a range of technical topics and gain new skills through hands-on workshops, events, talks, and project-building activities online and in-person.</p>
            </div>
            <div className='ps-4 pt-2 pb-2 pe-4'>
                <h3 className='text-xl font-medium py-2'>Grow</h3>
                <p className='text-[#414f53]'>Apply new learnings to build great solutions for local problems. Advance your skills, career, and network. Give back to your community by helping others learn.</p>
            </div>
        </div>
    </div>
  )
}

export default Motto