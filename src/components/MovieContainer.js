import React, { Component } from 'react'
import movieData from '../movieData'
import Movie from './Movie'

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
      <main>
        {allMovies}
      </main>
    )
  }
}

















export default MovieContainer;