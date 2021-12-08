import React, { Component } from 'react'
import Movie from './Movie'
import ClickedMovie from './ClickedMovie'
import '../scss/MovieContainer.scss'
import fetchData from '../apiCalls'
import { Route, Routes } from 'react-router-dom';

class MovieContainer extends Component {
  constructor() {
    super()
    this.state = {
      movieData: null,
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
    const clickedMovie = this.state.movieData.find(movie => movie['poster_path'] === event.target.src)
    this.setState({
      clickedMovie: clickedMovie
    })
  }

  handleError = () => {
    if (this.state.networkErr.message === '500') {
      return <h1>A server error occured, super bummer :/ Try again later</h1>
    }
    else {
      return <h1>An unknown error occured, can\'t help ya🤷‍♀️</h1>
    }
  }

  render() {
    const allMovies = !this.state.isLoaded ? <h1>Loading...</h1> : this.state.movieData.map(movie => {
      return <Movie key={movie.id} poster={movie['poster_path']} handleClick={this.handleClick} />
    })

    return (
      <main className="movie-container">
        <Routes>
          <Route path='/' element={allMovies} />
          <Route path='/movies/694919' element={<ClickedMovie clickedId='694919'/>} />
        </Routes>
        {/* {this.state.networkErr ? this.handleError() :
          !this.state.clickedMovie ? allMovies : <ClickedMovie clickedId={this.state.clickedMovie.id} handleClick={this.handleClick} handleError={this.handleError} />} */}
      </main>
    )
  }
}

















export default MovieContainer;