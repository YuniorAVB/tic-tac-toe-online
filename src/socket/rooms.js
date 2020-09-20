const LIMIT_ROOMS = 10;

const rooms = new Set();

const createRooms = function() {
	let roomFree = 0;
	for (let index = 0; index < LIMIT_ROOMS; index++) {
		if (!rooms.has(index)) {
			rooms.add(index);
			roomFree = index;
			break;
		}
	}

	return roomFree;
};

const deleteRooms = function(room) {
    rooms.delete(room)
};

module.exports = { rooms, createRooms, deleteRooms };
