import React from 'react'
import '../scss/ClickedMovie.scss'

const ClickedMovie = ({ clicked, handleClick }) => {
  return (
    <article className="clicked-movie">
      <button 
        type="button"
        onClick={(event) => handleClick(event)}>x</button>
      <img src={clicked['backdrop_path']} alt="movie backdrop"></img>
      <section className="movie-stats">
        <h2>{clicked.title}</h2>
        <p>Rating: {clicked['average_rating']}</p>
        <p>Release Year: {clicked['release_date']}</p>
        <p>Overview: {clicked.overview}</p>
        <p>Revenue: {clicked.revenue}</p>
        <p>Budget: {clicked.budget}</p>
        <p>Runtime: {clicked.runtime}</p>
        <p>Tagline: {clicked.tagline}</p>
      </section>
    </article>
  )
}

export default ClickedMovie;