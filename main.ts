radio.onReceivedValue(function (name, value) {
    led.toggle(2, 0)
    if (name == "jump") {
        OLED.writeNumNewLine(value)
        if (value % 2 == 0) {
            serial.writeValue("a.jump", 2000)
        } else {
            serial.writeValue("a.jump", 0)
        }
        serial.writeValue("b.jump", value)
    } else if (name == "step") {
        OLED.writeNumNewLine(value)
        if (value % 2 == 0) {
            serial.writeValue("a.step", 2000)
        } else {
            serial.writeValue("a.step", 0)
        }
        serial.writeValue("b.step", value)
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
