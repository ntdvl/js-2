var str = 'Publish your passions your way.';

function test(par) {

    var y = str.includes(par);

    if (y == true) {
        console.log('True');
    } else {
        console.log('False');
    }

}

test('you');