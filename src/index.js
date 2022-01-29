import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// context
import { FeedbackProvider } from './context/FeedbackContext'

ReactDOM.render(
  <React.StrictMode>
    <FeedbackProvider>
      <App />
    </FeedbackProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
