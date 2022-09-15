import axios from 'axios';

export const movieApi = axios.create({
  baseURL: 'http://www.omdbapi.com/'
});

export const apiKey = '87db9a8e';