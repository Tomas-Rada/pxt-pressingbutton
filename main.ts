let bylo: boolean = false



basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (bylo === false) {
            music.playTone(400, 200)
            bylo = true
        }
    }
    if (!input.buttonIsPressed(Button.A)) {
        bylo = false
    }





})


