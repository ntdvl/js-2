var car = {
    brand : 'Tesla',
    model : 'Model x',
    color : 'darkblue'
};

console.log(car.brand);

delete car.brand;

console.log(car.brand);

console.log('brand' in car);