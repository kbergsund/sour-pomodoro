import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/ErrorPage.scss'


const ErrorPage = () => {
  return (
    <div className="container">
      <img
        className="theater-img"
        src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="an empty movie theater">
      </img>
      <span className="text-block">
        <h1 className="invalid">404-Invalid URL</h1>
        <p className="spooky">Whoa...kinda spooky in here</p>
        <Link to="/">
          <p className="link"> Get me outta here!</p>
        </ Link>
      </span>
    </div>
  )

}


export default ErrorPage