import React from 'react'
import { Link } from 'react-router-dom';

const Eligibility = (props) => {
  const {link, event, chapter}  = props;
  return (
    <div className=' text-white bg-red-800 rounded-md mx-auto p-6 my-6 lg:my-0'>
      <p className="text-lg font-bold mb-3">
        {event?"Upcoming Events":"No Events"}
      </p>
      <Link to={link}>
      <p className="text-md font-medium text-justify">
      {chapter}<br/>
        <span className="font-bold mt-3">{event}</span> </p>
      </Link>
    </div>
  )
}

export default Eligibility