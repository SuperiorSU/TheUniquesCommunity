import React from 'react'
import '../leads/button1.css'
function Button(props) {
  return (
    <>
      <button className='py-2 px-6 btn'>
      {props.text}
      </button>
    </>
  )
}

export default Button
