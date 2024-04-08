import React from 'react'

const Eligibility = ({ eventType }) => {
  return (
    <div className=' text-white bg-red-800 rounded-md mx-auto p-6 my-6 lg:my-0'>
      <p className="text-lg font-bold mb-3">
        Tags:
      </p>
      <div className="flex flex-wrap gap-3">
        {eventType.map((type, index) => (
          <div className="bg-white font-semibold rounded-md text-sm min-w-20 text-center p-1 text-red-800" key={index}>{type}</div>
        ))}
      </div>
    </div>
  )
}

export default Eligibility