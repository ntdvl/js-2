var str = 'Publish your passions your way.';

function test(par, par2) {

    if (par == 'st') {
        
        console.log(str.startsWith(par2));

    } else {

        console.log(str.endsWith(par2));

    }
    
}

test('saat', '-');