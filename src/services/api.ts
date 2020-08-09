import axios from 'axios';

const api = axios.create({
    baseURL: 'http://18.17.100.56:3333'
})

export default api;