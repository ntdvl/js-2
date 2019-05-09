var x = ['HTML5', 'CSS3', 'JavaScript', 'Ruby', 'React', 'Angular', 'Vue'];

document.write('Dizinin ilk hali : ' + x + '<br>');

var y = x.splice(1, 3);

document.write('Silinen değerler : ' + y + '<br>');

document.write('Dizinin son hali : ' + x);