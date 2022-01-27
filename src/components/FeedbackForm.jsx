import React, { useState } from 'react'
import { Card } from './shared/Card'

const FeedbackForm = () => {
  const [text, setText] = useState('')
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us? </h2>
      </form>
      {/* @todo - rating select component */}
      <div className='input-group'>
        <input
          type='text'
          placeholder='write a review'
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button type='submit'>Send</button>
      </div>
    </Card>
  )
}

export default FeedbackForm
