import axios from 'axios';


const username = 'viet_hcmut';
const url = `https://io.adafruit.com/api/v2/${username}/feeds`;




const adafruit = axios.create({
    baseURL: url,
    headers:{
        'Content-Type': 'aplication/json',
        'X-AIO-Key': 'aio_qliQ64LT5XQdvAkPGdSm1Cqo0Xqz',
    }
});



// Add a request interceptor
adafruit.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
adafruit.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });




export default adafruit;