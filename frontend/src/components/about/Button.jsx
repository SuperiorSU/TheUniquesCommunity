import React from 'react'
import { Link } from 'react-router-dom';

const Button = (props) => {
    const text = props.text;
    const link = props.link;
  return (
    <div className='inline-block bg-white'>
      <Link to={link}>
        <button className='bg-[#ca0019] text-white min-w-[124px] max-w-[max-content] h-[36px] rounded-[6px]'>{text}</button>
      </Link>
         
    </div>
  )
}

export default Button