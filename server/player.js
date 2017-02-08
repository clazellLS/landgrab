'use strict';
class Player{

    constructor(x, y, id, io){
        this.id = id;
        this.x  = x;
        this.y  = y;
        this.io = io;
        this.playerAttributes ={
            actionPoints: 100,
            color: 0xfff000,
            resources: 100,
            name:'Red',
            playerPos : {
                id  : this.id,
                x   : this.x,
                y   : this.y
            }
        }
    }

    move(direction){

        switch(direction) {
            case 'up':
                this.y+=25;
                break;
            case 'down':
                this.y-=25;
                break;
            case 'left':
                this.x-=25;
                break;
            case 'right':
                this.x+=25;
                break;
        }
        this.playerAttributes.playerPos = {
            id  : this.id,
            x   : this.x,
            y   : this.y
        };
    }

}


module.exports = Player;