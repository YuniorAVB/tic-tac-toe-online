const { rooms, createRooms } = require('./rooms');

module.exports = function socketMethods(socket, io) {
	io.emit('rooms', Array.from(rooms));

	socket.on('movementPlayer', function(data) {
		io.to(data.roomGame).emit('movementPlayer', data);
	});

	socket.on('createRoom', function(data) {
		const roomGame = createRooms();
		io.to(socket.id).emit('createRoom', roomGame);
		io.emit('rooms', Array.from(rooms));
		socket.join(roomGame);
	});

	socket.on('joinRoom', function(room) {
		socket.join(room);
	});

	// socket.on('disconnect',function(data){

	// })
};
