import React from 'react'
import { Link } from 'react-router-dom';

const ButtonHollow = (props) => {
    const text = props.text;
    const link = props.link;
  return (
    <div className="inline-block bg-white rounded-[6px]">
      <Link to={link}>
        <button className='!bg-black/5 !hover:bg-black/15 min-w-[124px] max-w-[max-content] duration-150 border-[1px] !text-[#ca0019] w-[124px] h-[36px] rounded-[6px]'>{text}</button>
      </Link>
    </div>
  )
}

export default ButtonHollow