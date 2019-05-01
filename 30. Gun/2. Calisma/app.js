var car = {
    'name': 'BMW',
    'model': 2016,
    'color': 'yellow',
    'autopilot': true,
}

var result;

for(result in car) {

    document.write(car[result] + '<br>');

}