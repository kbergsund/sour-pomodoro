import React, { Component } from 'react'
import Movie from './Movie'
import ClickedMovieWrapper from './ClickedMovieWrapper'
import '../scss/MovieContainer.scss'
import fetchData from '../apiCalls'
import { Route, Routes } from 'react-router-dom';
import { FulfillingBouncingCircleSpinner } from 'react-epic-spinners'
import { Fragment } from 'react/cjs/react.production.min'

class MovieContainer extends Component {
  constructor() {
    super()
    this.state = {
      movieData: null,
      isLoaded: false,
      networkErr: ''
    }
  }

  componentDidMount = () => {
    fetchData('movies')
      .then(data => this.setState({
        movieData: data.movies,
        isLoaded: false
      }))
      .catch(error => {
        console.log(error)
        this.setState({
          networkErr: error
        })
      })
  }

  handleError = (error) => {
    if (error.message === '500') {
      return <h1>A server error occured, super bummer. 😕 Try again later.</h1>
    }
    else if (error.message === '404') {
      //add button that links to home?
      return <p>Uhh, u lost? 404 - Invalid URL</p>
    } else {
      return <h1>An unknown error occured, can't help ya there 🤷‍♀️</h1>
    }
  }

  render() {
    const allMovies = this.state.networkErr ? this.handleError(this.state.networkErr) :
      !this.state.isLoaded ?
        <FulfillingBouncingCircleSpinner
          className="loading-spinner"
          color="#942700"
          size="300"
          background-color="white"
        />
        : this.state.movieData.map(movie => {
          return <Movie key={movie.id} id={movie.id} poster={movie['poster_path']} />
        })

    return (
      <main className="movie-container">
        <Routes>
          <Route path='/:invalidURL' element={<p>Uhh, u lost? 404 - Invalid URL</p>} />
          <Route path='/' element={allMovies} />
          <Route path='/movies/:id' element={<ClickedMovieWrapper handleError={this.handleError} />} />
        </Routes>
      </main>
    )
  }
}

















export default MovieContainer;