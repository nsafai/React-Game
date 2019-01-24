import React from 'react'
const DisplayTime = ({ date }) => {

  const time = date.toLocaleString()

  return (
    <div>
      <h1>{time}</h1>
    </div>
  )
}

export default DisplayTime
