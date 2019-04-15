function a() {

    document.write(a.caller);

}

document.write('\n');

function b() {

    document.write(b.caller);
    a();
    
}

b();