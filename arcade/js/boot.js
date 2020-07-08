
var MyGame = {};
MyGame.boot = function () {
    // global variables
    score = 0;
};
MyGame.boot.prototype = {
    // set default parametrs to engine
    init: function () {
        this.input.maxPointers = 2;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        // this.game.renderer.renderSession.roundPixels = true;
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.physics.startSystem(Phaser.Physics.P2JS);    // for consideration

    },
    // preload assets for game
    preload: function () {
        this.load.path = 'assets/';
        this.load.image('progressBar', 'progressBar.png');
        this.load.image('background', 'stone-wall.jpg');
        this.load.image('wall', 'wall.jpg');
        this.load.spritesheet('player', 'player.png', 40, 40);
        this.load.image('enemy', 'enemy.png');
        this.load.image('coin', 'coin.png');
        this.load.tilemap('map', 'level1.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('title', 'title.png');
        this.load.spritesheet('mute', 'mute.png', 28, 22);
        this.load.spritesheet('fire', 'flame.png', 32, 75, 4);
// Sound when the player jumps
        this.load.audio('jump', ['jump.ogg', 'jump.mp3']);
// Sound when the player takes a coin
        this.load.audio('coin', ['coin.ogg', 'coin.mp3']);
// Sound when the player dies
        this.load.audio('dead', ['dead.ogg', 'dead.mp3']);
//background music       
        this.load.audio('bgmusic', ['bg.mp3']);
        //add on different state



    },
    create: function () {
//        var bgmusic = this.add.audio('bgmusic');
//
//        this.sound.setDecodedCallback(
//                [bgmusic],
//                this.start, this
//                );
//       
        this.state.start('startscreen'); 
    },
//    start: function () {
//        this.state.start('startscreen');
//    }
};

