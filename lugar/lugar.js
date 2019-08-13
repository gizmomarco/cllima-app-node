const axios = require('axios');

const getLugarlatLng = async(dir) => {
    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': '2e8fb1f622msh7e898e8c6b30b9fp1a76a5jsn5a6a1e7252e8' }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }
    const data = resp.data.Results[0];
    nombre = data.name;
    lat = data.lat;
    lng = data.lon;

    return {
        nombre,
        lat,
        lng
    }
}

//      


module.exports = {
    getLugarlatLng
}