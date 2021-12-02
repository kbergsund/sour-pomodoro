import React from 'react'
import '../scss/Movie.scss'

const Movie = ({ poster, handleClick }) => {
  return (
    <article 
      className="moviePoster"
      onClick={(event) => handleClick(event)}>
      <img
        className="poster"
        src={poster}
        alt="movie poster">
      </img>
    </article>
  )
}

export default Movie