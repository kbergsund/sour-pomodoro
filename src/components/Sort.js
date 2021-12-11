const Sort = ({ sortMovies }) => {
  return (
    <select onChange={(e) => sortMovies(e.target.value)}>
      <option hidden>Sort By</option>
      <option value="title">A-Z</option>
      <option value="title2">Z-A</option>
      <option value="average_rating">Rating: Sour-Sweet</option>
      <option value="average_rating2">Rating: Sweet-Sour</option>
      <option value="release_date">Old-New</option>
      <option value="release_date2">New-Old</option>
    </select>
  )
}

export default Sort;
    // <select onChange={(e) => sortMovies(e.target.value)}>