let loading = false;

basic.forever(function on_forever() {


if (input.buttonIsPressed(Button.A)){
 loadBattery();
}

})

function loadBattery(){

    
    pins.analogWritePin(AnalogPin.P0, 1023)
}

