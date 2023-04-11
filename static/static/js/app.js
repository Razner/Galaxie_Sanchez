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
    this.load.image('vessel', '/images/vessel.png' )
    this.load.image('laser', '/images/laser.png' )

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

    if(cursors.up.isDown){
        vessel.setVelocity(0, -400)
    }

    if(cursors.right.isDown){
        vessel.setVelocity(400, 0)
    }
    
    if(cursors.left.isDown){
        vessel.setVelocity(-400, 0)
    }

    if(cursors.space.isDown){ 
        laser = this.physics.add.image(vessel.x, vessel.y , 'laser') 
        laser.setOrigin(0.5, 0.5) // set the origin to the center of the image
        laser.scaleX = 0.3
        laser.scaleY = 0.3   
        laser.setVelocity(0, -300) 

    }

}
