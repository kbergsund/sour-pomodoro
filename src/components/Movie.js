import React from 'react'
import '../scss/Movie.scss'

const Movie = ({ poster }) => {
  return (
    <article className="moviePoster">
      <img className="poster" src={poster} alt="movie poster"></img>
    </article>
  )
}


export default Movie