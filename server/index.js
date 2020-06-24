const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

http.listen(3000, () => {
  console.log('listening on *:3000');
});

io.on('connection', socket => {
    socket.emit('chat-messsage', 'Hello World')
})