controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`Walk backward`,
    100,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`Walk Left`,
    150,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`Walk Right`,
    100,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`Walk forward`,
    100,
    false
    )
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`myImage9`, SpriteKind.Player)
let mySprite2 = sprites.create(assets.image`Slime 2`, SpriteKind.Enemy)
animation.runImageAnimation(
mySprite2,
assets.animation`Slime Animation`,
100,
true
)
controller.moveSprite(mySprite, 100, 100)
mySprite.setPosition(77, 55)
mySprite2.setBounceOnWall(true)
mySprite2.follow(mySprite, 10)
