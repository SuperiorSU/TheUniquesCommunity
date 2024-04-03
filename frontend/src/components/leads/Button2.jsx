import React from 'react'
import '../leads/button2.css'
function Button2(props) {
  return (
    <>
    <button className='py-2 px-6 btn2'>
        {props.text}
      </button>
    </>
  )
}

export default Button2