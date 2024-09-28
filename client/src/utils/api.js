
// import axios from 'axios';

// export const customAxios = axios.create({
//     baseURL: 'http://localhost:3000/api',
// });

// export default customAxios;
// export { axios };

















// src/utils/api.ts

import axios from 'axios';

// Create an axios instance with a custom base URL for API requests
export const customAxios = axios.create({
    // baseURL: 'http://localhost:3000/api',  // The base URL for all API calls
    baseURL: 'https://fullstuck-project.onrender.com/api',
});

// Export the custom axios instance as default and axios itself for potential use elsewhere
export default customAxios;
export { axios };

