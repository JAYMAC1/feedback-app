// react components etc

// Pages and components
import FeedbackForm from '../components/FeedbackForm'
import FeedbackList from '../components/FeedbackList'
import FeedbackStats from '../components/FeedbackStats'

// mock data source
import FeedbackData from '../data/FeedbackData'

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
