import React from 'react'

function SectionTitle({heading, subHeading}) {
  return (
    <div className='md:w-3/12 mx-auto mt-12'>
        <p className='text-center text-yellow-600'>--{subHeading}--</p>
        <p className='text-center text-3xl border-t-2 border-red-600 border-y-2 py-2 m-2'>{heading}</p>
    </div>
  )
}

export default SectionTitle;