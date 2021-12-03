import React, { Component } from 'react'
import movieData from '../movieData'
import Movie from './Movie'
import ClickedMovie from './ClickedMovie'
import '../scss/MovieContainer.scss'
import fetchData from '../apiCalls'

class MovieContainer extends Component {
  constructor() {
    super()
    this.state = {
      movieData: '',
      clickedMovie: '',
      isLoaded: false,
      networkErr: ''
    }
  }

  componentDidMount = () => {
    fetchData('movies')
      .then(data => this.setState({
        movieData: data.movies,
        isLoaded: true
      }))
      .catch(error => this.setState({
        networkErr: error
      }))
  }

  handleClick = (event) => {
    const clickedMovie = this.state.movieData.movies.find(movie => movie['poster_path'] === event.target.src)
    this.setState({
      clickedMovie: clickedMovie
    })
  }

  handleError = () => {
    if (this.state.networkErr.message === '500') {
      return <h1>A server error occured, super bummer :/ Try again later</h1>
    }
    else {
      return <h1>An unkwown error occured, can\'t help ya🤷‍♀️</h1>
    }
  }

  render() {

    const allMovies = !this.state.isLoaded ? <h1>Loading...</h1> : this.state.movieData.map(movie => {
      return <Movie key={movie.id} poster={movie['poster_path']} handleClick={this.handleClick} />
    })

    return (
      <main className="movie-container">
        {this.state.networkErr ? this.handleError() :
          !this.state.clickedMovie ? allMovies : <ClickedMovie clicked={this.state.clickedMovie} handleClick={this.handleClick} />}
      </main>
    )
  }
}

















export default MovieContainer;