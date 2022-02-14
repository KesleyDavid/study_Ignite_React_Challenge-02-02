import axios from 'axios';

const api = axios.create({
  baseURL: 'https://kesleydev-db.herokuapp.com',
});

export default api;
