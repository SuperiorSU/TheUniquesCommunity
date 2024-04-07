import React from 'react'
import ButtonHollow from './ButtonHollow'

const Guidelines = () => {
  return (
    <div style={{backgroundImage:`url(https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`, backgroundSize:"cover", backgroundPosition:"center center", backgroundAttachment:"fixed"}}>
      <div className='bg-[#00000099] text-white py-12'>
      <div className='w-11/12 mx-auto text-center ' >
        <div>
          <h2 className='text-4xl font-bold py-3'>Our Community <span className="text-red-800">Guidelines</span></h2>
          <p className='text-sm lg:text-mds py-2 '>The Uniques Community serves as a vital bridge between the worlds of academia and industry, uniquely positioned to fill the gap and foster meaningful connections between the two spheres. At our core, we are driven by a shared vision of empowering individuals to thrive in the rapidly evolving landscape of technology and entrepreneurship. Here's how we accomplish this</p>
          <div className='my-3'>
            <ButtonHollow text="Guidelines" link="/communityguidelines" />
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Guidelines