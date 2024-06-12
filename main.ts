basic.forever(function () {
    basic.showIcon(IconNames.Sad)
    if (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index <= 4; index++) {
            basic.showNumber(index)
            cuteBot.moveTime(cuteBot.Direction.forward, 30, 0.5)
            cuteBot.moveTime(cuteBot.Direction.left, 30, 0.25)
        }
    }
})
