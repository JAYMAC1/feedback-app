//  resct components
import React, { useContext } from 'react'

// create context
import FeedbackContext from '../context/FeedbackContext'

// components and pages
import FeedbackItem from './FeedbackItem'

// extra npm packages
import { motion, AnimatePresence } from 'framer-motion'
import Spinner from './shared/Spinner'

const FeedbackList = () => {
  const { feedback, isPending } = useContext(FeedbackContext)

  if (!isPending && (!feedback || feedback.length < 0)) {
    return <p>No feedback yet</p>
  }

  return isPending ? (
    <Spinner />
  ) : (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )

  // return (
  //   <div className='feedback-list'>
  //     {feedback.map((item) => (
  //       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
  //     ))}
  //   </div>
  // )
}

export default FeedbackList
