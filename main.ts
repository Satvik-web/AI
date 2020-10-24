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
    radio.sendValue("Play Ode To Joy Fully", 0)
})
basic.showString("Press The Button A To Start Playing")
