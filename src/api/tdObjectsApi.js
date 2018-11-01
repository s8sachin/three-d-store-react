import axios from 'axios';

const { API_URL } = process.env;

export const getTdObjects = params => axios({
  method: 'get',
  url: `${API_URL}/tdObjects?skip=${params.skip}&limit=${params.limit}`,
});
