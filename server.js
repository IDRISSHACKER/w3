require("dotenv").config()
const Express = require("express");

const APP_NAME      = "W3"
const RESPONSE_TYPE = "text/html"
const HELLO_MESSAGE = `<h1>Bienvenue sur ${APP_NAME} ==> ${process.env.AUTHOR} </h1>`
const SERVER_PORT   = 3000
const STATUS_ERROR  = 404
const STATUS_SUCCESS= 200

var app = Express()

app.get("/", (_request, response)=>{
    response.setHeader("Content-Type", RESPONSE_TYPE)
    response.status(200)
    response.send(HELLO_MESSAGE)
})


app.listen(SERVER_PORT, ()=>{
    console.log(`serveur demarré sur le port ${SERVER_PORT}`)
})