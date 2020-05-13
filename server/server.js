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

    // socket.emit('newEmail', {
    //     from : 'kushal@sm.com',
    //     text : 'sample text data',
    //     createdAt : 123
    // });

     socket.emit('newMessage',{
         from: 'ramesh',
         text:'Set message is socket',
         createdAt:1234
     })
   
    socket.on('createMessage',(message) =>{

        console.log('createMessage',message);

    })

    socket.on('disconnect', () => {
    console.log('User was disconnected');
    });
})

Server.listen(port, () => {
    console.log(`Server is up on ${port}`); 
});
