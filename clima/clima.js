const axios = require('axios');
const key = '797b76375bf31001a66b45aa4a8e03d8';
const units = 'metric';

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=${ key }&units=${ units }`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
};