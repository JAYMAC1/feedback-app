// react components and libraries
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

// components and pages
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import AboutIconLink from './components/AboutIconLink'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <Header text='Feedback UI' />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
      <Link to='/about'>
        <AboutIconLink />
      </Link>
    </BrowserRouter>
  )
}

export default App
