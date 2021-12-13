import React, { Component } from 'react'
import Movie from './Movie'
import ClickedMovieWrapper from './ClickedMovieWrapper'
import '../scss/MovieContainer.scss'
import fetchData from '../apiCalls'
import { Route, Routes } from 'react-router-dom';
import { FulfillingBouncingCircleSpinner } from 'react-epic-spinners'
import ErrorPage from "./ErrorPage";
import Sort from './Sort'


class MovieContainer extends Component {
  constructor() {
    super()
    this.state = {
      movieData: null,
      networkErr: ''
    }
  }

  componentDidMount = () => {
    fetchData('movies')
      .then(data => setTimeout(() => {
        this.setState({
          movieData: data.movies,
        })
      }, 500))
      .catch(error => {
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
    if (this.state.movieData) {
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
  }

  render() {
    const allMovies = this.state.networkErr ? this.handleError(this.state.networkErr) :
      !this.state.movieData ?
        <div className="loading">
          <p>Loading...beep boop...uh...beep</p>
          <FulfillingBouncingCircleSpinner color="#942700" />
        </div>
        : this.state.movieData.map(movie => {
          return <Movie key={movie.id} id={movie.id} poster={movie['poster_path']} rating={movie['average_rating']} />
        })

    return (
      <main className="movie-container">
        <Sort className="sort-container" error={this.state.networkErr}
          sortMovies={this.sortMovies} />
        <div className="movie-grid">
          <Routes>
            <Route path='/:invalidURL' element={<ErrorPage />} />
            <Route path='/' element={allMovies} />
            <Route path='/movies/:id' element={<ClickedMovieWrapper handleError={this.handleError} />} />
          </Routes>
        </div>
      </main>
    )
  }
}

















export default MovieContainer;