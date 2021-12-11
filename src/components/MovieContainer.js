import React, { Component } from 'react'
import Movie from './Movie'
import ClickedMovieWrapper from './ClickedMovieWrapper'
import '../scss/MovieContainer.scss'
import fetchData from '../apiCalls'
import { Link, Route, Routes } from 'react-router-dom';
import { FulfillingBouncingCircleSpinner } from 'react-epic-spinners'
import ErrorPage from "./ErrorPage";

class MovieContainer extends Component {
  constructor() {
    super()
    this.state = {
      movieData: [],
      isLoaded: false,
      networkErr: ''
    }
  }

  componentDidMount = () => {
    fetchData('movies')
      .then(data => setTimeout(() => {
        this.setState({
        movieData: data.movies,
        isLoaded: true
        })
      }, 1000))
      .catch(error => {
        console.log(error)
        this.setState({
          networkErr: error
        })
      })
  }

  handleError = (error) => {
    if (error.message === '500') {
      return <h2>A server error occured, super bummer. 😕 Try again later.</h2>
    }
    else if (error.message === '404') {
      return <>
      <ErrorPage />
      </>
    } else {
      return <h2>An unknown error occured, can't help ya there 🤷‍♀️</h2>
    }
  }

  render() {
    const allMovies = this.state.networkErr ? this.handleError(this.state.networkErr) :
      !this.state.isLoaded ?
      <div className="loading">
        <p>Loading...beep boop...uh...beep
          <FulfillingBouncingCircleSpinner 
            className="loading-spinner"
            color="#942700"
          />
        </p>
      </div>
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