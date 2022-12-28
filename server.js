//Server
const express = require('express')
const http = require('http');
const app = express()
const port= process.env.PORT || 8080;   //CHANGED FOR CONTAINER
server = http.createServer(app)

app.use(express.json());

app.get('/',(req,res)=>{
    console.log("log from console log");
    res.send("Lets start ");
})

app.get('/showFirstContainer',(req,res)=>{
    console.log("log from console log");
    res.send("Hello my friend :) welcome to github ");
})

app.listen(port)