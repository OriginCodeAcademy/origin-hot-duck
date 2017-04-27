# Origin Hot Duck

`This assignment is a work in progress`

In this group exercise, we have provided:

- A web server running [`socket.io`](https://www.socket.io).
- A set of events that will be broadcast by the server.
- A set of events that you can broadcast to the server.
- Starter files for an Angular client capable of broadcasting/receiving events.

The goal of this assignment is to implement each one of these events in the provided starter kit 

## Events from server you need to handle

- [`round-started`](#round-started)
- [`round-finished`](#round-finished)
- [`player-joined`](#player-joined)
- [`player-left`](#player-left)
- [`duck-passed`](#duck-passed)
- [`your-turn`](#your-turn)

## Events you need to send to the server

- [`join`](#join-room)
- [`leave`](#leave-room)
- [`pass-duck`](#pass-duck)

----

### `round-started`
The server will broadcast this event to all players when a new round begins. You will receive the following data:

```js
{ 
    round: 3,   
    started: '2017-04-27T12:14:44' 
    duration: 60
}
```

### `player-joined`
The server will broadcast this event to all players when a new player joins. You will receive the following data:

```js
{
    name: 'cameronwilby',
    joined: '2017-04-27T12:14:44'
}
```

### `player-left`
The server will broadcast this event to all players when a player leaves. You will receive the following data:

```js
{
    name: 'cameronwilby',
    left: '2017-04-27T12:15:11'
}
```

### `round-finished`
The server will broadcast this event to all players when a round has finished. You will receive the following data:

```js
{
    round: 3,   
    started: '2017-04-27T12:14:44' 
    duration: 60
}
```

### `duck-passed`
The server will broadcast this event to all players whenever the duck is passed. You will receive the following data:

```js
{
    timestamp: '2017-04-27T12:15:11',
    previous: 'cameronwilby',
    next: 'johnsmith',
    remainingTime: 32
}
```

### `your-turn`
The server will broadcast this event to a player when it is their turn. You will receive the following data:

```js
{
    timestamp: '2017-04-27T12:15:11',
    remainingTime: 31
}
```



---

### `join`
When the player clicks the "Join" button, your code should fire this event to the server along with the following data:

```js
{
    name: 'cameronwilby'
}
```

### `pass-duck`
When the player clicks the "Pass Duck" button (which should only be visible when it is the players turn), your code should fire this event to the server. You do not need to send any data for this event, the server will be able to identify you automatically.

### `leave`
When the player clicks the "Leave" button (Which should only be visible if the user has joined a game), your code should fire this event to the server. You do not need to send any data for this event, the server will be able to identify you automatically.