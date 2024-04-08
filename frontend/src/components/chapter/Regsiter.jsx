import { CalendarDaysIcon, MapIcon, TrophyIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Regsiter = () => {
  return (
    <div className='w-10/12 mx-auto bg-white p-4 rounded-md shadow-md flex flex-wrap lg:flex-wrap-reverse justify-between items-center'>
      <div className='flex flex-wrap gap-3'>
        <p className="text-lg font-medium flex items-center flex-wrap gap-3"><TrophyIcon className='flex-shrink-0' width={20} height={20} />TheUniques SVIET Chapter</p>
             
      </div>
      <button className='mt-5 md:mt-3 lg:mt-0 bg-red-800 text-white px-2 py-1 rounded-md mb-6 lg:mb-0 w-full lg:w-fit lg:h-auto'>Join This Chapter</button>
    </div>
  )
}

export default Regsiter