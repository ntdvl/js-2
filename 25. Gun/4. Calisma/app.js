function test(start, end) {


    if (start < end) {
        document.write('Test' + '<br>');
        start = start + 1;
        test(start, end);
    }else {
        return;
    }


}

test(10, 20);