import React, { Component } from 'react'
import movieData from '../movieData'
import Movie from './Movie'
import '../scss/MovieContainer.scss'
import ClickedMovie from './ClickedMovie'

class MovieContainer extends Component {
  constructor() {
    super()
    this.state = {
      movieData: movieData,
      clickedMovie: ''
    }
  }

  handleClick = (event) => {
    const clickedMovie = this.state.movieData.movies.find(movie => movie['poster_path'] === event.target.src)
    this.setState({
      clickedMovie: clickedMovie
    })
  }

  render() {
    const allMovies = this.state.movieData.movies.map(movie => {
      return <Movie key={movie.id} poster={movie['poster_path']} handleClick={this.handleClick} />
    })

    return (
      <main className="movie-container">
        {allMovies}
      </main>
    )
  }
}

















export default MovieContainer;