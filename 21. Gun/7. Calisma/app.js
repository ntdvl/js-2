var obj = {
    name: 'Dubleks',
    room: 7,
    autopark: true
}

var i;
for (i in obj) {
    if (obj[i] == 7) {
        continue;
    }
    document.write(obj[i] + '<br>');    
}