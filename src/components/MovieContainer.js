import React, { Component } from 'react'
import movieData from '../movieData'
import Movie from './Movie'
import ClickedMovie from './ClickedMovie'
import '../scss/MovieContainer.scss'

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
        {!this.state.clickedMovie ? allMovies : <ClickedMovie clicked={this.state.clickedMovie} handleClick={this.handleClick}/>}
      </main>
    )
  }
}

















export default MovieContainer;