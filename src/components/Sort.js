const Sort = ({ sortMovies }) => {
  return (
    <select onChange={(e) => sortMovies(e.target.value)}>
      <option hidden>Sort By</option>
      <option value="title">A-Z</option>
      {/* <option value="title">Z-A</option> */}
      <option value="average_rating">Rating: Sour-Sweet</option>
      {/* <option value="Sweet-Sour">Rating: Sweet-Sour</option> */}
      <option value="release_date">Old-New</option>
      {/* <option value="New-Old">New-Old</option> */}
    </select>
  )
}

export default Sort;