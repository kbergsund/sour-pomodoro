import React from 'react'
import '../scss/ClickedMovie.scss'

const ClickedMovie = ({ clicked, handleClick }) => {
  return (
    <article className="clicked-movie">
      <button 
        type="button"
        onClick={(event) => handleClick(event)}>x</button>
      <section className="clicked-image" style={{
        backgroundImage: `url(${clicked['backdrop_path']}`
      }}>
        <div className="movie-stats">
          <h3>{clicked.title}</h3>
          <p>Rating: {clicked['average_rating']}</p>
          <p>Release Year: {clicked['release_date']}</p>
          <p>Overview: {clicked.overview}</p>
          <p>Revenue: {clicked.revenue}</p>
          <p>Budget: {clicked.budget}</p>
          <p>Runtime: {clicked.runtime}</p>
          <p>Tagline: {clicked.tagline}</p>
        </div>
      </section>
    </article>
  )
}

export default ClickedMovie;