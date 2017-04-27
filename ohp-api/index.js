// Create express app
const express = require('express');
const app = express();

// Create joint http server that will house both express and socket.io
const http = require('http');
const server = http.Server(app); // bind express to http server
const io = require('socket.io')(server) // bind socket.io to http server

// Data structure for rooms
const maxPlayersPerRoom = 8;
const rooms = [{
    id: 1,
    players: []
}];

// Handle new connections
io.on('connection', socket => {
    socket.on('join-game', function({ username }) {
        const mostRecentRoom = rooms[rooms.length - 1];

        if(mostRecentRoom.players.length == 8) {
            mostRecentRoom = {
                id: rooms.length + 1,
                players: []
            };
            rooms.push(mostRecentRoom);
        }

        mostRecentRoom.players.push({
            id: socket.id,
            username: username
        });

        socket.join(`room ${mostRecentRoom.id}`, function() {
            io.to(`room ${mostRecentRoom.id}`, function() {
                
            });
        })
    });
    socket.on('leave-game', function() {

    });
    socket.on('pass-potato', function() {

    });
});

// Implement the events
function passPotato(socket) {
    return function() {
        // tell the current player their turn is over
        socket.emit('your-turn-over');

        // tell the next player that it's their turn
        var nextPlayer = currentPlayer === players.length - 1
                    ? 0
                    : currentPlayer + 1;

        players[nextPlayer].broadcast.emit('potato-passed');
        players[nextPlayer].emit('your-turn-over');
    }
}

function handleUserLeft(socket) {
    return function() {

    }
}

function handleUserJoined(socket) {
    return function() {

    }
}