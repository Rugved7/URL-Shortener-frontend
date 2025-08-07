import React from 'react'
import ShortenItem from './ShortenItem'

const ShortenUrlList = ({ data }) => {
  // Return early if data is undefined or null
  if (!data) {
    return <div>No data available</div>
  }

  // Check if data is an array
  if (!Array.isArray(data)) {
    return <div>Invalid data format</div>
  }

  return (
    <div className='my-6 space-y-4'>
      {data.map((item) => (
        <ShortenItem key={item.id} {...item} />
      ))}
    </div>
  )
}

export default ShortenUrlList