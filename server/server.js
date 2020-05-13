const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io'); 

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000
var app =express();
var Server = http.createServer(app);
var io = socketIO(Server);


app.use(express.static(publicPath));

io.on('connect', (socket) => {
    console.log('New user is connected');

    socket.on('disconnect', () => {
    console.log('User was disconnected');
    });
})

Server.listen(port, () => {
    console.log(`Server is up on ${port}`); 
});
