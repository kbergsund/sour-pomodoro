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
    return (
      <article className="clicked-movie">
      <button 
        type="button"
        onClick={(event) => this.props.handleClick(event)}>x</button>
      <section className="clicked-image" style={{
        backgroundImage: `url(${this.props.clicked['backdrop_path']}`
      }}>
        <div className="movie-stats">
          <h3>{this.props.clicked.title}</h3>
          <p>Rating: {this.props.clicked['average_rating']}</p>
          <p>Release Year: {this.props.clicked['release_date']}</p>
          <p>Overview: {this.props.clicked.overview}</p>
          <p>Revenue: {this.props.clicked.revenue}</p>
          <p>Budget: {this.props.clicked.budget}</p>
          <p>Runtime: {this.props.clicked.runtime}</p>
          <p>Tagline: {this.props.clicked.tagline}</p>
        </div>
      </section>
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