// https://rancid-tomatillos.herokuapp.com/api/v2
// /movies
// movie_id
// /movie_id.videos

const fetchData = (url) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${url}`)
    .then(response => response.json())
}








export default fetchData



