import axios from 'axios'

export const indexMovies = title => {
    return axios({
      url:`http://www.omdbapi.com/?s=${title}&apikey=80b82488`,
      method: 'GET'
    })
  }