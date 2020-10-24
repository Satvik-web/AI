enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    music.playMelody("E E F G G F E D ", 120)
    music.playMelody("C C D E E D D - ", 120)
    music.playMelody("E E F G G F E D ", 120)
    music.playMelody("C C D E D C C - ", 120)
    basic.showString("Press The Button B to Hear The Full Song")
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("E E F G G F E D ", 120)
    music.playMelody("C C D E E D D - ", 120)
    music.playMelody("E E F G G F E D ", 120)
    music.playMelody("C C D E D C C - ", 120)
    music.playMelody("D D E C D F E C ", 120)
    music.playMelody("D F E C D F E D ", 120)
    music.playMelody("C D G G - - - - ", 120)
    music.playMelody("E E F G G F E D ", 120)
    music.playMelody("C C D E D C C - ", 120)
    basic.showString("Do you")
    radio.sendMessage(RadioMessage.message1)
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    basic.showString("Want To Play Another Song")
})
basic.showString("Press The Button A To Start Playing The Song \"Ode To Joy\"")
