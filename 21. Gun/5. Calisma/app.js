var i = 0;

while (i < 10) {
    document.write(i + '<br>');
    i++;
    if (i == 6) {
        i++;
        continue;
    }
}