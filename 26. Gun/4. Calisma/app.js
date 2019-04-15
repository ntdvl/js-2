function test(par = 'ceeee') {

    var name = 'İsim ' + par;

    // return name;
    return {
        
        change:function(par2 = 'test') {

            return 'İsim ' + par2;

        },
        get:function(par3 = 'Test'){

            return 'isim ' + par3;

        }

    }

}

var result = test();
console.log(result.get());
console.log(result.change());