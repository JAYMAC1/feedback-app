// react components etc
import { useState } from 'react'

// Pages and components
import FeedbackForm from '../components/FeedbackForm'
import FeedbackList from '../components/FeedbackList'
import FeedbackStats from '../components/FeedbackStats'

// mock data source
import FeedbackData from '../data/FeedbackData'

// packages
import { v4 as uuidv4 } from 'uuid'

const HomePage = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    console.log(newFeedback)
    setFeedback([newFeedback, ...feedback])
  }
  return (
    <>
      <div className='container'>
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default HomePage
