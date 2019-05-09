var x = ['HTML5', 'CSS3', 'JavaScript', 'Ruby', 'Node.JS'];

document.write('Dizinin ilk hali : ' + x + '<br>');

var y = x.splice(5, 0, 'Angular', 'React');

document.write('Silinen eleman : ' + y + '<br>');

document.write('Dizinin son hali : ' + x);