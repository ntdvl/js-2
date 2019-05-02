var x = ['HTML5', 'CSS3', 'Javascript', 'Ruby', 'Phyton'];

console.log('Original : ' + x);
var result = x.pop();
console.log('Last : ' + x);
console.log('--------');

console.log('Original : ' + x);
var result2 = x.shift();
console.log('Last : ' + x);

console.log('-------');

console.log('Original : ' + x);
var result3 = x.unshift('HTML5');
console.log('Last : ' + x);
console.log('-------');

console.log('Original : ' + x);
var result4 = x.push('C++');
console.log('Last : ' + x);