var dizi = ['HTML5','CSS3', 'JavaScript', ['React', ['Redux','Redax'],'Vue','Angular',],'NodeJS'];

document.write(dizi + '<br>');
document.write(dizi[0] + '<br>');
document.write(dizi[1] + '<br>');
document.write(dizi[2] + '<br>');
document.write(dizi[3] + '<br>');
document.write(dizi[3][0] + '<br>');
document.write(dizi[3][1] + '<br>');
document.write(dizi[3][1][0] + '<br>');
document.write(dizi[3][1][1] + '<br>');
document.write(dizi[3][2] + '<br>');
document.write(dizi[3][3] + '<br>');
document.write(dizi[4] + '<br>');

console.log('There are ' + dizi.length + ' elements in the array');