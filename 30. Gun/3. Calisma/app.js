var lang = ['C', 'C#', 'C++', 'Phtyon', ['HTML5', 'CSS3', ['Sass', 'Less', 'Stylus'], 'JavaScript', 'Angular'], 'Delphi', 'Pascal', 'BASIC', 'R', 'PHP'];

document.write(lang + ' => ' + lang.length +  '<br><br>');

var result;

for(result in lang) {


    if (Array.isArray(lang[result])) {

        var result2;

        for (result2 in lang[result]) {

            if (Array.isArray(lang[result][result2])) {

                var result3;

                for (result3 in lang[result][result2]) {

                    if (Array.isArray(lang[result][result2][result3])) {

                        document.write(lang[result][result2][result3]);

                    } else {

                        document.write(lang[result][result2][result3] + '<br>');
                        
                    }

                }

            } else {

                document.write(lang[result][result2] + '<br>');

            }

        }


    } else {

        document.write(lang[result] + '<br>');

    }
    
}