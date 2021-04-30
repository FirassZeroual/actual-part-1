let END = 24
while (END > 0) {
    for (let index = 0; index < 25; index++) {
        for (let index2 = 0; index2 <= END; index2++) {
            led.plot(index2 % 5, index2 / 5)
            basic.pause(100)
            led.unplot(index2 % 5, index2 / 5)
        }
        led.plot(END % 5, END / 5)
        END += -1
    }
}
END = 24
while (END > 0) {
    for (let index = 0; index < 25; index++) {
        for (let index4 = 0; index4 <= END; index4++) {
            led.unplot(index4 % 5, index4 / 5)
            basic.pause(100)
            led.plot(index4 / 5, index4 % 5)
        }
        led.unplot(END % 5, END / 5)
        END += -1
    }
}
basic.showString("The end!",50)
