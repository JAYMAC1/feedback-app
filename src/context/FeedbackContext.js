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

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  // Add feedback to the array/collection
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    console.log(newFeedback)
    setFeedback([newFeedback, ...feedback])
  }

  // remove feedback from array/collectiom
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // mark item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }
  console.log(feedbackEdit.edit)
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
      }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
