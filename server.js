const express = require('express')
const app = express();
const path = require('path')
const getWeatherRoute = require('./routes/api/getWeather')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/weather/', getWeatherRoute)

app.use('/',express.static(path.join(__dirname ,'public')))


app.listen(4000, ()=> {
    console.log("Server Running at http://localhost:4000")
})