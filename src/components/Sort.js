import React from 'react'
import { useLocation} from 'react-router-dom'


const Sort = ({ sortMovies }) => {
  const location = useLocation()
  console.log(location)
  if(location.pathname == '/'){
  return (
    <span className="sort-container">
      <select onChange={(e) => sortMovies(e.target.value)}>
        <option hidden>Sort By</option>
        <option value="title">A-Z</option>
        <option value="title2">Z-A</option>
        <option value="average_rating">Rating: Sour-Sweet</option>
        <option value="average_rating2">Rating: Sweet-Sour</option>
        <option value="release_date">Old-New</option>
        <option value="release_date2">New-Old</option>
      </select>
    </span>
  ) } else {
    return (
      null
    )
  }
}

export default Sort;
    // <select onChange={(e) => sortMovies(e.target.value)}>