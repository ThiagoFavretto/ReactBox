import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nodeboxbackend.herokuapp.com',
});

export default api;