radio.onReceivedValue(function (name, value) {
    serial.writeValue(name, value)
    led.toggle(2, 0)
    if (name == "step") {
        OLED.writeNumNewLine(value)
    }
})
OLED.init(128, 64)
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . . # # #
    . . # # #
    `)
radio.setGroup(255)
