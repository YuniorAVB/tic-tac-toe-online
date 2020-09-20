const server = require('./server');
const socket = require('socket.io');
const socketMethods = require('./socket/index');
const io = socket.listen(server);

io.on('connection', function(socket) {
	socketMethods(socket, io);
});
