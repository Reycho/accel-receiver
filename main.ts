radio.onReceivedValue(function (name, value) {
    led.toggle(2, 0)
    if (name == "step") {
        OLED.writeNumNewLine(value)
        if (value % 2 == 0) {
            serial.writeValue("a.steps", 2000)
        } else {
            serial.writeValue("a.steps", 0)
        }
        serial.writeValue("steps", value)
    } else {
        serial.writeValue("a.accel", value)
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
