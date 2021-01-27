radio.onReceivedValue(function (name, value) {
    if (name == "timerunnig") {
        cw01.IoTMQTTSendPayload(convertToText(value), name)
        basic.pause(200)
        cw01.IoTMQTTSendPayload("timerunning empfangen", "system")
        basic.pause(200)
        cw01.IoTSendValueToATT(value, name)
        basic.pause(200)
    } else if (name == "airtemp") {
        cw01.IoTMQTTSendPayload(convertToText(value), name)
        basic.pause(200)
        cw01.IoTMQTTSendPayload("airtemp empfangen", "system")
        cw01.IoTSendValueToATT(value, name)
        basic.pause(200)
    } else if (name == "airhum") {
        cw01.IoTMQTTSendPayload(convertToText(value), name)
        basic.pause(200)
        cw01.IoTMQTTSendPayload("airhum empfangen", "system")
        cw01.IoTSendValueToATT(value, name)
        basic.pause(200)
    } else if (name == "airpress") {
        cw01.IoTMQTTSendPayload(convertToText(value), name)
        basic.pause(200)
        cw01.IoTMQTTSendPayload("airpress empfangen", "system")
        cw01.IoTSendValueToATT(value, name)
        basic.pause(200)
    } else if (name == "altitude") {
        cw01.IoTMQTTSendPayload(convertToText(value), name)
        basic.pause(200)
        cw01.IoTMQTTSendPayload("altitude empfangen", "system")
        cw01.IoTSendValueToATT(value, name)
        basic.pause(200)
    } else if (name == "rain") {
        cw01.IoTMQTTSendPayload(convertToText(value), name)
        basic.pause(200)
        cw01.IoTMQTTSendPayload("rain empfangen", "system")
        cw01.IoTSendValueToATT(value, name)
        basic.pause(200)
    } else if (name == "windspeed") {
        cw01.IoTMQTTSendPayload(convertToText(value), name)
        basic.pause(200)
        cw01.IoTMQTTSendPayload("windspeed empfangen", "system")
        cw01.IoTSendValueToATT(value, name)
        basic.pause(200)
    } else if (name == "winddirection") {
        if (value == 1) {
            cw01.IoTMQTTSendPayload("N", name)
            basic.pause(200)
            cw01.IoTMQTTSendPayload("winddirection empfangen", "system")
        } else if (value == 2) {
            cw01.IoTMQTTSendPayload("NE", name)
            basic.pause(200)
            cw01.IoTMQTTSendPayload("winddirection empfangen", "system")
        } else if (value == 3) {
            cw01.IoTMQTTSendPayload("E", name)
            basic.pause(200)
            cw01.IoTMQTTSendPayload("winddirection empfangen", "system")
        } else if (value == 4) {
            cw01.IoTMQTTSendPayload("SE", name)
            basic.pause(200)
            cw01.IoTMQTTSendPayload("winddirection empfangen", "system")
        } else if (value == 5) {
            cw01.IoTMQTTSendPayload("S", name)
            basic.pause(200)
            cw01.IoTMQTTSendPayload("winddirection empfangen", "system")
        } else if (value == 6) {
            cw01.IoTMQTTSendPayload("SW", name)
            basic.pause(100)
            cw01.IoTMQTTSendPayload("winddirection empfangen", "system")
        } else if (value == 7) {
            cw01.IoTMQTTSendPayload("W", name)
            basic.pause(200)
            cw01.IoTMQTTSendPayload("winddirection empfangen", "system")
        } else if (value == 8) {
            cw01.IoTMQTTSendPayload("NW", name)
            basic.pause(200)
            cw01.IoTMQTTSendPayload("winddirection empfangen", "system")
        } else {
            cw01.IoTMQTTSendPayload("??", name)
            basic.pause(200)
            cw01.IoTMQTTSendPayload("winddirection Fehler", "system")
        }
        cw01.IoTSendValueToATT(value, name)
        basic.pause(200)
    } else if (name == "soilhum") {
        cw01.IoTMQTTSendPayload(convertToText(value), name)
        basic.pause(200)
        cw01.IoTMQTTSendPayload("soilhum empfangen", "system")
        cw01.IoTSendValueToATT(value, name)
        basic.pause(200)
    } else if (name == "soiltemp") {
        cw01.IoTMQTTSendPayload(convertToText(value), name)
        basic.pause(200)
        cw01.IoTMQTTSendPayload("soiltemp empfangen", "system")
        cw01.IoTSendValueToATT(value, name)
    } else {
        debug = 1
    }
    debug = 1
})
let debug = 0
cw01.connectToWifi("DefConNet", "taliesin999")
cw01.IoTMQTTConnect("10.0.0.71", "mirveglius@gmail.com", "Taliesin123!")
cw01.IoTMQTTSetClientID("1055b1005ef211eb94b585e2e57c004e")
cw01.connectToATT("maker:4Tx5Pui9uwzrm0lqFx8yxe2cWp8ASOOZllS09U7", "NcnYeBgN1J1tVkbXyiospAeJ")
radio.setGroup(1)
cw01.IoTMQTTSendPayload(control.deviceName(), "system")
cw01.IoTMQTTSendPayload(convertToText(control.deviceSerialNumber()), "system")
debug = 1
basic.forever(function () {
    if (debug == 1) {
        cw01.IoTMQTTSendPayload("Request gesendet", "system")
        radio.sendValue("Request", 0)
        for (let wait = 0; wait <= 2; wait++) {
            for (let index = 0; index < wait; index++) {
                basic.showLeds(`
                    # # # # #
                    . . . . #
                    # . . . #
                    # . . . #
                    # # # # #
                    `)
                basic.showLeds(`
                    # # # # #
                    . . . . #
                    . . . . #
                    # . . . #
                    # # # # #
                    `)
                basic.showLeds(`
                    # # # # #
                    . . . . #
                    . . . . #
                    . . . . #
                    # # # # #
                    `)
                basic.showLeds(`
                    # # # # #
                    . . . . #
                    . . . . #
                    . . . . #
                    . # # # #
                    `)
                basic.showLeds(`
                    # # # # #
                    . . . . #
                    . . . . #
                    . . . . #
                    . . # # #
                    `)
                basic.showLeds(`
                    # # # # #
                    . . . . #
                    . . . . #
                    . . . . #
                    . . . # #
                    `)
                basic.showLeds(`
                    # # # # #
                    . . . . #
                    . . . . #
                    . . . . #
                    . . . . #
                    `)
                basic.showLeds(`
                    # # # # #
                    . . . . #
                    . . . . #
                    . . . . #
                    . . . . .
                    `)
                basic.showLeds(`
                    # # # # #
                    . . . . #
                    . . . . #
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    # # # # #
                    . . . . #
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    # # # # #
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    # # # # .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    # # # . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    # # . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    # . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    # # . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    # # # . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    # # # # .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    # # # # #
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    # # # # #
                    . . . . #
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    # # # # #
                    . . . . #
                    . . . . #
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    # # # # #
                    . . . . #
                    . . . . #
                    . . . . #
                    . . . . .
                    `)
                basic.showLeds(`
                    # # # # #
                    . . . . #
                    . . . . #
                    . . . . #
                    . . . . #
                    `)
                basic.showLeds(`
                    # # # # #
                    . . . . #
                    . . . . #
                    . . . . #
                    . . . # #
                    `)
                basic.showLeds(`
                    # # # # #
                    . . . . #
                    . . . . #
                    . . . . #
                    . . # # #
                    `)
                basic.showLeds(`
                    # # # # #
                    . . . . #
                    . . . . #
                    . . . . #
                    . # # # #
                    `)
                basic.showLeds(`
                    # # # # #
                    . . . . #
                    . . . . #
                    . . . . #
                    # # # # #
                    `)
                basic.showLeds(`
                    # # # # #
                    . . . . #
                    . . . . #
                    # . . . #
                    # # # # #
                    `)
                basic.showLeds(`
                    # # # # #
                    . . . . #
                    # . . . #
                    # . . . #
                    # # # # #
                    `)
            }
            debug = 0
        }
        basic.pause(100000)
        debug = 1
    }
})
