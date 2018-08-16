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

    socket.emit('newMessage', {
        from: 'mike@example.com',
        text: 'Hey whats up?',
        createdAt: 123
    });

    socket.on('createMessage', (message) => {
        console.log("A new Email was Delivered", message);
    });

    socket.on('disconnect', () =>{
        console.log('User disconnected');
    });
    
});

server.listen(port, () => {
    console.log(`Server Up on Port ${port}`)
});

module.exports = {server};


