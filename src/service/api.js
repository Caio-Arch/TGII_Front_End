import axios from 'axios';

const connection = axios.create({
    baseURL: 'http://localhost:4000',
});
  
export default connection;