import React, { Component } from 'react'
import Movie from './Movie'
import ClickedMovieWrapper from './ClickedMovieWrapper'
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
      return <Movie key={movie.id} id={movie.id} poster={movie['poster_path']}/>
    })

    return (
      <main className="movie-container">
        <Routes>
          <Route path='/' element={allMovies} />
          <Route path='/movies/:id' element={<ClickedMovieWrapper />} />
        </Routes>
        {/* {this.state.networkErr ? this.handleError() :
          !this.state.clickedMovie ? allMovies : <ClickedMovie clickedId={this.state.clickedMovie.id} handleClick={this.handleClick} handleError={this.handleError} />} */}
      </main>
    )
  }
}

















export default MovieContainer;