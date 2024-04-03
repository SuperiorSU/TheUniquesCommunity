import React from 'react'

const ButtonHollow = (props) => {
    const text = props.text;
  return (
    <div className="inline-block bg-white rounded-[6px]">
        <button className='!bg-black/5 !hover:bg-black/15 min-w-[124px] max-w-[max-content] duration-150 border-[1px] !text-[#ca0019] w-[124px] h-[36px] rounded-[6px]'>{text}</button>
    </div>
  )
}

export default ButtonHollow