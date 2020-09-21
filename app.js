const argv = require(`yargs`).options({

    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv

const lugar = require(`./lugar/lugar`)

lugar.getLugarLatLon(argv.direccion)
    .then(res => {

        console.log(`El clima de ${argv.direccion} es de ${res.temp}`);
    })
    .catch(err => {
        console.log(`No se encuentra el clima para la ciudad selecionada`);
    })