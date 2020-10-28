enum RadioMessage {
    message1 = 49434
}
let Degree = 0
basic.forever(function () {
    Degree = input.compassHeading()
    if (Degree < 45) {
        basic.showString("N")
    } else if (Degree < 135) {
        basic.showString("E")
    } else if (Degree < 225) {
        basic.showString("S")
    } else if (Degree < 315) {
        basic.showString("W")
    } else {
        basic.showString("N")
    }
})
