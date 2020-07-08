var MyGame = {
    music: null,
    score: 0,
    level: 1,
    lives: 3,
    space: 60

};
MyGame.boot = function () {

};
MyGame.boot.prototype = {
    // set default parametrs to engine
    init: function () {
        this.input.maxPointers = 2;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.game.renderer.renderSession.roundPixels = true;
        this.physics.startSystem(Phaser.Physics.ARCADE);
    },
    // preload assets for game
    preload: function () {
        this.load.path = 'assets/';
        this.load.image('progressBar', 'progressBar.png');
        this.load.image('background', 'stone-wall.jpg');
    },
    create: function () {
        this.state.start('preload');
    }
};

