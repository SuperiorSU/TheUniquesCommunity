import React from 'react'

import { TrophyIcon } from '@heroicons/react/24/solid'
import { UserGroupIcon } from '@heroicons/react/24/solid'

import spon from './tus.png'
import { MdLocationCity } from 'react-icons/md'
import { FaMapMarker } from 'react-icons/fa'

const Details = () => {

    return (
        <div className='mt-[-50px] z-100 my-6 py-6 w-10/12 mx-auto  rounded-md flex gap-8'>
            <img src={spon} className='h-20  object-contain p-5 rounded-md bg-white' />
        </div>
    )
}

export default Details