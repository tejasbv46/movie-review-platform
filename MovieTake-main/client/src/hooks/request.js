import axios from 'axios'

// Use localhost while running backend locally
const API_URL = 'http://localhost:3001'

// Get OMDB API key from backend
const httpGetKey = async () => {
  const keyResponse = await fetch(API_URL + '/keys/omdb')
  const fetchedKey = await keyResponse.json()
  return fetchedKey.key
}

// Get movie info from OMDB
const httpGetMovieInfo = async (id) => {
  const key = await httpGetKey()
  const response = await fetch(`http://www.omdbapi.com/?apikey=${key}&i=${id}`)
  const fetchedInfo = await response.json()
  return fetchedInfo
}

// Post user’s movie rating to backend
const httpPostMovieRating = async (userID, imdbID, name, poster, rating) => {
  const response = await axios.post(`${API_URL}/auth/${userID}/addmovie`, {
    movieID: imdbID,
    name: name,
    rating: rating,
    poster: poster
  })
  console.log(response.data)
}

// Get all ratings posted by a user
const httpGetMovieRatings = async (userID) => {
  const response = await fetch(`${API_URL}/auth/${userID}/movies`)
  const fetchedMovies = await response.json()
  return fetchedMovies
}

export {
  httpGetMovieInfo,
  httpGetKey,
  httpPostMovieRating,
  httpGetMovieRatings
}
