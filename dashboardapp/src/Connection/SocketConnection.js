import io from 'socket.io-client';
let socket = io.connect('http://localhost:8080');
socket.emit('clientAuth','uRhj6mv8NjHPqaUYtwergUjnm.');
export default socket;