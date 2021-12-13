const fetchData = (url) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${url}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(response.status)
      }
    })
}

export default fetchData