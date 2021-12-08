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
      return <h1>A server error occured, super bummer. 😕 Try again later.</h1>
    }
    else {
      return <h1>An unknown error occured, can't help ya there 🤷‍♀️</h1>
    }
  }

  render() {
    const allMovies = this.state.networkErr ? this.handleError() :
    !this.state.isLoaded ? <h1>Loading...</h1> : this.state.movieData.map(movie => {
      return <Movie key={movie.id} id={movie.id} poster={movie['poster_path']}/>
    })

    return (
      <main className="movie-container">
        <Routes>
          <Route path='/:invalidURL' element={<p>Uhh, u lost? 404 - Invalid URL</p>} />
          <Route path='/' element={allMovies} />
          <Route path='/movies/:id' element={<ClickedMovieWrapper handleError={this.handleError}/>} />
        </Routes>
      </main>
    )
  }
}

















export default MovieContainer;