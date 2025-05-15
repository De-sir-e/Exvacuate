namespace SpriteKind {
    export const Object = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    myMiner,
    assets.animation`Walk backward`,
    100,
    true
    )
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, myMiner)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    myMiner,
    assets.animation`Walk Left`,
    150,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    myMiner,
    assets.animation`Walk Right`,
    100,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    myMiner,
    assets.animation`Walk forward`,
    100,
    true
    )
})
let myMiner: Sprite = null
tiles.setCurrentTilemap(tilemap`level 1 basic`)
myMiner = sprites.create(assets.image`Miner`, SpriteKind.Player)
let mySprite2 = sprites.create(assets.image`Slime 2`, SpriteKind.Enemy)
let mySprite3 = sprites.create(assets.image`Lantern`, SpriteKind.Object)
scene.cameraFollowSprite(myMiner)
myMiner.setPosition(176, 74)
mySprite2.setPosition(144, 464)
mySprite3.setPosition(106, 72)
animation.runImageAnimation(
mySprite2,
assets.animation`Slime Animation`,
100,
true
)
controller.moveSprite(myMiner, 100, 100)
myMiner.setPosition(77, 55)
mySprite2.setBounceOnWall(true)
