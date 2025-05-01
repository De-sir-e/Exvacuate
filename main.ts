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
    100,
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
scene.setBackgroundImage(assets.image`myImage`)
mySprite = sprites.create(assets.image`myImage9`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setPosition(77, 55)
