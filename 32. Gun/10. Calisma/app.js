var x = ['Şeftali', 'Kiraz', 'Portakal', 'Elma', 'Armut', 'Ayva', 'Yeşil Elma', 'Kırmızı Elma', 'Üzüm'];
        // 0          1        2          3       4        5          6               7

document.write('Dizinin ilk hali : ' + x + '<br>');

x.copyWithin(4, 6, 8); 

document.write('----' + '<br>');

document.write('Dizinin son hali : ' + x + ' : ' + x.length);