try {
    
    var obj = document.getElementById('test');
    obj.className = 'test';

} catch (error) {
    
    document.write('No' + '<br>');

} finally {

    document.write('Ok');

}