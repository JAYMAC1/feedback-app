import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../components/shared/Card'

const AboutPage = () => {
  return (
    <div className='container'>
      <Card>
        <div className='about'>
          <h1>About this project</h1>
          <p>This is a react app tp leave feedback for a product or service.</p>
          <p>Version: 1.0.0</p>
          <Link to='/'>Home</Link>
        </div>
      </Card>
    </div>
  )
}

export default AboutPage
