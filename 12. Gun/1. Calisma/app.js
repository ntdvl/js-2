var string = 'gel seninle kaşık atalım iki tabak keşküle';

function test(par) {
    
    var y = string.search(par);
    
    if (y > -1) {
        console.log('Matched' + ' => ' +  y);
    } else {
        console.log('Not match');
    }

}

test('kaşık');