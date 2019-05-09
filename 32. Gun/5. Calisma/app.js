var x = ['HTML5', 'CSS3', 'JavaScript', 'Ruby'];

document.write(x + '<br>');

var y = x.splice(0, 0, 'Ruby');

var z = x.splice(5, 0, 'Ruby2');

document.write(y + '<br>');

document.write(z + '<br>');

document.write(x);