const express = require('express')
const app = express();

app.get('/', (req, res, next) => {
    res.send("Hello World")
})

app.listen(4000, ()=> {
    console.log("Server Running at http://localhost:4000")
})