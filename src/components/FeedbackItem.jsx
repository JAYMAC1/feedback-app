import React, { useState } from 'react'

function FeedbackItem() {
  const [rating, setRating] = useState(7)
  const [text, setText] = useState('This is an example of a feedback item.')

  const handleClick = (e) => {
    e.preventDefault()
    setRating(10)
  }
  return (
    <div className='card'>
      <div className='num-display'>{rating}</div>
      <div className='text-display'>{text}</div>
      <button onClick={handleClick}></button>
    </div>
  )
}

export default FeedbackItem
