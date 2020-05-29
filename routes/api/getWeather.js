const express = require('express')
const route = express.Router()
const https = require('https')

const apiKey = '9e3f60244d7e3361506382fc31bae1ef'

route.get('/city/:c', (req ,res) => {

    let city_name = req.params.c
    console.log("Requested Temp for city : " + city_name)

    const requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apiKey}`

    https.get(requestURL, (resp) => {

        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            res.send(data);
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
        res.send({msg: "Some error"})
    });
})

module.exports = route