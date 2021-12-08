import React from 'react'
import '../scss/Movie.scss'
import { Link } from 'react-router-dom';

const Movie = (key, { poster, handleClick }) => {
  return (
    <article>
      {/* <article onClick={(event) => handleClick(event)}> */}
      <Link to='/movies/694919'>
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