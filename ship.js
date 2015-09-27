var wasd;
var cursors;
function Ship(game){
	//this.game = game;
	//this.sprite = game.load.image('ship', 'ship.png');
}

Ship.prototype.create = function(){
	cursors = game.input.keyboard.createCursorKeys();
	wasd = {
       up: game.input.keyboard.addKey(Phaser.Keyboard.W),
       down: game.input.keyboard.addKey(Phaser.Keyboard.S),
       left: game.input.keyboard.addKey(Phaser.Keyboard.A),
       right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    };
	game.load.image('ship', 'ship.png');
	this = game.add.sprite(50,50, 'ship');
	ship.anchor.setTo(0.5, 0.5);
}

Ship.prototype.update = function(){
    var mX = game.input.mousePointer.x;
    var mY = game.input.mousePointer.y;
    /* look at the mouse */
    this.angle = Math.atan2(this.position.x - mX, this.position.y - mY)  * -57.2957795;

    if (wasd.up.isDown) {
        this.y -= 3;
    }
    if (wasd.down.isDown) {
        this.y += 3;
    }
    if (wasd.left.isDown) {
        this.x -= 3;
    }
    if (wasd.right.isDown) {
        this.x += 3;
    }
}