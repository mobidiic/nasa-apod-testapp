import axios from 'axios'

export function getAPOD(date=''){
  return axios.get(`https://api.nasa.gov/planetary/apod?api_key=7JCVncdO0sA4LW8vEJPzuByoTJgMzzndR0EZqZPY&date=${date}`)
}
