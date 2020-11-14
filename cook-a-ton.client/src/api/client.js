import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3050/api',
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:3050',
  },
});
