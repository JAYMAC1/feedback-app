// react components
import { useContext } from 'react'

// npm packages
import { FaTimes } from 'react-icons/fa'

// components and pages
import { Card } from './shared/Card'

// context and hooks
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({ item }) {
  const { deleteFeedback } = useContext(FeedbackContext)
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button className='close' onClick={() => deleteFeedback(item.id)}>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

export default FeedbackItem
