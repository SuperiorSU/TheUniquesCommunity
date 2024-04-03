import React from 'react'

const Button = (props) => {
    const text = props.text;
  return (
    <div className='inline-block bg-white'>
         <button className='bg-[#ca0019] text-white min-w-[124px] max-w-[max-content] h-[36px] rounded-[6px]'>{text}</button>
    </div>
  )
}

export default Button