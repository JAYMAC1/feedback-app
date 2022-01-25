import FeedbackItem from './components/FeedbackItem'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header text='Feedback UI' />
      <div className='container'>
        <FeedbackItem />
      </div>
    </>
  )
}

export default App
