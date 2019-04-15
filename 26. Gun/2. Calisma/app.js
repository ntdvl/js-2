function test() {

    for (var i = 0; i < arguments.length; i++) {

        console.log(arguments[i]);

    }

}

test('a', 'b', true, false, undefined, null, ['A', 'B']);