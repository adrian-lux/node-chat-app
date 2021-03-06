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
        from: "Admin",
        text: "Welcome to the Chat",
        time: new Date().getTime()
    })
    socket.broadcast.emit('newMessage',
        {from: "Admin",
        text: "New User Joined",
        time: new Date().getTime()
    })

    socket.on('createMessage', (message) => {
        console.log("A new Email was Delivered", message);
    
       io.emit('newMessage',{
                from: message.from,
                text: message.text,
                createdAt: new Date().getTime()   
            }); 

          /*   socket.broadcast.emit('newMessage',{
                from: message.from,
                text: message.text,
                createdAt: new Date().getTime()
            });  */   

        });

    socket.on('disconnect', () =>{
        console.log('User disconnected');
    });
    
});

server.listen(port, () => {
    console.log(`Server Up on Port ${port}`)
});

module.exports = {server};


