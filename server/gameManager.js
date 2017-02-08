'use strict';
const Player = require('./player.js');

class GameManager {

    constructor() {
        this.socketList = [];
        this.playerList = [];
        this.fPlayerList = [];
    }

    start(io) {
        // this.socketList.push(io)
    }

    movePlayer(key, id) {
        this.playerList.map((player) => {
            if (player.id == id) {
                player.move(key);
                this.fPlayerList.map((fplayer) => {
                    if (fplayer.id == player.id) {
                        fplayer.x = player.playerPos.x;
                        fplayer.y = player.playerPos.y;
                    }
                })
                this.playerList.map((player) => { player.io.emit('player moved', this.fPlayerList); })
            }
        })
    }

    addPlayer(x, y, id, io) {
        let newPlayer = new Player(x, y, id, io)
        this.playerList.push(newPlayer)
        this.fPlayerList.push(newPlayer.playerAttributes)
    }

    checkIfPlayerExists(id) {
        this.playerList.map((player) => {
            if(player.id == id)
                this.playerList.pop(player)
        })
        this.fPlayerList.map((player) => {
            if(player.id == id)
                this.playerList.pop(player)
        })
    }

    returnPlayerList() {
       this.playerList.map((player) => { player.io.emit('add playerList', this.fPlayerList); })
    }

    removePlayer() {

    }


    increaseScore() {

    }


    decreaseScore() {

    }

    spawnGameObject() {

    }

}

module.exports = GameManager;