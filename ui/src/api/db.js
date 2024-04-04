import axios from 'axios';

const url = 'http://localhost:3001/api/';




const db = axios.create({
    baseURL: url,
    Headers: {
        'Content-Type': 'aplication/json',
    }
});



// Add a request interceptor
db.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
db.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });




export default db;