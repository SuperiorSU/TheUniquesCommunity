import { CalendarDaysIcon, MapIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Regsiter = ({date,venue}) => {
  return (
    <div className='w-10/12 mx-auto bg-white p-4 rounded-md shadow-md flex flex-wrap-reverse justify-between items-center'>
      <div className='flex flex-wrap gap-3'>
        <p className="text-lg font-medium flex items-center flex-wrap gap-3"><CalendarDaysIcon className='flex-shrink-0' width={20} height={20} /> {date}</p>
        <p className="text-lg font-medium flex items-center gap-3 flex-wrap"><MapIcon width={20} height={20} className='flex-shrink-0' />Venue : {venue}</p>

      </div>
      <button className='bg-red-800 text-white px-2 py-1 rounded-md mb-6 lg:mb-0 w-full lg:w-fit lg:h-auto'>Regsiter</button>
    </div>
  )
}

export default Regsiter