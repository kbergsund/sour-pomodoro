import React, { Component } from 'react'
import Movie from './Movie'
import ClickedMovieWrapper from './ClickedMovieWrapper'
import '../scss/MovieContainer.scss'
import fetchData from '../apiCalls'
import { Link, Route, Routes } from 'react-router-dom';
import { FulfillingBouncingCircleSpinner } from 'react-epic-spinners'
import ErrorPage from "./ErrorPage";
import Sort from './Sort'


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

  sortMovies = (sortBy) => {
    if (!sortBy.includes('2')) {
      this.setState({
        movieData: this.state.movieData.sort((a, b) => {
          if (a[sortBy] < b[sortBy]) {
            return -1
          } else if (a[sortBy] > b[sortBy]) {
            return 1
          } else {
            return 0
          } 
        })
      })
    } else {
      const sortType = sortBy.slice(0, sortBy.length - 1)
      this.setState({
        movieData: this.state.movieData.sort((a, b) => {
          if (a[sortType] > b[sortType]) {
            return -1
          } else if (a[sortType] < b[sortType]) {
            return 1
          } else {
            return 0
          } 
        })
      })
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
        <Sort sortMovies={this.sortMovies}/>
        <div className="movie-grid">
          <Routes>
            <Route path='/:invalidURL' element={<p>Uhh, u lost? 404 - Invalid URL</p>} />
            <Route path='/' element={allMovies} />
            <Route path='/movies/:id' element={<ClickedMovieWrapper handleError={this.handleError} />} />
          </Routes>
        </div>
      </main>
    )
  }
}

















export default MovieContainer;