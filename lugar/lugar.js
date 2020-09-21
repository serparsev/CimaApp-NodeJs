const axios = require('axios');

const getLugarLatLon = async(direccion) => {

    const encodedUrl = encodeURI(direccion)

    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&units=metric&APPID=027aa57d12441a71256b6941220a9490`

    });

    const resp = await instance.get();

    const dir = resp.data.name;
    const lat = resp.data.coord.lat;
    const lon = resp.data.coord.lon;
    const temp = resp.data.main.temp

    // console.log(resp);

    return {
        dir,
        lat,
        lon,
        temp
    }
}

module.exports = {

    getLugarLatLon

}