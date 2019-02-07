var x = 'https://www.abc.com/index.php?s=asdad&asdsadasdIĞŞÜ';

var y = encodeURI(x);

var z = decodeURI(y);

var q = encodeURIComponent(x);

var t = decodeURIComponent(q);

document.writeln(x + '<br>');
document.writeln(y + '<br>');
document.writeln(z + '<br>');
document.writeln('---------' + '<br>');
document.writeln(q + '<br>');
document.writeln(t);