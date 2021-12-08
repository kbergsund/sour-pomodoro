import React from 'react'
import '../scss/ClickedMovie.scss'
import fetchData from '../apiCalls'
import { Link } from 'react-router-dom'

// create new functional component that then generates ClickedMovie
//  class will be child of function
// pass props into new wrapper component that then get passed to ClickedMovie

// useParams magic:  function component to intercepts the useParams and passes the ID value as a prop to its child class component.

// function ClickedMovieWrapper(props) ..... {
//   <ClickedMovie props=
// }
// }

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
  }

  render() {  
    const displayCurrentMovie = !this.state.isLoaded ? <h1>Loading...</h1> :
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
        {this.state.clickedMovieNetworkErr ? this.props.handleError() : displayCurrentMovie}
      </article>
    )
  }
}

export default ClickedMovie;