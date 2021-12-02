import React, { Component } from 'react'
import movieData from '../movieData'
import Movie from './Movie'
import '../scss/MovieContainer.scss'

class MovieContainer extends Component {
  constructor() {
    super()
    this.state = {
      movieData: movieData
    }
  }

  render() {
    const allMovies = this.state.movieData.movies.map(movie => {
      return <Movie key={movie.id} poster={movie['poster_path']} />
    })

    return (
      <main className="movie-container">
        {allMovies}
      </main>
    )
  }
}

















export default MovieContainer;