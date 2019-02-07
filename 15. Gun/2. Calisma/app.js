// function test() {

//     var x = document.getElementById('test').value;
//     document.getElementById('test').value = x.toUpperCase();


// }

document.getElementById('test').addEventListener('keypress', function() {

    var a = document.getElementById('test').value;
    document.getElementById('test').value = a.toUpperCase();
    

})