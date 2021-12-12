import React from 'react'
import '../scss/Movie.scss'
import { Link } from 'react-router-dom';
import Star from 'simple-rating-stars'

const Movie = ({ id, poster, rating }) => {
  return (
    <article className="movie">
      <Link to={`/movies/${id}`}>
        <img
          className="poster"
          src={poster}
          alt="movie poster">
        </img>
      </Link>
        <Star
        stars={Math.round(rating)}
        outOf={10}
        full={'#ffffff'} 
        empty={'##000000'}
        stroke={'#a33c00'}
        />
    </article>
  )
}

export default Movie