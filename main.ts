namespace SpriteKind {
    export const Princess = SpriteKind.create()
    export const Will = SpriteKind.create()
}
function conversacion () {
    player2.say("Hello!", 500)
    pause(500)
    princess.say("Hello!", 500)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    conversacion()
    changeScore()
})
function changeScore () {
    info.changeScoreBy(1)
    music.playSound(music.sounds(Sounds.PowerUp))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Princess, function (sprite, otherSprite) {
    conversacion()
})
let princess: Sprite = null
let player2: Sprite = null
player2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 b b 9 9 9 9 b b 9 9 9 . 
    . 9 9 9 b b 9 9 9 9 b b 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(player2, 100, 100)
player2.setStayInScreen(true)
princess = sprites.create(sprites.builtin.villager4WalkFront1, SpriteKind.Will)
princess.setPosition(50, 50)
