const axios = require('axios');
const adafruit_url = require('../config/adafruit.config')

const index = (req,res)=>{
    axios.get(adafruit_url).
    then(response => {
        res.json(response.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

module.exports = {
    index
}