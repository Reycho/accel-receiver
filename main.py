def on_button_pressed_a():
    music.set_built_in_speaker_enabled(False)
    music.play_tone(262, music.beat(BeatFraction.WHOLE))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    pass
basic.forever(on_forever)
