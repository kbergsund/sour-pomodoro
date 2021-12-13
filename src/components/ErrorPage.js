import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/ErrorPage.scss'

const ErrorPage = () => {
  return (
    <section className="error-container">
        <h2>404-Invalid URL</h2>
        <p className="spooky-error">Whoa...kinda spooky in here</p>
        <Link to="/"
        className='error-link'>Get me outta here!</ Link>
      </section>
  )
}

export default ErrorPage