var x = ['HTML5', 'CSS3', 'JavaScript'];

(function test() {

    if (x.length > 0) {

        var result = window.prompt('Which indis ?');
        delete x[result];
        document.write(x);

    } else {

        console.log('There is no element');

    }

})();