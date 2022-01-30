// react components etc

// Pages and components
import FeedbackForm from '../components/FeedbackForm'
import FeedbackList from '../components/FeedbackList'
import FeedbackStats from '../components/FeedbackStats'

const HomePage = () => {
  return (
    <>
      <div className='container'>
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
      </div>
    </>
  )
}

export default HomePage
