var i = 0;

do {
    document.write(i + '<br>');
    i++;
    if (i == 5) {
        i++;
        continue;
    }

} while (i < 10);