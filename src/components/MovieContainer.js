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
      error: ''
    }
  }

  componentDidMount = () => {
    fetchData('movi')
    .then(data => this.setState({
      movieData : data.movies,
      isLoaded: true
    }))
    .catch(error =>  {
      this.setState({
      error: error.message,
      isLoaded: false
    })
    console.log(this.state.error)
  })
  }

  handleClick = (event) => {
    const clickedMovie = this.state.movieData.movies.find(movie => movie['poster_path'] === event.target.src)
    this.setState({
      clickedMovie: clickedMovie
    })
  }


  // return (
  //   <h1>ahahaha</h1>
  // )
  render() {
    const allMovies = !this.state.isLoaded ? <h1>Loading...</h1> : this.state.movieData.map(movie => {
      return <Movie key={movie.id} poster={movie['poster_path']} handleClick={this.handleClick} />
    })

    return (
      <main className="movie-container">
        {this.state.error && <h1>An error occurred</h1>}
        {!this.state.clickedMovie ? allMovies : <ClickedMovie clicked={this.state.clickedMovie} handleClick={this.handleClick}/>}
      </main>
    )
  }
}

















export default MovieContainer;