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
    // else if (error.message === '404') {
    //   return <p>Uhh, u lost? 404 - Invalid URL</p>
    // }
    
    // issue: invalid movies/bananas URL throws 500 level error. Even though user is typing in wrong thing
    // above code solves for that but then dev-side fetch error ('moies') throws 404 as well. Is this something we have to solve for, knowing that in production environment this sad path will not happen?
    else {
      return <h1>An unknown error occured, can't help ya there 🤷‍♀️</h1>
    }
  }

  render() {
    const allMovies = this.state.networkErr ? this.handleError(this.state.networkErr) :
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