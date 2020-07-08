
MyGame.startscreen = function () {

}
MyGame.startscreen.prototype = {
    create: function () {
        this.preloadBar = this.add.sprite(this.world.centerX, 200, 'progressBar');
        this.preloadBar.anchor.setTo(0.5, 0.5);
        this.load.setPreloadSprite(this.preloadBar);
        this.music = this.add.audio('bgmusic'); // Add the music
        // this.music.loop = true; // Make it 
        this.music.volume = 0.2;
        this.music.play(); // Start the music
// Add a background image
        this.add.image(0, 0, 'background');
// Display the name of the game
        var nameLabel = this.add.text(this.world.centerX, -50, 'Super Coin Box', {font: '50px Arial', fill: '#ffffff'});
        this.add.tween(nameLabel).to({y: 80}, 1000).easing(Phaser.Easing.Bounce.Out).start();
        nameLabel.anchor.setTo(0.5, 0.5);

        var text = 'score: ' + score + '\nbest score: ' + localStorage.getItem('bestScore');
// Show the score at the center of the screen
        var scoreLabel = this.add.text(this.world.centerX, this.world.centerY, text,
                {font: '25px Arial', fill: '#ffffff', align: 'center'});
        scoreLabel.anchor.setTo(0.5, 0.5);
// Explain how to start the game
        var startLabel = this.add.text(this.world.centerX, this.world.height - 80,
                'press the up arrow key to start',
                {font: '25px Arial', fill: '#ffffff', align: 'center'});
        startLabel.anchor.setTo(0.5, 0.5);
        this.add.tween(startLabel).to({angle: -2}, 500).to({angle: 2}, 500).loop().start();



// Create a new Phaser keyboard variable: the up arrow key
        var upKey = this.input.keyboard.addKey(Phaser.Keyboard.UP);
// When the 'upKey' is pressed, it will call the 'start' function once
        upKey.onDown.addOnce(this.start, this);
        // If 'bestScore' is not defined
// It means that this is the first time the game is played
        if (!localStorage.getItem('bestScore')) {
// Then set the best score to 0
            localStorage.setItem('bestScore', 0);
        }
        // If the score is higher than the best score
        if (score > localStorage.getItem('bestScore')) {
// Then update the best score
            localStorage.setItem('bestScore', score);
        }
        this.muteButton = this.add.button(20, 20, 'mute', this.toggleSound, this);
// If the mouse is over the button, it becomes a hand cursor
        this.muteButton.input.useHandCursor = true;
        if (this.sound.mute) {
// Change the frame to display the speaker with no sound
            this.muteButton.frame = 1;
        }
    }
    ,
    start: function () {

        this.state.start('playGame');
    },
    toggleSound: function () {
// Switch the Phaser sound variable from true to false, or false to true
// When 'this.sound.mute = true', Phaser will mute the game
        this.sound.mute = !this.sound.mute;
// Change the frame of the button
        this.muteButton.frame = this.sound.mute ? 1 : 0;
    }
}