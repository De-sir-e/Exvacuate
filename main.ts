controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`Cat Up`,
    200,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`Cat Left`,
    100,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`Cat Right`,
    100,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`Cat Idle`,
    100,
    false
    )
})
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`myImage`)
mySprite = sprites.create(assets.image`Cat`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setPosition(77, 55)
