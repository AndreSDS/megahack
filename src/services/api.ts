import axios from 'axios';

const api = axios.create({
  baseURL: 'https://globofeed-backend.herokuapp.com',
});

export default api;
