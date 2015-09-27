
var boundsX = 800, boundsY = 600;
var game = new Phaser.Game(boundsX, boundsY, Phaser.AUTO, "game", {preload:preload, update:update, create:create});


var ship = new Ship(game);
function preload () {
    game.load.image('enemy', 'evil.png');
    

}

function create() {
ship.create();

}

function update() {
   
ship.update();
}


