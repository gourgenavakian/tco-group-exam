import axios from 'axios';

const api = axios.create({
  baseURL: 'https://newreact.user.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = 'Token 1KAQWYTnKi1ly33AH7a2BoY1IaeOOWUb60oSmbiV1hGISGa5gOwV01K1R0x73owW'
  return config;
}, (error => {
  return Promise.reject(error);
}));


class Api {

  static getUsers() {
    return api.get('/api/public/users/')
  }

  static createUser(data) {
    return api.post('/api/public/users/', data)
  }
    static getWikiData(search) {
        return axios.get(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${search}`)
    }
}
export default Api;