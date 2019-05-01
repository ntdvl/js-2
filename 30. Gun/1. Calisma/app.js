var dizi = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Redux'];

var result;

for(result in dizi) {
    
    if(result >= 2 && result < 4) {
        document.write('=>' + dizi[result] + '<br>');
    } else {
        document.write(dizi[result] + '<br>');
    }

}