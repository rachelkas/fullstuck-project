
import axios from 'axios';

export const customAxios = axios.create({
    baseURL: 'http://localhost:3000/api',
});

export default customAxios;
export { axios };



