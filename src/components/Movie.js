import React from 'react'
import '../scss/Movie.scss'
import { Link } from 'react-router-dom';

const Movie = ({ id, poster }) => {
  return (
    <article>
      <Link to={`/movies/${id}`}>
        <img
          className="poster"
          src={poster}
          alt="movie poster">
        </img>
      </Link>
    </article>
  )
}

export default Movie