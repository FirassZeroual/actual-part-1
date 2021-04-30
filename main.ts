function PLOT () {
    for (let index = 0; index <= END; index++) {
        led.plot(4, 4)
    }
}
let END = 0
END = 24
while (END > 0) {
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index <= END; index++) {
            led.plot(index % 5, index / 5)
            basic.pause(100)
            led.unplot(index % 5, index / 5)
        }
        PLOT()
        END += -1
    }
    led.plot(3, 4)
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index <= END; index++) {
            led.plot(index % 5, index / 5)
            basic.pause(100)
            led.unplot(index % 5, index / 5)
        }
        PLOT()
        END += -1
    }
    led.plot(2, 4)
    for (let index = 0; index <= END; index++) {
        led.plot(index % 5, index / 5)
        basic.pause(100)
        led.unplot(index % 5, index / 5)
    }
    PLOT()
    END += -1
    led.plot(1, 4)
    for (let index = 0; index <= END; index++) {
        led.plot(index % 5, index / 5)
        basic.pause(100)
        led.unplot(index % 5, index / 5)
    }
    PLOT()
    END += -1
    led.plot(0, 4)
}
basic.forever(function () {
	
})
