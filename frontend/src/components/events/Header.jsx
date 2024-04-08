import React from 'react'


import header from './000-scaled.jpg'

const Header = () => {
  return (
    <div className='w-full h-[60vh]' style={{backgroundImage:`url(${header})`, backgroundSize:"cover", backgroundPosition:"center center"}}>
        {/* <Image src={header} className='h-full object-cover object-center w-full'/> */}
    </div>
  )
}

export default Header