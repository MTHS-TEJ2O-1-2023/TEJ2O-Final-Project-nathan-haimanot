/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Nathan Tesfaye
 * Created on: Jan 2025
 * This program ...
*/


// variables
const servoNumber1 = robotbit.Servos.S1
radio.setGroup(1)

// recieve
radio.onReceivedString(function (receivedString) {
        robotbit.Servo(servoNumber1, 180)
        basic.showIcon(IconNames.Happy)
    
    input.onButtonPressed(Button.B, function () {
        robotbit.Servo(servoNumber1, 360)
        basic.showIcon(IconNames.Happy)
    })
})
