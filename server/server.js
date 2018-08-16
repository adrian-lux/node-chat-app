const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public' );
let port = process.eventNames.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);


app.use(express.static(publicPath));  

io.on('connection', (socket) => {
    console.log('New User Connected');

    socket.on('disconnect', () =>{
        console.log('User disconnected');
    })
});

io.on('disconnect', () => {
    
});

server.listen(port, () => {
    console.log(`Server Up on Port ${port}`)
});

module.exports = {server};


