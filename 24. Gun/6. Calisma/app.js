function convert(type, total) {

    if (type == 'TL') {

        var kur = 1;

    } else if (type == 'USD') {

        var kur = 8;

    } else if (type == 'Euro') {

        var kur = 9;
    }

    return carp(kur, total);
}

function carp(a, b) {

    var result = a * b;
    console.log(result);

}

convert('USD', 10);