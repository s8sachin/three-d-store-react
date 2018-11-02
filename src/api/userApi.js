import axios from 'axios';

const { NODE_ENV } = process.env;
const API_URL = (NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://threed-store-node.herokuapp.com');

export const signUp = params => axios({
  method: 'POST',
  url: `${API_URL}/user/signUp`,
  data: params,
});

export const logIn = params => axios({
  method: 'POST',
  url: `${API_URL}/user/logIn`,
  data: params,
});

export const getProfile = () => axios({
  method: 'GET',
  url: `${API_URL}/user/profile`,
});
