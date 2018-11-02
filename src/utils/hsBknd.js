import Axios from 'axios';

const { NODE_ENV } = process.env;
const API_URL = (NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://threed-store-node.herokuapp.com');

export default () => Axios({ method: 'GET', url: `${API_URL}/` });
