const express = require('express')
const app = express();
const path = require('path')
const getWeatherRoute = require('./routes/api/getWeather')
const port = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/weather/', getWeatherRoute)

app.use('/',express.static(path.join(__dirname ,'public')))


app.listen(port, ()=> {
    console.log("Server Running at port : " + port)
})