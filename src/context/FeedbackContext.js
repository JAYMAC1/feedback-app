import { createContext, useState, useEffect } from 'react'
const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [isPending, setIsPending] = useState(true)
  const [feedback, setFeedback] = useState([])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    fetchFeedback()
  }, [])

  // fetch feedback
  const fetchFeedback = async () => {
    const res = await fetch('/feedback?_sort=id&_order=desc')
    const data = await res.json()
    setFeedback(data)
    setIsPending(false)
  }

  // Add feedback to the array/collection
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })

    const data = await response.json()

    setFeedback([data, ...feedback])
  }

  // remove feedback from array/collectiom
  const deleteFeedback = async (id) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'DELETE',
    })

    setFeedback(feedback.filter((item) => item.id !== id))
  }

  // Update feedback item
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem),
    })

    const data = await response.json()

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    )
    console.log(id, updItem)
    setFeedbackEdit({
      item: {},
      edit: false,
    })
  }

  // mark item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        isPending,
      }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
