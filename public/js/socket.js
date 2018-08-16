let socket = io();

socket.on('connect', () => {
    console.log('Connected to Server');

    socket.emit('createMessage', {
        from: 'username',
        text: 'Dummy Text.'
    });
});
socket.on('disconnect',() => {
    console.log('Disconnected from server');
});

socket.on('newMessage', (message) => {
    console.log(message);
});