import React from 'react'
import '../scss/ClickedMovie.scss'
import fetchData from '../apiCalls'
import { Link } from 'react-router-dom'

class ClickedMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      currentMovie: null,
      isLoaded: false,
      clickedMovieNetworkErr: null
    }
  }
  
  componentDidMount = () => {
    fetchData(`movies/${this.props.clickedId}`)
    .then(data => this.setState({
      currentMovie: data.movie,
      isLoaded: true
    }))
    .catch(error => this.setState({
      clickedMovieNetworkErr: error
    }))
    //   {
    //   error.message === '500' && 
    //   this.setState({
    //   clickedMovieNetworkErr: new Error('404')
    // })
    // })
  }
  
  render() {  
    // console.log(this.state.clickedMovieNetworkErr)
    const displayCurrentMovie = this.state.clickedMovieNetworkErr ? this.props.handleError(this.state.clickedMovieNetworkErr) : !this.state.isLoaded ? <h1>Loading...</h1> :
      <section className="clicked-image" style={{
        backgroundImage: `url(${this.state.currentMovie['backdrop_path']}`
      }}>
        <div className="movie-stats">
          <h3>{this.state.currentMovie.title}</h3>
          <p>Rating: {this.state.currentMovie['average_rating']}</p>
          <p>Release Year: {this.state.currentMovie['release_date']}</p>
          <p>Revenue: {this.state.currentMovie.revenue}</p>
          <p>Budget: {this.state.currentMovie.budget}</p>
          <p>Runtime: {this.state.currentMovie.runtime}</p>
          <p>Tagline: {this.state.currentMovie.tagline}</p>
          <p>Overview: {this.state.currentMovie.overview}</p>
        </div>
      </section>

    return (
      <article className="clicked-movie">
        <Link to='/'> 
          <button type="button">x</button>
        </Link>
        {displayCurrentMovie}
      </article>
    )
  }
}

export default ClickedMovie;