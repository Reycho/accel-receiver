radio.onReceivedValue(function (name, value) {
    serial.writeValue(name, value)
    led.toggle(2, 0)
})
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . . # # #
    . . # # #
    `)
radio.setGroup(255)
