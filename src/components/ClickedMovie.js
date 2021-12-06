import React from 'react'
import '../scss/ClickedMovie.scss'
import fetchData from '../apiCalls'

class ClickedMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      currentMovie: null,
      isLoaded: false
    }
  }

  componentDidMount = () => {
    console.log(this.props.clicked.id)
    fetchData(`movies/${this.props.clicked.id}`)
      .then(data => this.setState({
        currentMovie: data.movie,
        isLoaded: true
      }))
    // needs error handling
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
          <p>Overview: {this.state.currentMovie.overview}</p>
          <p>Revenue: {this.state.currentMovie.revenue}</p>
          <p>Budget: {this.state.currentMovie.budget}</p>
          <p>Runtime: {this.state.currentMovie.runtime}</p>
          <p>Tagline: {this.state.currentMovie.tagline}</p>
        </div>
      </section>

    return (
      <article className="clicked-movie">
        <button
          type="button"
          onClick={(event) => this.props.handleClick(event)}>x</button>
        {displayCurrentMovie}
      </article>
    )
  }
}
// ({ clicked, handleClick }) => {
// refactor to class, add componentdidmount that fetches using id from clicked prop
// setstate to fetched datra
// render the elements using new state of this component


//   return (
//     <article className="clicked-movie">
//       <button 
//         type="button"
//         onClick={(event) => handleClick(event)}>x</button>
//       <section className="clicked-image" style={{
//         backgroundImage: `url(${clicked['backdrop_path']}`
//       }}>
//         <div className="movie-stats">
//           <h3>{clicked.title}</h3>
//           <p>Rating: {clicked['average_rating']}</p>
//           <p>Release Year: {clicked['release_date']}</p>
//           <p>Overview: {clicked.overview}</p>
//           <p>Revenue: {clicked.revenue}</p>
//           <p>Budget: {clicked.budget}</p>
//           <p>Runtime: {clicked.runtime}</p>
//           <p>Tagline: {clicked.tagline}</p>
//         </div>
//       </section>
//     </article>
//   )
// }

export default ClickedMovie;