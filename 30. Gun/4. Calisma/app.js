var dizi = ['A', 'B', 'C', ['ç', 'ğ', 'ş', 'ü'], 'D', 'E', 'F', 'G'];

document.write(dizi + '<br><br>');

var result;

for (result in dizi) {

    if (Array.isArray(dizi[result])) {

        var result2;
        for (result2 in dizi[result]) {

            if (Array.isArray(dizi[result][result2])) {

                document.write(dizi[result][result2]);

            } else {

                document.write(dizi[result][result2] + '<br>');

            }

        }

    } else {

        document.write(dizi[result] + '<br>');

    }

}