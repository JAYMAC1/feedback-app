import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: 'This is review item 1.',
    },
    {
      id: 2,
      rating: 5,
      text: 'This is review item 2.',
    },
    {
      id: 3,
      rating: 10,
      text: 'This is review item 3.',
    },
  ])

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    console.log(newFeedback)
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <FeedbackContext.Provider
      value={{ feedback, setFeedback, deleteFeedback, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
