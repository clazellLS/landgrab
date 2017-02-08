var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require('socket.io')(http);
var GameManager = require('./server/gameManager.js');
var WorldManager = require('./server/worldManager.js');

http.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/js/three.min.js", function (req, res) {
    res.sendFile(__dirname + "/public/js/three.min.js");
});

let GM = new GameManager();
let WM = new WorldManager();

WM.createWorld();
io.on('connection', function (socket) {
    // gm.start(socket);
    socket.on('world created', function (world) {

    });
    socket.on('render', function () {
       // gm.start();
    });
    socket.on('add player', function (x, y) {
        GM.checkIfPlayerExists(socket.id)
        GM.addPlayer(x, y, socket.id, socket);
        GM.returnPlayerList();
        WM.sendWorld(socket);
    });
    socket.on('move player', function (key) {
        GM.movePlayer(key, socket.id, socket);
    });

});