let pocitadlo = 0
input.onButtonPressed(Button.A, function () {
    pocitadlo += 1
})
input.onButtonPressed(Button.AB, function () {
    pocitadlo = 0
})
input.onButtonPressed(Button.B, function () {
    pocitadlo += -1
})
basic.forever(function () {
    basic.showNumber(pocitadlo)
})
