var str = window.prompt('Lütfen bir şeyler yazın');

var str2 = str.length;


if (typ == 'string') {

    if (str2 < 3)  {
    
        document.write('Lütfen 3 harften fazla yazınız.');
        
    }else if (str2 > 5 ) {
        
        document.write("5\'ten büyük");
        
    }else if (str2 > 10) {

        document.write("10\'ten büyük");

    }else {
    
        document.write('Hata!');
        
    }
    
} else {

    document.write('Lütfen bir string giriniz');

}