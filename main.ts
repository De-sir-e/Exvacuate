controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    myMiner,
    assets.animation`Walk backward`,
    100,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    myMiner,
    assets.animation`Walk Left`,
    150,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    myMiner,
    assets.animation`Walk Right`,
    100,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    myMiner,
    assets.animation`Walk forward`,
    100,
    false
    )
})
let myMiner: Sprite = null
tiles.setCurrentTilemap(tilemap`level 0`)
myMiner = sprites.create(assets.image`Miner`, SpriteKind.Player)
let mySprite2 = sprites.create(assets.image`Slime 2`, SpriteKind.Enemy)
scene.cameraFollowSprite(myMiner)
animation.runImageAnimation(
mySprite2,
assets.animation`Slime Animation`,
100,
true
)
controller.moveSprite(myMiner, 100, 100)
myMiner.setPosition(77, 55)
mySprite2.setBounceOnWall(true)
