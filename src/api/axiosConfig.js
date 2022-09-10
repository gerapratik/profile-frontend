import axios from 'axios';
require('dotenv').config()

const instance = axios.create({baseURL: 'http://localhost:5000/api'});

export default instance