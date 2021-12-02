import React from 'react'

// accept props to display the correct movie

const ClickedMovie = () => {
  return (
    <article className="clicked-movie">
      <img src="https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg" alt="movie backdrop"></img>
      <h2>Mulan</h2>
      <p>Rating: 5</p>
      <p>Release Year: 2020-09-04</p>
    </article>
  )
}



export default ClickedMovie;

// //    {
//   "id": 337401,
//   "poster_path": "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
//   "backdrop_path": "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
//   "title": "Mulan",
//   "average_rating": 4.909090909090909,
//   "release_date": "2020-09-04"
// }