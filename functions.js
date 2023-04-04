showTime();
var gasLevel = 0;

function getGas() {
    if(gasLevel == 0) {

        gasLevel = 1;
        document.getElementById('bttn_gas').src='./assets/images/bttn_gas_1.PNG';
        document.getElementById('gas').src='./assets/images/gas1.png';
    } else {
        gasLevel = 0;
        document.getElementById('bttn_gas').src='./assets/images/bttn_gas_0.PNG';
        document.getElementById('gas').src='./assets/images/gas0.png';
    }
}

var tracControl, batteryCharge, parkBrake;
tracControl = 1;
batteryCharge = 0;
parkBrake = true;
function getTraction() {
    if(tracControl == 1){

        tracControl = 0;
        document.getElementById('trac').src='./assets/images/trac1.PNG';
        document.getElementById('bttn_trac').src='./assets/images/bttn_trac_0.PNG';
    } else {
        tracControl = 1;
        document.getElementById('trac').src='./assets/images/trac0.PNG';
        document.getElementById('bttn_trac').src='./assets/images/bttn_trac_1.PNG';

    }
}

function chargeBattery() {
    if(batteryCharge == 0){
        batteryCharge = 1;

        document.getElementById('batt').src='./assets/images/batt1.PNG';
        document.getElementById('bttn_batt').src='./assets/images/bttn_batt_1.PNG';
    } else {
        batteryCharge = 0;

        document.getElementById('batt').src='./assets/images/batt0.PNG';
        document.getElementById('bttn_batt').src='./assets/images/bttn_batt_0.PNG';
    }
}

function parkCar() {
    if(parkBrake == true) {
        parkBrake = false;

        document.getElementById('brake').src='./assets/images/p0.PNG';
        document.getElementById('bttn_park').src='./assets/images/bttn_park_0.PNG';
    } else {
        parkBrake = true;

        document.getElementById('brake').src='./assets/images/p1.PNG';
        document.getElementById('bttn_park').src='./assets/images/bttn_park_1.PNG';
    }
}