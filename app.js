const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const getInfo = async(direcion) => {
    try {
        let coords = await lugar.getLugarlatLng(direcion);
        let temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${ coords.nombre } es ${ temp }.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion }.`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);