// react components
import React, { useState, useContext } from 'react'

// context and hooks
import FeedbackContext from '../context/FeedbackContext'

// components and pages
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import { Card } from './shared/Card'

// npm packages
import { v4 as uuidv4 } from 'uuid'

const FeedbackForm = () => {
  const { feedback, setFeedback } = useContext(FeedbackContext)

  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleTextChange = (e) => {
    e.preventDefault()
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true)
      setMessage('Text must be at least 10 characters')
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(e.target.value)
  }

  const select = (rating) => {
    setRating(rating)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        id: uuidv4(),
        rating: rating,
        text: text,
      }
      setFeedback([newFeedback, ...feedback])
      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us? </h2>
        <RatingSelect select={select} />
        <div className='input-group'>
          <input
            type='text'
            placeholder='write a review'
            onChange={handleTextChange}
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
