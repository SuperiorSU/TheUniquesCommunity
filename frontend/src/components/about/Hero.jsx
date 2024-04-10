import React from 'react';
import Button from './Button';
import ButtonHollow from './ButtonHollow';
import gif from '../../assets/about/gif.gif'
import logo from '../../assets/about/theuniquesCommunity.png'

import heroGif from '../../assets/about/hero.gif'

const Hero = () => {
  return (
    <header className="bg-white p-8" >
      <div className="grid mt-16 min-h-[60vh] w-full lg:h-[54rem] md:h-[34rem] place-items-stretch bg-center bg-contain bg-no-repeat">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex text-md rounded-lg  border-blue-gray-50 bg-red-800 text-white py-1 lg:px-4 px-1 font-medium">
            Welcome to <span className='tex'> TheUniques </span> Community
          </div>
          <div

            color="blue-gray"
            className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl font-semibold"
          >
            Fostering Innovation By Learning, Growing & <span className='text-red-800'>Creating</span>

            Together
          </div>
          <div
            variant="lead"
            className="mx-auto w-full !text-gray-500 lg:text-lg text-base"
          >
            A vibrant and dynamic ecosystem dedicated to nurturing innovation, collaboration, and personal development among its members.
          </div>

        </div>
        <div className="flex justify-center flex-wrap gap-6 py-6">
          <Button text='Lead a Club' link="/leads" />
          <ButtonHollow text='Join a Club' link="/clubs" />
        </div>
        <div className="mt-8 grid w-full place-items-start md:justify-center">
          <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
            <img src={heroGif} alt="" srcset="" />

          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero