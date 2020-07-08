
MyGame.preload = function () {
};
MyGame.preload.prototype = {
    // preload assets for game
    preload: function () {
        this.load.path = 'assets/';
        this.add.image(0, 0, 'background');
//        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'progressBar');
//        this.preloadBar.anchor.setTo(0.5, 0.5);
//        this.load.setPreloadSprite(this.preloadBar);
        var empty = this.add.image(0, 0, "");
        var full = this.add.image(0, 0, "progressBar");
        full.anchor.set(0, 0.5);

        empty.x = game.width / 2 - empty.width / 2;
        empty.y = game.height / 2 - empty.height / 2;

        full.x = game.width / 2 - full.width / 2;
        full.y = empty.y;
        this.load.setPreloadSprite(full);

        this.load.image('wall', 'wall.jpg');
        this.lives = this.load.image('lives', 'live.png');
        this.load.spritesheet('player', 'player.png', 40, 40, 6, 0, 0);
        this.load.image('enemy', 'enemy.png');
        this.load.image('coin', 'coin.png');
        this.load.tilemap('level1', 'level1.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.tilemap('level2', 'level2.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.tilemap('level3', 'level3.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.tilemap('level4', 'level4.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.tilemap('level5', 'level5.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.tilemap('level6', 'level6.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.text('levelobjects', 'objects.json');
        this.load.image('title', 'title.png');
        this.load.spritesheet('mute', 'mute.png', 28, 22);
        this.load.spritesheet('fire', 'flame.png', 32, 75, 4);
        this.load.spritesheet('spider', 'spider.png', 35, 40, 3);
// Sound when the player jumps
        this.load.audio('jump', ['jump.ogg', 'jump.mp3']);
        this.load.audio('levelup', ['levelup.ogg', 'levelup.mp3']);

// Sound when the player takes a coin
        this.load.audio('coin', ['coin.ogg', 'coin.mp3']);
// Sound when the player dies
        this.load.audio('dead', ['dead.ogg', 'dead.mp3']);
//background music       
        // this.load.audio('bgmusic', ['bg.mp3']);
    },
    create: function () {
        this.stage.backgroundColor = 'rgba(0,0,0,0)';
        this.state.start('startscreen');
    }
};

