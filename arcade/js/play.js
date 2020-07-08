
MyGame.playGame = function () {
    // global variables

};
MyGame.playGame.prototype = {
    create: function () {
        this.add.image(0, 0, 'wall');
        this.jumpSound = this.add.audio('jump');
        this.coinSound = this.add.audio('coin');
        this.deadSound = this.add.audio('dead');
        this.music = this.add.audio('bgmusic'); // Add the music
        this.music.loop = true; // Make it 
        this.music.volume = 0.2;
        this.music.play(); // Start the music


        this.map = this.add.tilemap('map');
// Add the tileset to the map
        this.map.addTilesetImage('title');
// Create the layer, by specifying the name of the Tiled layer
        this.layer = this.map.createLayer('Tile Layer 1');
// Set the world size to match the size of the layer
        this.layer.resizeWorld();
        this.map.setCollision([1, 2]);
        this.layer.wrap = true;
        this.tourch = this.add.group();
        for (var i = 0; i < 3; i++) {
            this.tourch.create(235 + (i * 250), 220, 'fire', 0);
        }
        //  Here is the important part. Group.callAll will call a method that exists on every child in the Group.
        //  In this case we're saying: child.animations.add('swim', frameNames, 30, true, false)
        //  The second parameter ('animations') is really important and is the context in which the method is called.
        //  For animations the context is the Phaser.AnimationManager, which is linked to the child.animations property.
        //  Everything after the 2nd parameter is just the usual values you'd pass to the animations.add method.
        //array is number of frames, after that speed
        this.tourch.callAll('animations.add', 'animations', 'burn', [0, 1, 2, 3], 5, true);
        this.tourch.callAll('play', null, 'burn');
        this.cursor = this.input.keyboard.createCursorKeys();
        this.player = this.add.sprite(this.world.centerX, this.world.centerY, 'player');
        this.player.anchor.setTo(0.5, 0.5);

// Create animation by looping the frames 
        this.player.animations.add('left', [0, 1, 2], 15, true);
        this.player.animations.add('right', [3, 4, 5], 15, true);
        this.physics.arcade.enable(this.player);
        this.player.body.gravity.y = 500;
        this.enemies = this.add.group();
        this.enemies.enableBody = true;



        this.enemies.createMultiple(10, 'enemy');
        this.coin = this.add.sprite(60, 240, 'coin');
        this.player.anchor.setTo(0, 0);
        this.physics.arcade.enable(this.coin);
        this.coin.anchor.setTo(0, 0);
        this.scoreLabel = this.add.text(40, 40, 'score: 0', {font: '18px Arial', fill: '#ffffff'});
        this.time.events.loop(2200, this.addEnemy, this);

    },
    update: function () {
        this.physics.arcade.collide(this.player, this.layer);
        this.physics.arcade.collide(this.enemies, this.layer);
        this.physics.arcade.overlap(this.player, this.coin, this.takeCoin, null, this);
        this.physics.arcade.overlap(this.player, this.enemies, this.playerDie, null, this);
        this.movePlayer();
        if (!this.player.inWorld) {
            this.playerDie();
        }

        // this.enemies.forEachAlive(this.setRotation, this);
    },
    movePlayer: function () {
        if (this.cursor.left.isDown) {
            this.player.body.velocity.x = -200;
            this.player.animations.play('left');
        }
        else if (this.cursor.right.isDown) {
            this.player.body.velocity.x = 200;
            this.player.animations.play('right');
        }
        else {
            this.player.body.velocity.x = 0;
            this.player.animations.stop(); // Stop the animation
            this.player.animations.paused = true;
        }
        if (this.cursor.up.isDown && this.player.body.onFloor()) {
            this.player.body.velocity.y = -370;
            // Add this inside the 'movePlayer' function, in the 'if(player jumps)'
            this.jumpSound.play();
        }
    },
// No changes
    takeCoin: function (player, coin) {
// New score variable

        score += 5;
        this.scoreLabel.text = 'score: ' + score;
        this.updateCoinPosition();
        // Put this in the 'takeCoin' function
        this.coinSound.play();
    },
// No changes
    playerDie: function () {
// When the player dies, we go to the menu

        // And this in the 'playerDie' function
        this.deadSound.play();
        this.music.stop();
        this.state.start('startscreen');
    },
    updateCoinPosition: function () {
        var coinPosition = [
            {x: 60, y: 240}, {x: 900, y: 240},
            {x: 300, y: 360}, {x: 680, y: 360},
            {x: 140, y: 520}, {x: 800, y: 520}
        ];
        for (var i = 0; i < coinPosition.length; i++) {
            if (coinPosition[i].x === this.coin.x) {
                coinPosition.splice(i, 1);
            }
        }
        var newPosition = coinPosition[this.rnd.integerInRange(0,
                coinPosition.length - 1)];
        this.coin.reset(newPosition.x, newPosition.y);
    },
    addEnemy: function () {
        var enemy = this.enemies.getFirstDead();
        if (!enemy) {
            return;
        }
        enemy.anchor.setTo(0.5, 0.5);

        var direction = Phaser.Utils.randomChoice(-1, 1);
        if (direction == 1) {
            this.add.tween(enemy).to({angle: 360}, 2500, Phaser.Easing.linear).loop().start();
        } else {
            this.add.tween(enemy).to({angle: -360}, 2500, Phaser.Easing.linear).loop().start();
        }
        enemy.reset(this.world.centerX, 0);
        enemy.body.gravity.y = 500;
        enemy.body.velocity.x = 150 * direction;
        enemy.body.bounce.x = 1;
        enemy.body.bounce.y = 0.3;
//        this.physics.p2.enable(enemy); // for consideration
//        enemy.body.setCircle(13);
        enemy.checkWorldBounds = true;
        enemy.outOfBoundsKill = true;
    }
}