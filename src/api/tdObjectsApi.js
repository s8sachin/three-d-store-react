import axios from 'axios';

const { API_URL } = process.env;

export const getTdObjects = (params) =>
  // const queryParams = params || {};
   axios({
    method: 'get',
    url: `${API_URL}/tdObjects`,
  })
;
