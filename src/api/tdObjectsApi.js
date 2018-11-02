import axios from 'axios';

const { NODE_ENV } = process.env;
const API_URL = (NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://threed-store-node.herokuapp.com');

export const getTdObjects = params => axios({
  method: 'get',
  url: `${API_URL}/tdObjects?skip=${params.skip}&limit=${params.limit}`,
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
});
