MyGame.playGame = function () {
// global variables
};
var jumpTimer = 0;
MyGame.playGame.prototype = {
    create: function () {
        // this.world.centerY
        this.levelData = JSON.parse(this.cache.getText('levelobjects')); // get json  text from cache
        this.moreSpace = MyGame.space;
        this.cursor = this.input.keyboard.createCursorKeys(); // active default buttons
        // this.add.image(0, 0, 'wall');
        this.jumpSound = this.add.audio('jump');
        this.coinSound = this.add.audio('coin');
        this.deadSound = this.add.audio('dead');
        this.levelup = this.add.audio('levelup');
        switch (MyGame.level) {
            //build level 1
            case 1:
                this.add.tileSprite(0, 0, this.world.width, this.world.height, 'wall');
                this.map = this.add.tilemap('level1');
                // Add the tileset to the map
                this.map.addTilesetImage('title');
                // Create the layer, by specifying the name of the Tiled layer
                this.layer = this.map.createLayer('Tile Layer 1');
                // Set the world size to match the size of the layer
                this.layer.resizeWorld();
                this.map.setCollision([1, 2]);
                this.layer.wrap = true;
                this.tourch = this.add.group();
                var tourchJSON = this.levelData.level1.tourchPosition;
                for (var i in tourchJSON) {
                    this.tourch.create(tourchJSON[i].x, tourchJSON[i].y, 'fire', 0);
                }
                //add first coin
                var firstCoin = this.levelData.level1.coinPosition;
                //get random position
                var randomCoin = this.rnd.integerInRange(0, firstCoin.length - 1);
                //set coin
                this.coin = this.add.sprite(firstCoin[randomCoin].x, firstCoin[randomCoin].y, 'coin');
                break;
                //build level 2
            case 2:
                this.add.tileSprite(0, 0, 1000, 720, 'wall');
                this.world.setBounds(0, 0, 1000, 720);
                this.map = this.add.tilemap('level2');
                // Add the tileset to the map
                this.map.addTilesetImage('title');
                // Create the layer, by specifying the name of the Tiled layer
                this.layer = this.map.createLayer('Tile Layer 1');
                // Set the world size to match the size of the layer
                this.layer.resizeWorld();
                this.map.setCollision([1, 2]);
                this.layer.wrap = true;
                this.tourch = this.add.group();
                var tourchJSON = this.levelData.level2.tourchPosition;
                for (var i in tourchJSON) {
                    this.tourch.create(tourchJSON[i].x, tourchJSON[i].y, 'fire', 0);
                }
                //add first coin
                var firstCoin = this.levelData.level2.coinPosition;
                //get random position
                var randomCoin = this.rnd.integerInRange(0, firstCoin.length - 1);
                //set coin
                this.coin = this.add.sprite(firstCoin[randomCoin].x, firstCoin[randomCoin].y, 'coin');
                break;
                //build level 3
            case 3:
                this.add.tileSprite(0, 0, 1000, 680, 'wall');
                this.world.setBounds(0, 0, 1000, 680);
                this.map = this.add.tilemap('level3');
                var spiderJSON = this.levelData.level3.spiderPosition;
                this.spider = this.add.sprite(this.world.centerX, spiderJSON[0].y, 'spider');
                this.spider.anchor.setTo(0.5, 0.5);
                this.physics.arcade.enable(this.spider);
                this.spider.animations.add('sneak', [0, 1, 2], 5, true);
                this.spider.animations.play('sneak');
                this.time.events.loop(1500, this.moveSpider, this);
                // Add the tileset to the map
                this.map.addTilesetImage('title');
                // Create the layer, by specifying the name of the Tiled layer
                this.layer = this.map.createLayer('Tile Layer 1');
                // Set the world size to match the size of the layer
                this.layer.resizeWorld();
                this.map.setCollision([1, 2]);
                this.layer.wrap = true;
                this.tourch = this.add.group();
                var tourchJSON = this.levelData.level3.tourchPosition;
                for (var i in tourchJSON) {
                    this.tourch.create(tourchJSON[i].x, tourchJSON[i].y, 'fire', 0);
                }
                //add first coin
                var firstCoin = this.levelData.level3.coinPosition;
                //get random position
                var randomCoin = this.rnd.integerInRange(0, firstCoin.length - 1);
                //set coin
                this.coin = this.add.sprite(firstCoin[randomCoin].x, firstCoin[randomCoin].y, 'coin');
                break;
            case 4:
                this.add.tileSprite(0, 0, 1000, 680, 'wall');
                this.world.setBounds(0, 0, 1000, 680);
                this.map = this.add.tilemap('level4');
                // Add the tileset to the map
                this.map.addTilesetImage('title');
                // Create the layer, by specifying the name of the Tiled layer
                this.layer = this.map.createLayer('Tile Layer 1');
                // Set the world size to match the size of the layer
                this.layer.resizeWorld();
                this.map.setCollision([1, 2]);
                this.layer.wrap = true;
                this.tourch = this.add.group();
                var tourchJSON = this.levelData.level4.tourchPosition;
                for (var i in tourchJSON) {
                    this.tourch.create(tourchJSON[i].x, tourchJSON[i].y, 'fire', 0);
                }
                //add first coin
                var firstCoin = this.levelData.level4.coinPosition;
                //get random position
                var randomCoin = this.rnd.integerInRange(0, firstCoin.length - 1);
                //set coin
                this.coin = this.add.sprite(firstCoin[randomCoin].x, firstCoin[randomCoin].y, 'coin');
                break;
            case 5:
                this.add.tileSprite(0, 0, 1000, 720, 'wall');
                this.world.setBounds(0, 0, 1000, 720);
                this.map = this.add.tilemap('level5');
                // Add the tileset to the map
                this.map.addTilesetImage('title');
                // Create the layer, by specifying the name of the Tiled layer
                this.layer = this.map.createLayer('Tile Layer 1');
                // Set the world size to match the size of the layer
                this.layer.resizeWorld();
                this.map.setCollision([1, 2]);
                this.layer.wrap = true;
                this.spider = this.add.group();
                var spiderJSON = this.levelData.level5.spiderPosition;
                for (var i in spiderJSON) {
                    this.spider.create(spiderJSON[i].x, spiderJSON[i].y, 'spider', 0);

                }
                this.time.events.loop(3000, this.moveSpider, this);
                this.tourch = this.add.group();
                var tourchJSON = this.levelData.level5.tourchPosition;
                for (var i in tourchJSON) {
                    this.tourch.create(tourchJSON[i].x, tourchJSON[i].y, 'fire', 0);
                }
                //this.spider.anchor.setTo(0.5, 0.5);
                this.physics.arcade.enable(this.spider);
                this.spider.callAll('animations.add', 'animations', 'sneak', [0, 1, 2], 5, true);
                this.spider.callAll('play', null, 'sneak');
                this.spider.setAll('anchor.x', 0.5);
                this.spider.setAll('anchor.y', 0.5);
                //add first coin
                var firstCoin = this.levelData.level5.coinPosition;
                //get random position
                var randomCoin = this.rnd.integerInRange(0, firstCoin.length - 1);
                //set coin
                this.coin = this.add.sprite(firstCoin[randomCoin].x, firstCoin[randomCoin].y, 'coin');
                break;
                //
            case 6:
                this.add.tileSprite(0, 0, 1000, 720, 'wall');
                this.world.setBounds(0, 0, 1000, 720);
                this.map = this.add.tilemap('level6');
                // Add the tileset to the map
                this.map.addTilesetImage('title');
                // Create the layer, by specifying the name of the Tiled layer
                this.layer = this.map.createLayer('Tile Layer 1');
                // Set the world size to match the size of the layer
                this.layer.resizeWorld();
                this.map.setCollision([1, 2]);
                this.layer.wrap = true;
                this.spider = this.add.group();
                var spiderJSON = this.levelData.level6.spiderPosition;
                for (var i in spiderJSON) {
                    this.spider.create(spiderJSON[i].x, spiderJSON[i].y, 'spider', 0);

                }
                this.time.events.loop(3000, this.moveSpider, this);
                this.tourch = this.add.group();
                var tourchJSON = this.levelData.level6.tourchPosition;
                for (var i in tourchJSON) {
                    this.tourch.create(tourchJSON[i].x, tourchJSON[i].y, 'fire', 0);
                }
                //this.spider.anchor.setTo(0.5, 0.5);
                this.physics.arcade.enable(this.spider);
                this.spider.callAll('animations.add', 'animations', 'sneak', [0, 1, 2], 5, true);
                this.spider.callAll('play', null, 'sneak');
                this.spider.setAll('anchor.x', 0.5);
                this.spider.setAll('anchor.y', 0.5);
                //add first coin
                var firstCoin = this.levelData.level6.coinPosition;
                //get random position
                var randomCoin = this.rnd.integerInRange(0, firstCoin.length - 1);
                //set coin
                this.coin = this.add.sprite(firstCoin[randomCoin].x, firstCoin[randomCoin].y, 'coin');
                break;
            default :
                break;
        }
        this.physics.arcade.enable(this.coin);
        this.coin.anchor.setTo(0, 0);
        // adding lives
        for (var l = 1; l < MyGame.lives + 1; l++) {
            this.initialLives = this.add.image(40 + this.moreSpace, 80, 'lives');
            this.initialLives.fixedToCamera = true;
            this.moreSpace += 20;
        }
        this.tourch.callAll('animations.add', 'animations', 'burn', [0, 1, 2, 3], 8, true);
        this.tourch.callAll('play', null, 'burn');
        this.player = this.add.sprite(this.world.centerX, this.world.centerY, 'player');
        this.player.anchor.setTo(0.5, 0.5);
        // Create animation by looping the frames 
        this.player.animations.add('left', [0, 1, 2], 15, true);
        this.player.animations.add('right', [3, 4, 5], 15, true);
        this.physics.arcade.enable(this.player);
        this.player.body.gravity.y = 500;
        this.player.body.setSize(25, 36);
        this.camera.follow(this.player);
        this.enemies = this.add.group();
        this.enemies.enableBody = true;
        this.scoreLabel = this.add.text(50, 50, 'score: ' + MyGame.score + " / " + (50 * MyGame.level), {font: '18px Arial', fill: '#ffffff'});
        this.scoreLabel.fixedToCamera = true;
        this.scoreText = this.add.text(50, 80, 'lives:  ', {font: '18px Arial', fill: '#ffffff'});
        this.scoreText.fixedToCamera = true;
        if (MyGame.level === 4) {
            this.enemies.createMultiple(16, 'enemy');
            this.time.events.loop(1700, this.addEnemy, this);
        } else if (MyGame.level === 5) {
            this.enemies.createMultiple(14, 'enemy');
            this.time.events.loop(1700, this.addEnemy, this);
        } else if (MyGame.level === 6) {
            this.enemies.createMultiple(16, 'enemy');
            this.time.events.loop(1700, this.addEnemy, this);
        }
        else {
            this.enemies.createMultiple(10, 'enemy');
            this.time.events.loop(2500, this.addEnemy, this);
        }
    },
    update: function () {
        this.physics.arcade.collide(this.player, this.layer);
        this.physics.arcade.collide(this.enemies, this.layer);
        this.physics.arcade.overlap(this.player, this.coin, this.takeCoin, null, this);
        this.physics.arcade.overlap(this.player, this.enemies, this.playerDie, null, this);
        this.physics.arcade.overlap(this.player, this.spider, this.alertSp, null, this);
        this.movePlayer();
        if (!this.player.inWorld) {
            this.playerDie();
        }
    },
    moveSpider: function () {
        if (MyGame.level === 5 || MyGame.level === 6 ) {
            this.spider.forEach(function (member) {
                var direction = Phaser.Utils.randomChoice(-1, 1);
                var move = member.y;
                switch (direction) {
                    case -1:

                        if (move <= 220) {
                            move += 40;
                            this.add.tween(member).to({y: move}, 1200, Phaser.Easing.linear).start();
                        } else {
                            move -= 40;
                            this.add.tween(member).to({y: move}, 1200, Phaser.Easing.linear).start();
                        }
                        break;
                    case 1:
                        if (move >= 500) {
                            move -= 40;
                            this.add.tween(member).to({y: move}, 1200, Phaser.Easing.linear).start();
                        } else {
                            move += 40;
                            this.add.tween(member).to({y: move}, 1200, Phaser.Easing.linear).start();
                        }
                        break;
                }
            }, this);
        } else {
            var spiderJSON = this.levelData.level3.spiderPosition;
            var direction = Phaser.Utils.randomChoice(-1, 1);
            switch (direction) {
                case -1:
                    if (spiderJSON[0].y <= 220) {
                        spiderJSON[0].y += 40;
                        this.add.tween(this.spider).to({y: spiderJSON[0].y}, 1200, Phaser.Easing.linear).start();
                    } else {
                        spiderJSON[0].y -= 40;
                        this.add.tween(this.spider).to({y: spiderJSON[0].y}, 1200, Phaser.Easing.linear).start();
                    }
                    break;
                case 1:
                    if (spiderJSON[0].y >= 500) {
                        spiderJSON[0].y -= 40;
                        this.add.tween(this.spider).to({y: spiderJSON[0].y}, 1200, Phaser.Easing.linear).start();

                    } else {
                        spiderJSON[0].y += 40;
                        this.add.tween(this.spider).to({y: spiderJSON[0].y}, 1200, Phaser.Easing.linear).start();
                    }
                    break;
            }
        }
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

        if (this.cursor.up.isDown) {
            if (this.player.body.onFloor() && jumpTimer === 0) {
                this.jumpSound.play();
                jumpTimer = 1;
                this.player.body.velocity.y = -200;
            } else if (jumpTimer > 0 && jumpTimer < 10) {
                jumpTimer++;
                this.player.body.velocity.y = -200 - (jumpTimer * 11);
            }
        } else {
            jumpTimer = 0;
        }
    },
    takeCoin: function (player, coin) {
        // New score variable
        this.coinSound.play();
        MyGame.score += 5;
       //  this.add.text( coin.top,  coin.left, '10 ??.', {font: '18px Arial', fill: '#ffffff'});
        if (MyGame.score % 110 == 0) {
            this.numberLives = this.add.image(40 + this.moreSpace, 80, 'lives');
            this.numberLives.fixedToCamera = true;
            this.moreSpace += 20;
            MyGame.lives += 1;
            this.levelup.play();
        }
        this.scoreLabel.text = 'score: ' + MyGame.score + " / " + (50 * MyGame.level);
        if (MyGame.score === (50 * MyGame.level)) {
            MyGame.level += 1;
            this.state.start('currentlevel');
            return;
        }
        this.updateCoinPosition(); //attach event
    },
     alertSp: function () {
console.log('s')
    },
    playerDie: function () {
        // When the player dies, we go to the currentlevel screen  
        MyGame.lives -= 1;
        this.deadSound.play();
        this.state.start('currentlevel');
    },
    updateCoinPosition: function () {
        switch (MyGame.level) {
            //build level 1
            case 1:
                coinPositionJSON = this.levelData.level1.coinPosition;
                break;
                //build level 2
            case 2:
                coinPositionJSON = this.levelData.level2.coinPosition;
                break;
            case 3:
                coinPositionJSON = this.levelData.level3.coinPosition;
                break;
            case 4:
                coinPositionJSON = this.levelData.level4.coinPosition;
                break;
            case 5:
                coinPositionJSON = this.levelData.level5.coinPosition;
                break;
            case 6:
                coinPositionJSON = this.levelData.level6.coinPosition;
                break;
            default :
                break;
        }
        var newPosition = coinPositionJSON[this.rnd.between(0, coinPositionJSON.length - 1)];
        if (newPosition.x != this.coin.x) {
            this.coin.reset(newPosition.x, newPosition.y);
        } else {
            this.updateCoinPosition();
        }
    },
    addEnemy: function () {
        var enemy = this.enemies.getFirstDead();
        if (!enemy) {
            return;
        }
        enemy.anchor.setTo(0.5, 0.5);
        var direction = Phaser.Utils.randomChoice(-1, 1);
        if (direction === 1) {
            this.add.tween(enemy).to({angle: 360}, 2500, Phaser.Easing.linear).loop().start();
        } else {
            this.add.tween(enemy).to({angle: -360}, 2500, Phaser.Easing.linear).loop().start();
        }
        if (MyGame.level === 5 || MyGame.level === 6) {
            switch (direction) {
                case -1:
                    enemy.reset(this.world.centerX / 2, 0);
                    enemy.body.velocity.x = 150;
                    break;
                case 1:
                    enemy.reset(this.world.centerX + (this.world.centerX / 2), 0);
                    enemy.body.velocity.x = -150;
                    break
                default:
                    break;
            }
        } else {
            enemy.reset(this.world.centerX, 0);
            enemy.body.velocity.x = 150 * direction;
        }

        enemy.body.gravity.y = 500;
        enemy.body.bounce.x = 1;
        enemy.body.bounce.y = 0.3;
        enemy.body.setSize(36, 36);
        enemy.checkWorldBounds = true;
        enemy.outOfBoundsKill = true;
    }
};