scene.setBackgroundImage(assets.image`myImage`)
let mySprite = sprites.create(assets.image`myImage2`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setPosition(0, 0)
