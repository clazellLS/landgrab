'use strict'

class WorldManager{

    constructor(io){
    // the world grid: a 2d array of tiles
    this.world = [[]];

    // size in the world in sprite tiles
    this.worldWidth = 50;
    this.worldHeight = 50;
    
    }

    createWorld(){
        console.log('creating worlds')
        for (var x = 0; x < this.worldWidth; x++) {
            this.world[x] = [];
            for (var y = 0; y < this.worldHeight; y++) {
                this.world[x][y] = 0;
            }
        }

        for (var x = 0; x < this.worldWidth; x++) {
            for (var y = 0; y < this.worldHeight; y++) {
                if (Math.random() > 0.75)
                    this.world[x][y] = 1;
            }
        }
        this.world[0][1] = this.worldWidth;
        this.world[0][0] =  this.worldHeight;
    }

    sendWorld(socket){
        socket.emit('world created', this.world)
    }

    updateWorld(socket){
        socket.emit('world updated', this.world)
    }
}

module.exports = WorldManager;