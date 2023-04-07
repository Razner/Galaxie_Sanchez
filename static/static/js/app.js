const config = {
    width: window.innerWidth,
    height: window.innerHeight,
    type: Phaser.AUTO,
    transparent: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0}
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
    }

}


var game = new Phaser.Game(config)
let vessel 
let cursors

function preload() {
    this.load.image('vessel', '/Galaxie_Sanchez/images/vessel.png' )

}

function create() {
    vessel = this.physics.add.image(500, 500, 'vessel')
    vessel.scaleX = 0.2
    vessel.scaleY = 0.2
    vessel.body.collideWorldBounds = true

    cursors = this.input.keyboard.createCursorKeys()

}

function update() {
    vessel.setVelocityX(0, 0)
    vessel.setVelocityY(0, 0)
    

    if(cursors.down.isDown){
        vessel.setVelocity(0, 400)
    }

    if(cursors.down.isDown){
        vessel.setVelocity(0, 400)
    }

    if(cursors.up.isDown){
        vessel.setVelocity(0, -400)
    }

    if(cursors.right.isDown){
        vessel.setVelocity(400, 0)
    }
    
    if(cursors.left.isDown){
        vessel.setVelocity(-400, 0)
    }
    
    

}
